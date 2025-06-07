function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 completed");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 completed");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 completed");
    callback();
  }, 1000);
}

//  Callback Hell (nested structure) . not suggested
// Indentation grows with every level
// Harder to debug, refactor, and scale
// If any error happens, managing it becomes complex
task1(() => {
  task2(() => {
    task3(() => {
      console.log("All tasks completed");
    });
  });
});
