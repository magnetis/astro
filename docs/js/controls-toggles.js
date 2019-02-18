export default 
  window.requestAnimationFrame(() => {
    let slider = document.querySelector("#slider1");
    let counter = document.querySelector(".a-slider--value");

    slider.addEventListener("input", function (){
      let sliderValue = slider.value;

      slider.style.setProperty("--slider-percentage", sliderValue + "%");
      counter.innerText = slider.value + " coins";
    });
  })
