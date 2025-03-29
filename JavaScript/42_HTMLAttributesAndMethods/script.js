let a = document.getElementById('first');
console.log(a.getAttribute('class'));
console.log(first.hasAttribute('hidden'));
console.log(first.hasAttribute('style'));

// Set Attribute

first.setAttribute("hidden"  ,"false"); 
// The hidden attribute works as a Boolean attribute in HTML.
//  If it's present, the element remains hidden, regardless of the assigned value (true, "false", etc.).

// ----------correct approach------------
first.removeAttribute("hidden");

// first.setAttribute("class" , "second third");

// first.removeAttribute("class");


console.log(first.attributes);



// Data -* attributes
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);

