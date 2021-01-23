let sliderElements = document.getElementsByClassName("blue-box");
let sliderCounter = 0;
setInterval(() => {
  for (let i = 0; i < sliderElements.length; i++) {
    if (sliderElements[i].getAttribute("data-slide") == sliderCounter) {
      sliderElements[i].classList.add("relative", "opacity-100");
      sliderElements[i].classList.remove("absolute", "opacity-0");
    } else {
      sliderElements[i].classList.remove("relative", "opacity-100");
      sliderElements[i].classList.add("absolute", "opacity-0");
    }
  }

  sliderCounter += 1;
  sliderCounter %= 3;
}, 3000);
