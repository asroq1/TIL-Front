// my code
// function solution(arr) {
// 	let answer,
// 		min = Number.MAX_SAFE_INTEGER
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] < arr[i + 1]) {
// 			answer = arr[i]
// 			console.log(' i' + answer)
// 		} else {
// 			answer = arr[i + 1]
// 		}
// 		console.log(answer)
// 	}
// 	return answer
// }

// let arr = [5, 7, 1, 3, 2, 9, 11]
// console.log(solution(arr))

// solution code

function solution(arr) {
	let answer,
		min = Number.MAX_SAFE_INTEGER
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		} else {
			console.log('X')
		}
		answer = min
	}
	return answer
}

// 풀이 : 첫 번째 반복문에서 무조건 arr의 0번째 인덱스가 세팅되면서 전체 탐색을 하게 된다.
// for문이 반복될 때마다 초기의 min보다 작은 수가 계속 세팅되게 된다.

let arr = [5, 7, 111, 3, 2, 9, 11]
console.log(solution(arr))
