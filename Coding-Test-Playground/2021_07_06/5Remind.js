function solution(arr) {
	let answer,
		min = Number.MAX_SAFE_INTEGER
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
		answer = min
	}
	return answer
}

let arr = [5, 7, 44, 3, 111, 9, 11]
console.log(solution(arr))

// 풀이 : 맨 처음 arr의 1번째 인덱스가 값이 무조건 제일 작게 설정되고 for문이 돌 때마다 이전에 설정된 min과 비교하고 min보다 작으면 해당되는 인덱스의 값이 min이 된다.
