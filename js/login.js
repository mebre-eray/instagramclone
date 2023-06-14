

let loginBtn = document.getElementById("loginBtn")



loginBtn.addEventListener("click", function() {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const mailControl = mailformat.test(email)
    
    if(!mailControl) {
        alert("mail formatında değil")
    }

})