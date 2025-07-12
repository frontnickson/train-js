function findValleys(arr) {
    let pos = []
    let peaks = []
    let i = 1

    while (i < arr.length) {

        if (arr[i] > arr[i - 1]) {

            let possiblePeakPos = i

            while(arr[i] === arr[i + 1]){
                i++
            }

            if(arr[i] > arr[i + 1]){
                pos.push(possiblePeakPos)
                peaks.push(arr[possiblePeakPos])
            }
        }

        i++
    }

    return {
        pos: pos,
        peaks: peaks
    }
}

const f = findValleys([1, 2, 2, 2, 2])
console.log(f);