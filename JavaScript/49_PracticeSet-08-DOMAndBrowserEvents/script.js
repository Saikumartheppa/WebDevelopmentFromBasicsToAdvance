// QUestion 01

// let buttons = document.getElementsByTagName('button');
// let buttonOne = function(e){
//     alert("Button one clicked");
// }
// let buttonTwo = function(e){
//     alert("Button two clicked");
// }
// let buttonThree = function(e){
//     alert("Button three clicked");
// }
// let buttonFour = function(e){
//     alert("Button four clicked");
// }
// buttons[0].addEventListener("click" , buttonOne);
// buttons[1].addEventListener("click" , buttonTwo);
// buttons[2].addEventListener("click" , buttonThree);
// buttons[3].addEventListener("click" , buttonFour);


// Question 2 with event Listerners

// let buttons = document.getElementsByTagName('button');
// let bookmarks = document.getElementsByClassName('bookmarks')[0];
// let buttons = bookmarks.getElementsByTagName('button');
// buttons[0].addEventListener('click' , function(){
//     window.location='https://google.com';
// })
// buttons[1].addEventListener('click' , function(){
//     window.location='https://facebook.com';
// })
// buttons[2].addEventListener('click' , function(){
//     window.location='https://takeyouforward.com';
// })


// Fetching a API data with interval

// const fetchContent = async (url)=>{
//    content = await fetch(url);
//    let ans = await content.json();
//    return ans;
// }
// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1";
//     console.log(await fetchContent(url));
// }, 3000);


// glowing bulb effect



setInterval(async function(){
    document.getElementById("bulb").classList.toggle('bulb');
}, 300);



// rbg effect with optimized approach
// setInterval(async function () {
//     document.getElementById("rgb").className = `rgb ${['red' , 'blue' , 'green'][Math.floor(Math.random() * 3)]}`;
// },300)

//rbg by using toggle

let rbg = document.getElementById("rgb");
let colors  = ['red' ,'blue' , 'green'];
let idx = 0;

setInterval(async function(){
    colors.forEach(color => rbg.classList.remove(color));
    rbg.classList.toggle(colors[idx]);
    idx = (idx + 1) % colors.length;
}, 300)