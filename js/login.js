

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

const images = ["/images/img1.png","/images/img2.png","/images/img3.png"];

const imageScreen = document.getElementsByClassName("screen");

let counter = 0;

function handleChange() {

    imageScreen[0].src = images[counter];
    counter = (counter+1) % images.length;

}

setInterval(handleChange, 3000)
 
