function makeWord(arr) {
    let i = 0
    let word = ""

    while (i < arr.length) {
        
        if (arr[i] === "!") {
            break
        }

        word += arr[i]

        i++
    }

    console.log(word);


}

makeWord(['H', 'e', 'l', 'l', 'o', '!', 'W', 'o', 'r', 'l', 'd'])