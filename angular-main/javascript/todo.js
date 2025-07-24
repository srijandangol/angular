let tasks = []

function generateId(){
    return Math.floor(Math.random()*100000)
}

function saveToServer(task) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!task || !task.title) {
        reject("Invalid task data!");
      } else {
        resolve(`Task "${task.title}" saved to server.`);
      }
    }, 1000);
  });
}


function addTask(title, callback){
    if(!title || typeof title!== "string"){
        throw new Error("Title must be a non-empty string");
    }

    const task = {
        id: generateId(),
        title,
        completed: false
    };

    tasks.push(task);

    callback(task);

    saveToServer(task)
        .then((message) => console.log(message))
        .catch((error) => console.log(error));
}

function viewTask(){
    if (tasks.length === 0){
        console.log("No Task Found");
        return;
    }

    console.log("\n ToDo List");
    for (let task of tasks){
        console.log(`[${task.completed ? "x" : " "}] (${task.id}) (${task.title})`);
    }
}

async function completedTask(id){
    try{
        const task = tasks.find(t=>t.id === id);
        if(!task) throw new Error("Task does not exist!");

        task.completed = true;
        const message = await saveToServer(task);
        console.log(`Marked as complete. ${task.title}`);
    }
    catch(error){
        console.error("Error: ", error.message);
    }
}


function deleteTask(id, callback){
    const index = tasks.findIndex(t => t.id === id)
        if (index === -1){
            throw new Error("Task not found for Deletion")
        }
        const removed = tasks.splice(index,1)[0];
        callback(removed);
    
}

try{
    addTask("Learn Javascript", (task)=>{
        console.log(`Task Added: ${task.title}`)
    });
    setTimeout(() => {
        viewTask();
        completedTask(tasks[0].id);
        if (tasks.length>1){deleteTask(tasks[1].id, (task) => {
            console.log(`Deleted Task: ${task.title}`);
        });}
        
        viewTask()
    }, 2000)
} catch(error){
    console.log("App Error: ", error.message)
}
