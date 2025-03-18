// Change the Title colour to Red
// getElementsByClassName returns HTML collection of elements , to access the first element we've done this

let cTitles = document.getElementsByClassName("card-title"); 
cTitles[0].style.color = "red";
cTitles[1].style.color = "blue";
cTitles[2].style.color = "green";
console.log(cTitles);

// let cTitle = document.getElementById("firstCardTitle"); 
// cTitle.style.color = "red";
// console.log(cTitle);

// let someWhere = document.getElementsByClassName("btn");
// someWhere[1].style.background = 'red';
// someWhere[1].style.color = 'black';
// console.log(someWhere);


// let someWhereByTags = document.querySelector(".container").getElementsByTagName("a");
let someWhereByTags = document.getElementsByClassName("container")[0].getElementsByTagName("a");
someWhereByTags[0].style.color = 'black';
someWhereByTags[0].style.background = 'red';
someWhereByTags[1].style.color = 'green';
someWhereByTags[1].style.background = 'yellow';
someWhereByTags[2].style.color = 'white';
someWhereByTags[2].style.background = 'black';

let randomText = document.getElementsByName("randomText");

randomText[0].style.color = 'blue';
randomText[1].style.color = 'green';
randomText[2].style.color = 'red';