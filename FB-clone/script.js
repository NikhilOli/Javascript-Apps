console.log("helllo")
let email = document.getElementById("email");
let password = document.getElementById("password");
let logInBtn = document.getElementById("logInBtn");
let emailArray = [];
let passwordArray = [];

logInBtn.addEventListener("click", function () {
    // emailArray.push(email);
    // email.value = "";
    let emailValue = email.value
    emailArray.push(emailValue);
    email.value = "";
    console.log(emailArray);
    let passwordValue = password.value;
    passwordArray.push(passwordValue)
    password.value = '';
    console.log(passwordArray);
    
})
console.log(emailArray);
