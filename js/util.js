const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

const getRandomIntegerArray = (a, b) => {
  const arrayRandom = [];

  function inner() {
    let result = getRandomInteger(a, b);

    while (arrayRandom.includes(result)) {
      result = getRandomInteger(a, b);
    }
    arrayRandom.push(result);
    return result;
  }
  return inner;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomInteger,
  getRandArrayElement,
  getRandomIntegerArray,
  showAlert,
};
