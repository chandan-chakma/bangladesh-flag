function Rotate(arr, k) {
    if (k % arr.length == 0) {
        return arr;
    }
    else {
        k = k % arr.length
    }
    let newArr = []
    let index = 0

    for (let i = k; i < arr.length; i++) {
        newArr[i] = arr[index]
        index++
    }
    for (let i = 0; i < k; i++) {
        newArr[i] = arr[index]
        index++
    }
    return newArr
}
let arr = [1, 2, 3, 4, 5]
let k = 3