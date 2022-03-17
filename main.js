const prompt = require("prompt-sync")()

console.log(`Welcome to my TODO List Manager!!!`);
console.log(`************************************` );

let todos = [];
let complete = [];
let input;

console.log(`Your TO-DO list is empty! Would you like to add a TODO?`);

while (input !== 3) {
  console.log(`Enter [1] to create a TO-DO item`);
  console.log(`Enter [2] to mark a completed TO-DO item`);
  console.log(`Enter [3] to exit out of the TODO List Manager`);
  console.log(`Please enter a choice`);
  input = Number(prompt(`> `))

  if (input === 1) {
    console.log(`Create a T0-DO`);
    console.log(`What would you like to call your TODO?`);
    
    let todo = prompt(` > `)
    todos.push(todo);
    complete.push(`[incomplete]`)

    console.log(`************************************`);
    console.log(`*********[NOT COMPLETED TODO]********`);
    for (let i = 0; i < todos.length; i++) 
      console.log(`${i+1} ${complete[i]} ${todos[i]}`);

    console.log(`*************************************`);
    
  } else if (input === 2) {
      console.log(`Complete a TODO item`);
      console.log(`Which item do you want to Complete?`);
      console.log(`Choose the number that correlates with the TODO`);
      let completed = Number(prompt(` > `))
      complete[completed -1] = `[completed]`
    
    console.log("You have " + todos.length + " todo items");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i+1}. ${complete[i]} ${todos[i]}`)};
    
    } else if (input === 3) {
      console.log(`Exited out of program.`);
    }
}

