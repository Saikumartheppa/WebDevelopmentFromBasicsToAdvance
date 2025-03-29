let first = document.getElementById('first');
first.className = 'red text-dark yellow'; // setting the class name for an element
first.classList.remove('yellow');
first.classList.add('yellow');
first.classList.contains('red');  
first.classList.replace('yellow', 'cyan');
// let len = first.classList.length;
// console.log(len);
first.classList.toggle('green'); // If the class does'nt exist, toggle adds the class or else will remove the class
first.classList.toggle('cyan');