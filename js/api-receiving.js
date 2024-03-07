import { showAlert } from './util.js';

const getData = () =>
  fetch('https://28.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response;
      }
      showAlert(
        'Ошибка получения данных нет связи с сервером попробуйте в другой раз'
      );
    })
    .then((response) => response.json())
    .catch(() => {
      showAlert(
        'Ошибка получения данных нет связи с сервером попробуйте в другой раз'
      );
    });

const sendData = (onSuccess, onFail, formData) => {
  fetch('https://28.javascript.htmlacademy.pro/kekstagram', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить формую Попробуйте еще раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить формую Попробуйте еще раз');
    });
};

export { getData, sendData };
