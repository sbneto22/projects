const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

btn.onclick = () =>{
    if (password.type == "password")
    {
        password.type = "text";
        btn.src = "eyeoff.png";
    }
    else
    {
        password.type = "password";
        btn.src = "eyeon.png";
    }
}