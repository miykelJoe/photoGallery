const display = document.querySelector('#display')
const weaving = document.querySelector('#weaving')
const ghanaWeaving = document.querySelector('#ghana-weaving')
const glona = document.querySelector('#glona')
const knotless = document.querySelector('#knotless')
const stitch = document.querySelector('#stitch-braid')

let GhanaWeaving = 'url(assets/images/ghana-weaving.jpg)'
let Weaving = 'url(assets/images/weaving.jpg)'
let stylist = 'url(assets/images/glona.jpg)'
let knotlessBraid = 'url(assets/images/knotless-braid.jpg)'
let stitchBraid = 'url(assets/images/stitch-braid.jpg)'


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