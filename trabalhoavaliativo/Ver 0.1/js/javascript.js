let menu = document.querySelector('.fa-bars')
let fecha = document.querySelector('.fa-times')
let nav = document.querySelector('.bar-navegacao')

menu.addEventListener('click', function(){
    nav.style.display = 'block'
    console.log('abrir')
}) 
fecha.addEventListener('click', function(){
    nav.style.display = 'none'
    console.log('fecha')
}) 