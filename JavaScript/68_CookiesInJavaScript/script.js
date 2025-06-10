// alert(document.cookie);
document.cookie = "username=Harry";
document.cookie = "UserId=12345";
document.cookie = "Occupation=Hacker";

// document.cookie = "username=Harry; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
// document.cookie = "username=CodeWIthHarry";

let username = prompt("Enter your name");
let id = prompt("Enter your id");
document.cookie = `${encodeURIComponent(username)}=${encodeURIComponent(id)}`;

// decodeURIComponent(encodedValue); 
console.log(document.cookie);