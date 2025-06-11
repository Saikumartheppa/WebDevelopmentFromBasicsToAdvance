// Data Only Survives on page Refresh

// sessionStorage.name = "Harry";
// sessionStorage.setItem("DSA" , "Striver");
// // sessionStorage.clear();
// console.log(sessionStorage.length);
// sessionStorage.getItem("DSA");
// sessionStorage.name = "Harry2";
// sessionStorage.removeItem("name");

window.onstorage = (e) => {
    alert("Local Storage Updated");
    console.log(e);
}