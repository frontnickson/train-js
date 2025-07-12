function funcWhile(){

    let num = 5;

    while(num > 2){
        console.log("Цикл будет закончится через секунду");
    }

    setTimeout(() => {
        num = 0
    }, 1000)
}

funcWhile()