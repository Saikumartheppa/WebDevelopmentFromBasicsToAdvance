document.body.firstElementChild.firstElementChild.style.color = 'red';

document.body.firstElementChild.firstElementChild.style.color = 'yellow';
document.body.firstElementChild.lastElementChild.style.color = 'yellow';



// let arr = document.body.getElementsByTagName("li");
// let listTags = Array.from(arr);
// for(let i in listTags){
//     listTags[i].style.background = 'grey';
//     }
    // for(let list of listTags){
    //         list.style.color = 'yellow';
    //     }
        // for(let i = 0; i < listTags.length; i++){
        //     listTags[i].style.color = 'red';
        // }
Array.from(document.getElementsByTagName("li")).forEach((element) =>{
    element.style.background = 'red';
})
console.log(arr);