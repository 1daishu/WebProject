document.getElementById("registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвратить стандартное поведение формы (перезагрузку страницы)

    const formData = new FormData(event.target);
    const data = {
        name: formData.get("name"),
        Email: formData.get("username"),
        Password: formData.get("password")
    };

    // Отправка POST-запроса на сервер
    fetch("http://localhost:5235/api/UserAuth/Register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result && result.errors && result.errors.Email) {
            console.log("Ошибки валидации Email:", result.errors.Email);
        } else if (result) {
            console.log("Данные успешно добавлены в базу данных", result);
            // Дополнительные действия после успешной регистрации
        } else {
            console.error("Произошла ошибка при добавлении данных в базу данных");
        }
        
    });
});