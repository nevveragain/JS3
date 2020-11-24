
function myRandom(min, max) {
    let random = Math.random() * (max + 1 - min) + min
    let floor = Math.floor(random)
    Math.sign
    return floor
}

let ex = +prompt('Введите количество решаемых примеров')
let minNum = +prompt('Введите минимальное число')
let maxNum = +prompt('Введите максимальное число')

for (let i = 0; i < ex; i++) {
    let num1 = myRandom(minNum, maxNum)
    let num2 = myRandom(minNum, maxNum)
    let pr = +prompt(num1 + ' + ' + num2 + ' =')
    let rightAnswer = num1 + num2
    let answer = num1 + num2 === pr ? ' Ваш ответ верный - ' + pr : ' Ваш ответ неверный - ' + pr + '. Правильный ответ - ' + rightAnswer
    alert(answer)
}

// Как делать генерацию рандомных математических знаков я не знаю..