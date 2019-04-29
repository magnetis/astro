// Handle floating label

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

      currentInput.addEventListener('change', () => {
        verifyValue(currentInput, currentLabel);
      });
    });
  });
};

// Handle messaging input button

export const initMessagingInputEvent = () => {
  window.requestAnimationFrame(() => {
    const messagingInputs = document.querySelectorAll('.a-input--messaging');
    handleButtonDisable(messagingInputs);
  });
};

const handleButtonDisable = buttonInputs => {
  const handleFocusEvent = (input, buttons) => {
    input.addEventListener('focus', event => {
      if (!event.target.value) {
        buttons.forEach(button => {
          button.disabled = false;
        });
      }
    });

    input.addEventListener('focusout', event => {
      if (!event.target.value) {
        buttons.forEach(button => {
          button.disabled = true;
        });
      } else {
        buttons.forEach(button => {
          button.disabled = false;
        });
      }
    });
  };

  buttonInputs.forEach(input => {
    const currentButtonInput = input.firstChild;
    const currentButtons = input.querySelectorAll('button');

    currentButtons.forEach(button => {
      if (currentButtonInput.value) button.disabled = false;
    });

    handleFocusEvent(currentButtonInput, currentButtons);

    currentButtonInput.addEventListener('input', event => {
      if (event.target.value) {
        handleFocusEvent(currentButtonInput, currentButtons);
      } else {
        handleFocusEvent(currentButtonInput, currentButtons);
      }
    });
  });
};

// Handle control input buttons

export const initControlInputsEvents = () => {
  window.requestAnimationFrame(() => {
    const controlInputs = document.querySelectorAll('.a-input--control');

    controlInputs.forEach(input => {
      const currentControlInput = input.firstChild;
      const dataStep = parseFloat(
        currentControlInput.getAttribute('data-step')
      );
      const decrementButton = input.querySelector(
        '.a-input--control__decrement'
      );
      const incrementButton = input.querySelector(
        '.a-input--control__increment'
      );

      decrementButton.addEventListener('click', () => {
        const currentControlInputValue = currentControlInput.value
          ? parseFloat(currentControlInput.value)
          : 0;

        if (currentControlInputValue < dataStep) {
          currentControlInput.value = 0;
          return;
        }

        currentControlInput.value = currentControlInputValue - dataStep;

        currentControlInput.dispatchEvent(new Event('change'));
      });

      incrementButton.addEventListener('click', () => {
        const currentControlInputValue = currentControlInput.value
          ? parseFloat(currentControlInput.value)
          : 0;

        currentControlInput.value = currentControlInputValue + dataStep;

        currentControlInput.dispatchEvent(new Event('change'));
      });
    });
  });
};

const HandleInputEvents = () => {
  initFloatingLabel();
  initMessagingInputEvent();
  initControlInputsEvents();
  return null;
};

export default HandleInputEvents;
