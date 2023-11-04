document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("login-button");
    const registrationButton = document.getElementById("registration-button");
  
    loginButton.addEventListener("click", function () {
      // Перенаправление пользователя на страницу "Вход" (например, "login.html")
      window.location.href = "sign.html";
    });
  
    registrationButton.addEventListener("click", function () {
      // Перенаправление пользователя на страницу "Регистрация" (например, "registration.html")
      window.location.href = "reg.html";
    });
  });