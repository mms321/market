console.log('Перевірка підключеного файлу скриптів script.js')

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    console.log(itemsDiv)

    // Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'

for (let i = 0; i < 100; i++) {
    itemsDiv.innerHTML += '<div class = "item"></div>'
}

 
} else {
    console.log('Блок товарів не знайдено')
}
// Додавання відформатованого HTML коду в блок
// itemsDiv.innerHTML += '<div class = "item"></div>'
// itemsDiv.innerHTML += '<div class = "item"></div>'
// itemsDiv.innerHTML += '<div class = "item"></div>'
// itemsDiv.innerHTML += '<div class = "item"></div>'

for (let i = 0; i < 100; i++) {
    itemsDiv.innerHTML += '<div class = "item"></div>'
}