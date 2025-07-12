function getNum() {
    let num = 1
    let result = 0

    while (num <= 10) {

        if (num % 2 === 0) {
            result += num
        }

        num++
    }

    console.log(result);
}

getNum()