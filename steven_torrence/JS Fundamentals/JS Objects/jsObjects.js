let students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

function challenge1 (arr){
    for(var i = 0; i < arr.length; i++){
        console.log('Name: ' + arr[i].name + ', Cohort: ' + arr[i].cohort);
    }
}

challenge1(students)
console.log('')

function challenge2(obj){
    var count = 1;
    
    console.log("EMPLOYEES");
    for(var i = 0; i < users.employees.length; i++){
        console.log(count + " - " + obj.employees[i].last_name.toUpperCase() + ", " + obj.employees[i].first_name.toUpperCase() + " - " + (obj.employees[i].first_name.length + obj.employees[i].last_name.length));
        count ++;
    }

    var count = 1;
    console.log("MANAGERS")
    for (var i = 0; i < obj.managers.length; i++) {
        console.log(count + " - " + obj.managers[i].last_name.toUpperCase() + ", " + obj.managers[i].first_name.toUpperCase() + " - " + (obj.managers[i].first_name.length + obj.managers[i].last_name.length));
        count++;
    }
}

challenge2(users)