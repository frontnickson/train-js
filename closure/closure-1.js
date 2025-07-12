function createCounter(n){
    
    let count = n

    return function inner(){
        count++
        return count
    }
}

const f = createCounter(3)
console.log(f());

