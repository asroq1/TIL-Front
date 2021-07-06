// my code
function solution(a, b, c) {
	let answer = 'YES',
		max
	let total = a + b + c
	if (a <= b + c && b <= c + a && c <= a + b) {
		answer
	} else {
		answer = 'NO'
	}
	return answer
}

console.log(solution(24, 210, 207))

// solution code

function solution(a, b, c) {
	let answer = 'YES',
		max
	let sum = a + b + c
	if (a > b) {
		max = a
	} else {
		max = b
	}
	if (c > max) {
		max = c
	}
	if (sum - max <= max) {
		answer = 'NO'
	}
	return answer
}

//풀이 : 맨 하단의 if문에서 sum - max가 max와 같거나 max보다 작다면 삼각형 성립의 공식이 이루어지지 않기 때문에 ,
// answer을 no로 출력하면 된다.
console.log(solution(24, 210, 107))
