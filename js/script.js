console.log('Перевірка підключеного файлу скриптів script.js')

let itemsDiv = document.getElementById("items");

if (itemsDiv) {
    console.log(itemsDiv)

    console.log('Поле classlist: ', itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    itemsDiv.innerText = 'Програмно доданий текст'
} else {
    console.log('Блок товарів не знайдено')
}