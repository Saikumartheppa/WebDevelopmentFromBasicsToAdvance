// const createTodo = async () => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "CodeWithHarry",
//       body: "JavaScript Post Request",
//       userId: 1,
//     }),
//   };
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//     let data = await response.json();
//     return data;
// };

const createTodo = async (todoBody) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoBody),
  };
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let data = await response.json();
    return data;
};

const getTodo = async (id) => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    let data = await response.json();
    return data;    
}

const mainFunction = async () => {
  let todoBody = {
      title: "CodeWithHarry",
      body: "JavaScript Post Request",
      userId: 1,
  }
  let todo = await createTodo(todoBody);
  console.log(todo);
  let todoData = await getTodo(101);
  console.log(todoData);
}
mainFunction();
