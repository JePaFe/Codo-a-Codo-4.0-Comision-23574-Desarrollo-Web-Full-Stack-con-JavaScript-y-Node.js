fetch("https://json-server.jepafe.repl.co/tasks")
  .then((response) => response.json())
  .then((tareas) => console.log(tareas))
  .catch((error) => console.log(error));

// const tarea = {
//   id: Date.now(),
//   text: "Tarea 3",
//   complete: false,
// };

// console.log(JSON.stringify(tarea));

// fetch("https://json-server.jepafe.repl.co/tasks", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(tarea),
// });

