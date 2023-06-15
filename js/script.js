// post beğenme olayı

const heartIcon = document.querySelector('.iconLeft .fa-heart');
const likeCount = document.querySelector('.likeCount');
let count = Number(localStorage.getItem('count')) || 0

heartIcon.addEventListener('click', function() {

    heartIcon.classList.toggle('liked');

    if(heartIcon.classList.contains('liked')) {
        localStorage.setItem('liked', true)
        count++
        localStorage.setItem('count', count);
        likeCount.textContent = `${count} beğenme`
    } else {
        localStorage.removeItem('liked')
        count--
        localStorage.setItem('count', count);
        likeCount.textContent = `${count} beğenme`
    }
})

window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('liked')) {
        heartIcon.classList.add('liked')
    }
    likeCount.textContent = `${count} beğenme`
    
})


    /* Daha fazla tıklandığında oluşan olaylar */

    const addMoreBtn = document.querySelector('.addMoreBtn');
    const visibleBtn = document.querySelector('.visibleChange');
    const dropdownMenu = document.getElementById('dropdownBottomMenu');
    const dropdownMenu2 = document.getElementById('dropdownBottomMenu2');

    addMoreBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show')
        dropdownMenu2.classList.remove('show')
    })

    visibleBtn.addEventListener('click', function() {
        dropdownMenu2.classList.toggle('show')
        dropdownMenu.classList.remove('show')
    })

    window.addEventListener('click', function(event) {
        if(!addMoreBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('show')
        }
    })

    window.addEventListener('click', function(event) {
        if(!visibleBtn.contains(event.target) && !dropdownMenu2.contains(event.target)) {
            dropdownMenu2.classList.remove('show')
        }
    })

    // light & dark mode

   const colorMode = document.querySelector('.colorMode');
   const links = document.getElementsByTagName('a')
   const logo = document.querySelector('.logo');
   const darklogo = document.querySelector('.darklogo');

   colorMode.addEventListener('click', function () {
    document.body.classList.toggle('light')
    colorMode.innerHTML = document.body.classList.contains('light') ? '<i class="fa-regular fa-moon"></i> Açık mod' : '<i class="fa-regular fa-moon"></i> Karanlık mod'
    for(i = 0; i < links.length; i++) {
        if(document.body.classList.contains('light')) { 
            darklogo.style.display = 'block';
            logo.style.display = 'none';
            links[i].style.color = 'black'
        } else {
            darklogo.style.display = 'none'
            logo.style.display = 'block'
            links[i].style.color = 'white'
        }  
    }

   })

   // yetki kontrol

   const authenticated = localStorage.getItem('authenticated')
   const userData = JSON.parse(localStorage.getItem('userData'))
   const profileTitleOne = document.querySelector('.profileTitleOne')
   const profileTitleTwo = document.querySelector('.profileTitleTwo')

   if(!authenticated) {
        window.location.href = "login.html"
   }

   if(authenticated) {
        profileTitleOne.textContent = userData.username
        profileTitleTwo.textContent = userData.title
   }

   const logout = document.querySelector('.logout')

   logout.addEventListener('click', function() {
        localStorage.removeItem('authenticated')
        localStorage.removeItem('userData')
        window.location.href = 'login.html'
   })