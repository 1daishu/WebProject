function search_product() {
    const input = document.getElementById('searchbar').value.toLowerCase();
    const products = document.querySelectorAll('.product'); // Выбираем все элементы с классом "product"

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();

        if (productName.includes(input)) {
            product.style.display = 'block'; // Отобразить товар, если он соответствует поиску
        } else {
            product.style.display = 'none'; // Скрыть товар, если он не соответствует поиску
        }
    });
}