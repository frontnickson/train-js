// Создай функцию createMultiplier(factor), которая принимает число factor и возвращает функцию.
// Эта внутренняя функция будет принимать число x и возвращать результат умножения x на factor.

function createMultiplier(factor) {
    return function multi(num) {
        return factor * num
    }
}

const inner = createMultiplier(5)
console.log(inner(5));