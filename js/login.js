

let loginBtn = document.getElementById("loginBtn")

const users = [
    {
        "username":"mebreakademi",
        "email":"mebreakademi@mebre.com",
        "password":"12345678",
        "title":"Mebre Akademi"
    },
    {
        "username":"mebreakademi2",
        "email":"mebreakademi2@mebre.com",
        "password":"12345678",
        "title":"Mebre Akademi 2"
    },
    {
        "username":"mebreakademi3",
        "email":"mebreakademi3@mebre.com",
        "password":"12345678",
        "title":"Mebre Akademi 3"
    }

]

loginBtn.addEventListener("click", function(e) {
    e.preventDefault()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const mailControl = mailformat.test(email)
    
    if(!mailControl) {
        alert("mail formatında değil")
    }

    const foundUser = users.find((user) => {
        return user.email === email && user.password === password
    })

    if(foundUser) {
        localStorage.setItem('userData', JSON.stringify(foundUser))
        localStorage.setItem('authenticated', true)
        window.location.href = 'index.html'
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
 
// yetki kontrol

const authenticated = localStorage.getItem('authenticated')

if(authenticated) {
     window.location.href = "index.html"
}