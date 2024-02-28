let input = prompt("What would you like to do? (Enter 'q' or 'quit' to quit.)");
// 처음에 q 입력 시 종료

const todos = ["Study Equal Magic", "Plus 1 Good Day"];

while (input !== "q" && input !== "quit") {
  if (input === "list") {
    console.log("*************************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*************************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new to do?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete: "));
    if (!Number.isNaN(index)) {
      // index가 숫자인지 검사
      const deleted = todos.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      // index가 숫자가 아닐 경우
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do?");
}

console.log("quit");
