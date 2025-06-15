// Immediately invoked funtion expression

let p = () =>{
    return new Promise((resolve, reject) => {
        setInterval(() =>{
           resolve(3221);
        } , 3000)
    });
}
(async ()=>{  
    let a = await p();
    console.log(a);
    let b = await p();
    console.log(b);
    let c = await p();
    console.log(c);
})();