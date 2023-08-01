const display = document.querySelector('#display')
const weaving = document.querySelector('#weaving')
const ghanaWeaving = document.querySelector('#ghana-weaving')
const glona = document.querySelector('#glona')
const knotless = document.querySelector('#knotless')
const stitch = document.querySelector('#stitch-braid')

let GhanaWeaving = 'url(assets/images/GHANA.jpg)'
let Weaving = 'url(assets/images/BIG-SMALL.jpg)'
let stylist = 'url(assets/images/NATURAL.jpg)'
let knotlessBraid = 'url(assets/images/NUTLESS.jpg)'
let stitchBraid = 'url(assets/images/CENTIPEDE.jpg)'


weaving.onmouseover = function(){
    display.style.backgroundImage = Weaving
}

ghanaWeaving.onmouseover = function(){
    display.style.backgroundImage = GhanaWeaving
}

glona.onmouseover = function(){
    display.style.backgroundImage = stylist
}

knotless.onmouseover = function(){
    display.style.backgroundImage = knotlessBraid
}

stitch.onmouseover = function(){
    display.style.backgroundImage = stitchBraid
}