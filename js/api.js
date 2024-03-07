import { showAlert } from './util.js';
const BASE_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const errorServer =
  'Ошибка получения данных нет связи с сервером попробуйте в другой раз';

const getData = () =>
  fetch(`${BASE_URL}${Route.GET_DATA}`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      showAlert(errorServer);
    })
    .then((response) => response.json())
    .catch(() => {
      showAlert(errorServer);
    });

const sendData = (onSuccess, onFail, formData) => {
  fetch(`${BASE_URL}${Route.SEND_DATA}`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };

// const Method = {
//   GET: 'GET',
//   POST: 'POST',
// };

// const load = (route, errorText, method = Method.GET, body = null) =>
//   fetch(`${BASE_URL}${route}`, { method, body })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }
//       return response.json();
//     })
//     .catch(() => {
//       throw new Error(errorText);
//     });

// const getData = () => load(Route.GET_DATA, showAlert(errorServer));

// const sendData = (body) => load(Route.SEND_DATA, Method.POST, body);

// export { getData, sendData };
