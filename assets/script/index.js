const display = document.querySelector('#display')
const image = document.querySelectorAll('.hairImg');

let transition = display.style.transition = '.6s'

for (let i = 0; i < image.length; i++) {
    let img = image[i].id;
    let url = `url(assets/images/${img}.jpg)`

    image[i].onmouseover = function () {
        if (i < image.length) {
            display.style.backgroundImage = url
            transition
        }
    }
}

display.onmouseover = () => {
        display.style.transform = 'scale(1.1)'
        transition
}
display.onmouseout = () => {
    transition
    display.style.transform = 'scale(1)'
}
display.onclick = () => {
    display.style.backgroundImage = 'none'
    display.style.transform = 'scale(1)'
}



// weaving.onmouseover = function(){
//     display.style.backgroundImage = Weaving
// }

// ghanaWeaving.onmouseover = function(){
//     display.style.backgroundImage = GhanaWeaving
// }

// glona.onmouseover = function(){
//     display.style.backgroundImage = stylist
// }

// knotless.onmouseover = function(){
//     display.style.backgroundImage = knotlessBraid
// }

// stitch.onmouseover = function(){
//     display.style.backgroundImage = stitchBraid
// }