const taskList = document.querySelector("#taskList");
let tareas;

const getTasks = async () => {
  try {
    // console.log("3");
    const response = await fetch("https://json-server.jepafe.repl.co/tasks");
    // console.log("4");
    tareas = await response.json();
    // console.log(tareas);

    tareas.forEach((tarea) => {
      const li = document.createElement("li");
      li.textContent = tarea.text;

      li.addEventListener("click", async () => {
        tarea.complete = true;
        // console.log(tarea);

        const response = await fetch(
          "https://json-server.jepafe.repl.co/tasks/" + tarea.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tarea),
          }
        );
        const datos = await response.json();
        console.log(datos);
      });

      taskList.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

// console.log("1");
getTasks();
// console.log("2");
