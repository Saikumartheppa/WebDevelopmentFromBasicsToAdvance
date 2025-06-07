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

// Solution for Pyramid of Doom

function loadScript(src){
    let p1 = new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.src = src;
      document.head.appendChild(script);
      script.onload = () =>{
        resolve("Provided script successfully Loaded");
      }
      script.onerror = () =>{
        reject("Sorry , we are unable to load the script, Please try with different one");
      }
    })
    return p1;
}
let p1  = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value) =>{
  console.log(value);
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
}).then((val) =>{
  console.log("second script is ready");
}).then((val) =>{
  return loadScript("https://cdn.jsdelsssfivr.net/npm/bootstrap@5.3.3/dist/.min.js") // invalid src
}).catch((error) =>{
   console.log(error);
}
);