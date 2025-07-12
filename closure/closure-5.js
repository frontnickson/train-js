// 🔹 Задача 4: "Фильтр чисел"
// Создай функцию createFilter, которая принимает число min.

// Она возвращает функцию, которая принимает число x и возвращает true, 
// если x больше или равен min, и false — если меньше.

function createFilter(min) {

    let value = min

    return function min(innerValue) {
        return innerValue >= value
    }
}

const f = createFilter(3)

console.log(f(5));