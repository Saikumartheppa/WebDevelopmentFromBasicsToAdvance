let a = function(e){
    alert("Hello World 1");
    console.log(e);
    console.log(e.target);
    console.log(e.type , e.clientX , e.clientY);

}
let b = function(e){
    alert("Hello World 2");
}
let input = Number.parseInt(prompt("Enter a number"));

let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click' , a);
btn.addEventListener('click' , b);
if(input == 2){
    btn.removeEventListener('click' , b);
}
