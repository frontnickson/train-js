function findValleys(arr) {
    let pos = []
    let valleys = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] > arr[i] && arr[i] < arr[i + 1]) {
            valleys.push(arr[i])
            pos.push(i)
        }
    }
 
    return {
        pos: pos,
        valleys: valleys
    }
}

const f = findValleys([3, 2, 3, 1, 4, 1])
console.log(f);