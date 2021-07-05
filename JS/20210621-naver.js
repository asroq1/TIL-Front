function countOf(arr, value) {
	let count = 0
	arr.array.forEach(element => {
		if (element == value) {
			count++
		}
	})
	return count
}

function solution(arr) {
	const answer = []
	const set = new Set([])
	arr.forEach(element => {
		if (set.has(element)) {
			return -1
		}
		set.add(element)
		count = countOf(arr, element)
		if (count > 1) {
			answer.push(count)
		}
	})
	if (answer.length == 0) {
		answer.push(-1)
	}
	return answer
}

solution([1, 2, 2, 3, 3, 4, 5])
//1.파라미터는 배열로 주어진다.

// 배열 안 숫자들 중 첫 번째 인덱스 순서대로 인덱스의 값이 중복되는 횟수를 계산함

// 중복하는 숫자가 없다면 -1을 return한다
