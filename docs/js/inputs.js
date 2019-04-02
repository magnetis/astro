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

export const initMessagingInputEvent = () => {
  window.requestAnimationFrame(() => {
    const messagingInputs = document.querySelectorAll('.a-input--messaging');

    const handleFocusEvent = (input, button) => {
      input.addEventListener('focus', event => {
        if (!event.target.value) {
          button.disabled = false;
        }
      });

      input.addEventListener('focusout', event => {
        if (!event.target.value) {
          button.disabled = true;
        } else {
          button.disabled = false;
        }
      });
    };

    messagingInputs.forEach(input => {
      const currentMessagingInput = input.firstChild;
      const currentButton = input.querySelector('button');

      if (currentMessagingInput.value) currentButton.disabled = false;

      handleFocusEvent(currentMessagingInput, currentButton);

      currentMessagingInput.addEventListener('input', event => {
        if (event.target.value) {
          handleFocusEvent(currentMessagingInput, currentButton);
        } else {
          handleFocusEvent(currentMessagingInput, currentButton);
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
