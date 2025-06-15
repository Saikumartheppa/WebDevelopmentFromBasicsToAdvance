let passwordLength = document.querySelector(".enterYourPassword");
let checkoutPassword = document.querySelector(".checkoutPassword");
let generateBtn = document.querySelector(".generateBtn");

class Password{
    constructor(){
        this.password = "";
    }
    generatePassword(length){
        if(length >= 8){
            let chars = "zxcvbnmasdfghjklqwertyuiop"
            let numbers = "1234567890"
            let specialCharacters = "!@#$%^&*()"
            let idx = 0;
            while(idx <= length){
                this.password += chars[Math.floor(Math.random() * chars.length)];
                this.password += numbers[Math.floor(Math.random() * numbers.length)];
                this.password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
                idx += 3;
            }
            this.password = this.password.substring(0, length);
            return this.password;
        }else{
            console.log("Minimum size of Password is 8")
        }
    }
}
if(generateBtn && checkoutPassword && passwordLength){
    generateBtn.addEventListener('click' , async ()=>{
    generateBtn.textContent = "Regenerate Password";
    checkoutPassword.value = "Please wait...";
    let p = await new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(true);
        }, 2000)
    })
    passwordLength.focus();
    const passwordInput = parseInt(passwordLength.value.trim());
    if(isNaN(passwordInput )){ 
        checkoutPassword.value = "Please Enter a Valid Number";
    }else if(passwordInput < 8){
        checkoutPassword.value =  "Minimum size of Password is 8";
    }else{
        let pass = new Password();
        let password = pass.generatePassword(passwordInput); 
        checkoutPassword.value = password;
    }
});
}else{
    console.log("Check your Elements");
}

