

let loginBtn = document.getElementById("loginBtn")
let email = document.getElementById("email").value
let password = document.getElementById("password").value

loginBtn.addEventListener("click", function() {
    if(password.length<6) {
        alert("parola 6 karakterden küçük olamaz")
    }

})