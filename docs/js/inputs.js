export const initFloatingLabel = () => {
  window.requestAnimationFrame(() => {
    const inputs = document.querySelectorAll('.a-input');

    const verifyValue = (input, label) => {
      if (!label) return;

      if (input.value) {
        label.classList.add('a-input--floating-label');
      } else {
        label.classList.remove('a-input--floating-label');
      }
    };

    inputs.forEach(input => {
      const currentInput = input.firstChild;
      const currentLabel = input.querySelector('label');

      verifyValue(currentInput, currentLabel);

      currentInput.addEventListener('focus', () => {
        verifyValue(currentInput, currentLabel);
      });

      currentInput.addEventListener('focusout', () => {
        verifyValue(currentInput, currentLabel);
      });
    });
  });
};

const HandleInputEvents = () => {
  initFloatingLabel();
  return null;
};

export default HandleInputEvents;
