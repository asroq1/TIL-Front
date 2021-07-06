//my code

// function solution(arr) {
// 	let answer = arr
// 	let sum = 0

// 	answer.reduce((acc, cur, i) => {
// 		if (acc + cur !== 100) {
// 			answer.push(i)
// 			return answer
// 		}
// 	})
// 	return answer
// }

// let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
// console.log(solution(arr))

// solution code
function solution(arr) {
	let answer = arr
	let sum = arr.reduce((a, b) => a + b, 0)

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (sum - (arr[i] + arr[j]) === 100) {
				arr.splice(j, 1)
				arr.splice(i, 1)
			}
		}
	}

	return answer
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13]
console.log(solution(arr))

// 풀이 : 총 9명의 난쟁이 중 2명의 가짜 난쟁이를 고르면 되는 것이기 때문에 2명의 가짜 난장이가
// 빠졌을 때 총합이 100이면 된다.
// 그래서 전체 탐색이 필요한 점을 2중 for문을 활용해 모두 탐색한다.splice
// if문처럼 sum - 두 개의 가짜 난쟁이를 뺀 값이 100이 나올 경우에 해당되는 배열의 인덱스가 즉 가짜 난쟁이라는 공식이 성립된다.
