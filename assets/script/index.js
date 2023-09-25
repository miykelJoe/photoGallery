const display = document.querySelector('#display')
const image = document.querySelectorAll('.hairImg');
const hairNmae = document.querySelectorAll('.hairstyle-name')
const h1 = document.querySelector('.h1')

const transition = (time) => display.style.transition = `${time}s`
h1.innerText = '  PHOTO DISPLaY'.toUpperCase();



function deleteRestOfWord(imageName, targetString){
    const index = imageName.indexOf(targetString);

    if (index !== -1){
        return imageName.slice(0, index);
    }else{
        return imageName;
    }
}


for (let i = 0; i < image.length; i++) {
    let img = image[i].id;
        let url = `url(assets/images/${img})`

    hairNmae[i].innerText = deleteRestOfWord(img, '.')
    
    image[i].onmouseover = function () {
        h1.innerText = ''
        
        display.style.backgroundImage = url
        display.style.transform = 'scale(1.1)'
        display.style.width = '94%' 
        display.setAttribute("data-value", "yes")
        transition(.5)        
    }

    image[i].onmouseout = () => {
        display.style.transform = 'scale(1)'
        transition(2)
    }
}

display.onmouseover = () => {
        if(display.getAttribute("data-value"))
            display.style.transform = 'scale(1.1)'
}
display.onmouseout = () => {
    display.style.transform = 'scale(1)'
}

display.onclick = () => {
    display.style.backgroundImage = 'none'
    display.setAttribute("data-value", "")
    h1.innerText = 'PHOTO DISPLAY'.toUpperCase();
}