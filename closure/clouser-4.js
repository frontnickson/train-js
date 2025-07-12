function createCounter(n) {

    let num = n

    return {
        increment: function increment() {
            return num++
        },
        decrement: function decrement() {
            return num--
        },
        get: function get() {
            return num
        }
    }
}

const counter = createCounter(3)