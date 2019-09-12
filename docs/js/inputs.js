import maskInput from 'vanilla-text-mask/dist/vanillaTextMask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

// Currency mask

const currencyMask = createNumberMask({
  prefix: '',
  suffix: '',
  thousandsSeparatorSymbol: '.',
  allowDecimal: true,
  decimalSymbol: ','
});

const pinLabelColors = (inputWrapper, value) => {
  const input = inputWrapper.querySelector('input');
  const label = inputWrapper.querySelector('label');
  value = value || (input && input.value);

  if (
    inputWrapper.classList.contains('a-input--invalid') &&
    value &&
    !label.classList.contains('a-input--invalid')
  ) {
    label.classList.add('a-label--invalid');
  }

  if (label && label.classList.contains('a-label--invalid') && !value) {
    label.classList.remove('a-label--invalid');
  }
};

// Handle floating label

export const initFloatingLabel = () => {
  window.requestAnimationFrame(() => {
    const inputs = document.querySelectorAll('.a-input');

    const verifyValue = (input, label) => {
      if (!label) return;

      if (input.value || input.placeholder) {
        label.classList.add('a-input__label--floating');
      } else {
        label.classList.remove('a-input__label--floating');
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

      currentInput.addEventListener('input', event => {
        pinLabelColors(input, event.target.value);
      });

      pinLabelColors(input);
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
        '.a-input__btn-control:nth-of-type(1)'
      );
      const incrementButton = input.querySelector(
        '.a-input__btn-control:nth-of-type(2)'
      );

      const updateControlInputValue = operation => {
        const currentControlInputValue = currentControlInput.value
          ? parseFloat(
              currentControlInput.value.replace(/\./g, '').replace(/\,/g, '.')
            )
          : 0;
        let step = dataStep;

        if (operation === 'decrement') {
          if (currentControlInputValue < dataStep) {
            currentControlInput.value = '0,00';
            return;
          }

          step = dataStep * -1;
        }

        currentControlInput.value = parseFloat(currentControlInputValue + step)
          .toFixed(2)
          .replace(/\./g, ',');

        maskInput({
          inputElement: currentControlInput,
          mask: currencyMask,
          guide: false
        });

        currentControlInput.dispatchEvent(new Event('change'));
      };

      decrementButton.addEventListener('click', () => {
        updateControlInputValue('decrement');
        pinLabelColors(input);
      });

      incrementButton.addEventListener('click', () => {
        updateControlInputValue('increment');
        pinLabelColors(input);
      });
    });
  });
};

// Handle masked inputs

export const initMaskedInputs = () => {
  window.requestAnimationFrame(() => {
    // Date masked inputs
    const dateMaskInputs = document.querySelectorAll(
      '[placeholder="DD/MM/YYYY"]'
    );
    dateMaskInputs.forEach(input => {
      maskInput({
        inputElement: input,
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        guide: false
      });
    });

    // CPF masked input
    const cpfMaskInputs = document.querySelectorAll(
      '[placeholder="000.000.000-00"]'
    );
    cpfMaskInputs.forEach(input => {
      maskInput({
        inputElement: input,
        mask: [
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/
        ],
        guide: false
      });
    });

    // Currency masked inputs
    const currencyMaskInputs = document.querySelectorAll(
      '[placeholder="0,00"]'
    );
    currencyMaskInputs.forEach(input => {
      maskInput({
        inputElement: input,
        mask: currencyMask,
        guide: false
      });
    });
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
