console.log('Перевірка підключеного файлу скриптів script.js')

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    console.log(itemsDiv)
} else {
    console.log('Блок товарів не знайдено')
}