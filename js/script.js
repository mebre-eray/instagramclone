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