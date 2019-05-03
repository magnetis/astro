import Inputmask from 'inputmask';

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

      const updateControlInputValue = operation => {
        const currentControlInputValue = currentControlInput.value
          ? parseFloat(currentControlInput.value)
          : 0;
        let step = dataStep;

        if (operation === 'decrement') {
          if (currentControlInputValue < dataStep) {
            currentControlInput.value = 0;
            return;
          }

          step = dataStep * -1;
        }

        currentControlInput.value = currentControlInputValue + step;
        currentControlInput.dispatchEvent(new Event('change'));
      };

      decrementButton.addEventListener('click', () => {
        updateControlInputValue('decrement');
      });

      incrementButton.addEventListener('click', () => {
        updateControlInputValue('increment');
      });
    });
  });
};

// Handle masked inputs

export const initMaskedInputs = () => {
  window.requestAnimationFrame(() => {
    Inputmask().mask(document.querySelectorAll('.masked-inputs input'));
  });
};

const HandleInputEvents = () => {
  initFloatingLabel();
  initMessagingInputEvent();
  initControlInputsEvents();
  initMaskedInputs();
  return null;
};

export default HandleInputEvents;
