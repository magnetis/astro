export const filterDropdown = ({ selector, openedClass, searchURL }) => {
  window.requestAnimationFrame(() => {
    const component = document.querySelector(selector);
    const input = document.querySelector(`${selector} input`);
    const options = document.querySelectorAll(`${selector} nav a`);
    const icon = document.querySelector(`${selector} i`);

    icon.addEventListener('click', () => {
      if (searchURL) {
        window.location.href = `${searchURL}${input.value}`;
      } else {
        component.classList.toggle(openedClass);
      }
    });

    input.addEventListener('focus', () => {
      component.classList.add(openedClass);
    });

    input.addEventListener('blur', () => {
      setTimeout(() => {
        component.classList.remove(openedClass);
      }, 200);
    });

    input.addEventListener('keyup', () => {
      options.forEach(option => {
        const text = option.innerText;

        if (text.includes(input.value)) {
          option.innerHTML = text.replace(
            new RegExp(input.value, 'g'),
            `<em>${input.value}</em>`
          );
          option.style.display = 'block';
        } else {
          option.innerHTML = text;
          option.style.display = 'none';
        }
      });
    });

    options.forEach(option => {
      option.addEventListener('click', () => {
        input.value = option.innerText;
        component.classList.remove(openedClass);
      });
    });
  });
};

const HandleDropdown = props => {
  filterDropdown(props);
  return null;
};

export default HandleDropdown;
