//Перевірка підключеного файлу скриптів
console.log('Підключено файл скриптів script.js')

//Визначення масиву товарів
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний обприскувач 12 N'
]

//Отримання елементу з індентифікатором items
let itemsDiv = document.getElementById("items");

//Перевірка існування знайденого блоку
if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML += 
        `
        <div class="item">
            <h2>Товар №${index + 1} з ${itemsArray.length}</h2>
            <p>${item}</p>
        </div>`
    })

} else {
    //Вивід повідомлення про не знайдений блок
    console.log('Блок товарів не знайдено')
}

//Виведення елементів відсортованого масиву 
itemsArray.sort().forEach((item, index) => {
    console.log(index + '-й елемент:', item)
})