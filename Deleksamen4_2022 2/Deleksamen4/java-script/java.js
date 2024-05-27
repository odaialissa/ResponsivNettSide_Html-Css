const toggleButton = document.getElementsByClassName('menu_button')[0]
const navLinks = document.getElementsByClassName('myLinks')[0]

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')

}

)
