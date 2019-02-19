export default 
  window.requestAnimationFrame(() => {
    const slider = document.querySelector("#slider1");
    const counter = document.querySelector(".a-slider--value");

    slider.addEventListener("input", function () {
      const sliderValue = slider.value;

      slider.style.setProperty("--slider-percentage", `${sliderValue}%`);
      counter.innerText = `${sliderValue} coins`;
    });
  })
