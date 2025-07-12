function getNum(arr) {

    let i = 0

    while(i < arr.length){

        if(arr[i] > 50){
            break
        }

        i++
    }

    console.log(arr[i]);
    
}

getNum([10, 25, 40, 55, 60, 30])