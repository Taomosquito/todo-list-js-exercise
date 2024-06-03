function newTask(title, description) {
  // object to keep track of each tasks status.
  const task = {
    title,
    description,
    complete: false,
    markCompleted: function() {
      this.complete = true;
    },
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

//DRIVER CODE BELOW:

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨")
const tasks = [task1, task2];

// Confirmation we can see our tasks below:
task1.logState() // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

