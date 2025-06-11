let url = "https://jsonplaceholder.typicode.com/comments";
let response = fetch(url);
response
  .then((val) => {
    return val.json();
  })
  .then((comments) => {
    // console.log(comments);
    let iHTML = "";
    for (comment in comments) {
      iHTML += `<div class = "card" > <h1> Comment : ${comments[comment].postId} </h1>
                <p> name : ${comments[comment].name} </p>
    </div>
       `;
    }
    let cards = document.getElementById("cards");
    cards.innerHTML = iHTML;
  });
