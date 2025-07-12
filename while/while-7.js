function findZero(arr){

    let i = 0
    let count = 0

    while(i < arr.length){
        if(arr[i] === 0){
            count++
        }
        i++
    }

    console.log(count);

}

findZero([0, 1, 2, 0, 5, 0, 6])