export const initFloatingLabel = () => {
  window.requestAnimationFrame(() => {
    const inputs = document.querySelectorAll('.a-input');

    const verifyValue = (input, label) => {
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

export const initMessagingInputEvent = () => {
  window.requestAnimationFrame(() => {
    const messagingInputs = document.querySelectorAll('.a-input--messaging');

    messagingInputs.forEach(input => {
      const currentMessagingInput = input.firstChild;
      const currentButton = input.querySelector('button');

      if (currentMessagingInput.value) currentButton.disabled = false;

      currentMessagingInput.addEventListener('input', event => {
        if (event.target.value) {
          currentButton.disabled = false;
        } else {
          currentButton.disabled = true;
        }
      });
    });
  });
};

const HandleInputEvents = () => {
  initFloatingLabel();
  initMessagingInputEvent();
  return null;
};

export default HandleInputEvents;
