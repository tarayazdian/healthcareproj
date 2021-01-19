let sliderElements = document.getElementsByClassName('blue-box');
let sliderCounter = 0
setInterval(() => {
    for (let i = 0; i < sliderElements.length; i++) {
        if (sliderElements[i].getAttribute('data-slide') == sliderCounter) {
            sliderElements[i].classList.add('active');
        }
        else {
            sliderElements[i].classList.remove('active');
        }
    }

    sliderCounter += 1;
    sliderCounter %= 3
}, 3000);