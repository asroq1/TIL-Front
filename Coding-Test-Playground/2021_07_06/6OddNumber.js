// my code

function solution(arr) {
	let answer = []
	let sum = 0,
		min = 1000
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0) {
			sum += arr[i]
		}
		if (arr[i] % 2 !== 0 && arr[i] < min) {
			min = arr[i]
		}
	}
	answer.push(sum)
	answer.push(min)
	return answer
}

arr = [12, 77, 38, 221, 13, 92, 85]
console.log(solution(arr))

// solution code
