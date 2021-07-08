function fontSizeText(){

    let p = document.getElementById("p")

    let fontSize = window.getComputedStyle(p , null).getPropertyValue("font-size");

    fontSize = parseFloat(fontSize)

    p.style.fontSize = (fontSize + 1) + "px"

    console.log(fontSize)

    if(fontSize == 100){
        clearInterval(timer)
    }

}

let timer = setInterval(fontSizeText , 1000)
    








