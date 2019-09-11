export const changeSliderValue = () => {
  window.requestAnimationFrame(() => {
    const slider = document.querySelector("#slider1");
    const counter = document.querySelector(".a-slider__value");

    slider.addEventListener("input", function() {
      const sliderValue = slider.value;

      slider.style.setProperty("--slider-percentage", `${sliderValue}%`);
      counter.innerText = `${sliderValue} coins`;
    });
  });
};

const HandleSliderValue = () => {
  changeSliderValue();
  return null;
};

export default HandleSliderValue;
