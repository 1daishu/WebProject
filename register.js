const email = 'dens'; // Замените на введенный email
const password = 'dens'; // Замените на введенный пароль

const url = `http://localhost:3000/api/checkUser?email=${email}&password=${password}`;

fetch(url, {
  method: 'GET',
  headers: {
    'accept': 'application/json'
  }
})
.then(response => {
  if (response.status === 200) {
    console.log('Пользователь существует.');
    // Дополнительные действия, если пользователь существует
  } else if (response.status === 401) {
    console.log('Пользователь не существует.');
    // Дополнительные действия, если пользователь не существует
  } else {
    console.error('Произошла ошибка при выполнении запроса.');
  }
})
.catch(error => {
  console.error('Произошла ошибка при выполнении запроса.', error);
});