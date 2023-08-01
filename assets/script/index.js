const display = document.querySelector('#display')
// const hairstyles = document.querySelector('#photo-holder')
const bigSmall = document.querySelector('#big-small-weaving')
const ghana = document.querySelector('#ghana-weaving')
const glona = document.querySelector('#stylist')
const knotless = document.querySelector('#nutless')
const cent = document.querySelector('#centipede')

let ghanaWeaving = 'url(assets/images/GHANA.jpg)'
let bigSmallWeaving = 'url(assets/images/BIG-SMALL.jpg)'
let stylist = 'url(assets/images/NATURAL.jpg)'
let nutless = 'url(assets/images/NUTLESS.jpg)'
let centipede = 'url(assets/images/CENTIPEDE.jpg)'


bigSmall.onmouseover = function(){
    display.style.backgroundImage = bigSmallWeaving
}

ghana.onmouseover = function(){
    display.style.backgroundImage = ghanaWeaving
}

glona.onmouseover = function(){
    display.style.backgroundImage = stylist
}

knotless.onmouseover = function(){
    display.style.backgroundImage = nutless
}

cent.onmouseover = function(){
    display.style.backgroundImage = centipede
}