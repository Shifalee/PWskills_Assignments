/*Create a javascript function called generateGreeting that takes a name as an argument and returns a
personalized greeting Message .Use this function to greet three different people.*/


function generateGreeting(name) {
    return `Hello, ${name}! Welcome to our platform.`;
  }
  
  const person1 = 'Alice';
  const person2 = 'Bob';
  const person3 = 'Charlie';
  
  const greeting1 = generateGreeting(person1);
  const greeting2 = generateGreeting(person2);
  const greeting3 = generateGreeting(person3);
  
  console.log(greeting1);
  console.log(greeting2);
  console.log(greeting3);
  

