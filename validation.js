let email = document.getElementById("email");
let form = document.querySelector("form");
let textForm = document.getElementById("textForm");
let textEmail = document.getElementById("textEmail");
let textPassword = document.getElementById("textPassword");
let error = document.getElementById("error")

form.addEventListener("submit" , (e) => {
    if(email.value == "" && password.value == "") {
    textForm.textContent = "You need to fill in all fields!";
    } else if (
        validatorEmail(email.value) === true &&
        validatorPassword(password.value) === true
    ) {
    console.log(email.value);
    console.log(password.value);
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
    } else {
        console.log("Not Request");
    }
    
    e.preventDefault()

});

email.addEventListener("keyup", () => {
    if(validatorEmail(email.value) !== true) {
        textEmail.textContent = "Invalid email address";
        
    } else {
    textEmail.textContent = "";

}
})
password.addEventListener("keyup" , () => {
    if(validatorPassword(password.value) !== true) {
     textPassword.textContent = "Password with invalid format";   
    } else {
    textPassword.textContent = "";
}
})

function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email)

}

function validatorPassword(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^$*])[a-zA-Z0-9!@#$%^$*]{6,16}$/;
    return passwordPattern.test(password)
}

const campos = document.querySelectorAll('.required');

function setError(index){
    campos[index].style.border = '2px solid #e63636';
}

function removeError(index){
    campos[index].style.border = '';
}

function nameValidate(){
    if(campos[0].value.length < "8")
{
    setError(0);
}
    else
{
    removeError(0)

}
}
