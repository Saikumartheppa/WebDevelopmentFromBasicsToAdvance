hello = () => {
console.log("Hello, World!");
}
async function task1() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Task 1 completed!");
        }, 5000);
    })
}
async function task2() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Task 2 completed!");
        }, 5000);
    })
}
const execute  = async () => {
    let p1 = await task1();
    let p2 = await task2();
    console.log(p1);
    console.log(p2);
}
execute();
hello();