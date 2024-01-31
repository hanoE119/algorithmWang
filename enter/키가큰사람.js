function solution(arr, myHeight) {
	return arr.filter(_ => myHeight < _).length
}

solution([149, 150, 151, 152], 150)