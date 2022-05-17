const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbarlinks')[0]
const toggle = document.querySelector('.toggle-button');


// ========================= to show the menu when hamburger was click  ========================= 
toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})

toggle.addEventListener('click', function (){
    this.classList.toggle('is-active')
})

window.addEventListener("scroll",() =>{
    navbarLinks.classList.toggle('active', false)
    toggle.classList.toggle('is-active',false)
});
