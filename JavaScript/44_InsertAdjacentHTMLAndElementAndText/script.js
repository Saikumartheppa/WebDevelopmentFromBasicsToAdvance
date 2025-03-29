let container = document.getElementsByTagName('div')[0];

// container.insertAdjacentHTML('beforebegin','<h1> beforebegin </h1>');
// container.insertAdjacentHTML('afterbegin','<h1> afterbegin </h1>');
// container.insertAdjacentHTML('beforeend','<h1> beforeend </h1>');
// container.insertAdjacentHTML('afterend','<h1> afterend </h1>');

// container.insertAdjacentText("beforebegin", "before Begin Text");
let div = document.createElement("div");
div.innerHTML = "After Begin element"
container.insertAdjacentElement("afterbegin", div);