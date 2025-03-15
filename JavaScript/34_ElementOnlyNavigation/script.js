let a = document.body;
console.log("firstChild ",  a.firstChild)
console.log("firstElementChild" ,  a.firstElementChild)


console.log("Parent Node" , a.parentNode);
console.log("Parent Element" , a.parentElement);

const changeBgRed = ()=>{
   document.body.firstElementChild.style.background = "red";
}

// console.log("next Sibling ", a.nextSibling);
// console.log("next Element Sibling ", a.nextElementSibling);

