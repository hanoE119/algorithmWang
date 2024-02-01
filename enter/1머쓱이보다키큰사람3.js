function solution(arr, height) {
    let a = arr.filter(arr => height < arr).length
    console.log(a)
    return a
}

solution([149, 180, 192, 170],167)
