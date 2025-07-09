const ham = document.querySelector(".ham")
const navMenu = document.querySelector(".nav-menu")
const link = document.querySelector(".e-link")

ham.addEventListener('click', () => {
    ham.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener('click', () => {
    ham.classList.remove('active')
    navMenu.classList.remove('active')
}))


link.addEventListener('click', () => {
    alert(`you have successfully suscribed to our newsletter`)
})