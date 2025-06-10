let key = prompt("Enter key you want to set");
let value = prompt("Enter value you want to set");

localStorage.setItem(key , value);

console.log(`The value of ${key} is ${localStorage.getItem(key)}`);

if(key == 'a' || key == 'b'){
    localStorage.removeItem(key);
}
if(key == '0'){
    localStorage.clear();
}
console.log(localStorage.length);
Object.keys(localStorage).forEach((key) => {
    const value = localStorage.getItem(key);
    console.log(`${key} = ${value}`);
});