function findMaxNumber(arr){

    let i = 0
    let max = arr[0]

    while(i < arr.length){

        if(max > arr[i]){
            max = max
        } else {
            max = arr[i]
        }

        i++
    }

    console.log(max);
    
}


findMaxNumber([1, 5, 55, 3, 7, 122, 3, 4, 5, 50])