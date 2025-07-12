function findSymbol(arr){

    let i = 0
    let symbol = 0

    while(i < arr.length){

        if(symbol === 1){
            break
        }

        if(arr[i] === "@"){
            console.log("Символ найден");
            symbol++
        }

        i++
    }
    
}

findSymbol(['H', 'e', 'l', 'l', 'o', '@', '!', 'W', '@'])