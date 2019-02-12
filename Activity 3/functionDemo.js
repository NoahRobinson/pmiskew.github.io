//Class/Static methods:
//These are methods that do not require an implied object. THe method is simply called with the name
//of the class
//	<Name of Class>.<method>(param);

//Name and purpose: pow(a,b) takes two integers and returns the first to the power of the second. 
//Parameters: Two integer types a and b
//Return: integer of a to the power of b
//Class method since we are calling it with the name of the class
x = Math.pow(8,2);
console.log(x);


//Instance Methods:
//These methods are called with an instance that is acted on by the method.  The way to call them is
// <instance>.<method>(param);

str = "Paul";
letters = str.substring(0,2);
console.log(letters);
