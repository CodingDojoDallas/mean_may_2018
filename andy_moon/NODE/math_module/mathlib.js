module.exports = function (){
  return {
    add: function(num1, num2) { 
      console.log("What is " +num1+ "+" +num2+"?");
      console.log("the sum is:", num1 + num2);
    },
    multiply: function(num1, num2) {
      console.log("What is " +num1+ "x" +num2+"?");
      console.log("the answer is:", num1 * num2);
    },
    square: function(num) {
      console.log("What is "+num+" squared?");
      console.log("the answer is:", (num * num));
    },
    random: function(num1, num2) {
      console.log("Let me pick arandom number between "+num1+" and "+num2);
      console.log("the random number is:", Math.floor(Math.random() * 10) + 1);
    },
    greet: function(){
      console.log("What's up math nerd.");
  },
  }
};
