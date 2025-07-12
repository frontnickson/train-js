function makeCounter(n) {

    let num = n

    return function plus() {
        return num++
    }
}

const f = makeCounter(2)
console.log(f());
console.log(f());
console.log(f());
