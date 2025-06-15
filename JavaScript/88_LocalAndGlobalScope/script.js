let a = 2;
{
    let a = 1;
}
function f(){
    let a = 3;
    console.log(a);
    a = 5;
    console.log(a);
}
console.log(a);
f();