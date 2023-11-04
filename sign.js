document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвратить стандартное поведение формы (перезагрузку страницы)

    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;

    // Создаем URL с параметрами email и password
    const url = `http://localhost:7129/api/UserAuth/Login?email=${email}&password=${password}`;

    // Отправка GET-запроса
    fetch(url, {
        method: "GET",
        headers: {
            "accept": "application/json" // Используем application/json
        }
    })
    .then(response => response.json()) // Преобразовать ответ в JSON
    .then(data => {
        if (data && data.statusCode === 200) {
            console.log(data.description); // Вывести "Вы вошли" или выполнить другие действия
        } else if (data && data.statusCode === 401) {
            console.log("Логин или пароль неверны.");
        } else {
            console.error("Произошла ошибка при выполнении запроса.");
        }
    })
    .catch(error => {
        console.error("Произошла ошибка при выполнении запроса.", error);
    });
});