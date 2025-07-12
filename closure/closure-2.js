function greetNikita(name) {

    let itName = name

    return function get() {
        console.log(`Hello ${itName}!`);
    }
}

const f = greetNikita("Nikita")
f()