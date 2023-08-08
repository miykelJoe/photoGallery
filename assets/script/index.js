const display = document.querySelector('#display')
const image = document.querySelectorAll('.hairImg');

const transition = (time) => display.style.transition = `${time}s`




for (let i = 0; i < image.length; i++) {
    let img = image[i].id;
    let url = `url(assets/images/${img}.jpg)`

    image[i].onmouseover = function () {
        display.style.backgroundImage = url
        display.style.transform = 'scale(1.1)'
        display.style.width = '94%' 
        transition(.5)        
    }

    image[i].onmouseout = () => {
        display.style.transform = 'scale(1)'
        transition(2)
    }
}
display.onmouseover = () => {
        // transition
        display.style.transform = 'scale(1.1)'
}
display.onmouseout = () => {
    // transition
    display.style.transform = 'scale(1)'
}

display.onclick = () => {
    display.style.backgroundImage = 'none'
}

// if (display.style.backgroundImage == ''){
    // display.onmouseover = () => {
        // console.log(2)
    // display.style.backgroundColor = 'red'
    // }
// }