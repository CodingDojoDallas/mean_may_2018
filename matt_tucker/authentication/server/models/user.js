let mongoose 	= require('mongoose'),
	bcrypt		= require('bcrypt-as-promised'),
	unique		= require('mongoose-unique-validator'),
	moment		= require('moment');

let UserSchema = mongoose.Schema({
	first_name: {
		type: String,
		required: [true, "First name is required."],
		minlength: [2, "First name must be at least 2 characters long."]
	},
	last_name: {
		type: String,
		required: [true, "Last name is required"],
		minlength: [2, "Last name must be at least 2 characters long."]
	},
	email: {
		type: String,
		unique: true,
		required: [true, "Email is required"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Invalid email format"
		]
	},
	password: {
		type: String,
		minlength: [8, "Password must be at least 8 characters long."],
		required: [true, "Password is required"],
	},
	birthday: {
		type: Date,
		required: [true, "Birthday is required"],
		validate: {  // Custom Validator
			validator: (value) => {
    			return moment().diff(value) >= 0
			},
			message: "Birthdate can not be a future date."
		}
	}
}, {timestamps: true});

// Uniqueness
UserSchema.plugin(unique, { message: "Account using '{VALUE}' already exists."});

// Custom Model Methods
UserSchema.methods = {
	full_name: () => {
		return `${this.first_name} ${this.last_name}`;
	},
	encrypt: function(next) {
		let user = this;

		bcrypt.hash(user.password, 10)
		.then( (hashPW) => {
			user.password = hashPW;

			next();
		})
	}
}

// New (Before/After)

// Validate (Before/After)

// Save (Before/After)

// Before Save (Middleware)
UserSchema.pre('save', function(next) {
	let user = this;

	user.encrypt(next);
});

module.exports = mongoose.model('User', UserSchema);