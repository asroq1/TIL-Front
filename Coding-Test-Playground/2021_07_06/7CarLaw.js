function solution(day, arr) {
	let answer = 0
	for (let i = 0; i < arr.length; i++) {
		if (day == arr[i].toString()[1]) {
			answer++
		}
	}
	return answer
}

arr = [12, 20, 54, 30, 87, 90, 30]
console.log(solution(0, arr))
