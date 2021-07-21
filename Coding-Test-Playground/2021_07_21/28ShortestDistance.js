//solution code

function solution(s, t) {
  let answer = []
  let p = 1000

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      p = 0
      answer.push(p)
    } else {
      p++
      answer.push(p)
    }
  }
  p = 1000
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) {
      p = 0
    } else {
      p++
      answer[i] = Math.min(answer[i], p)
    }
  }
  return answer
}

let str = 'teachermode'
console.log(solution(str, 'e'))

// 풀이 : s[i]의 값과 t의 값이 같다면 그 배열에 p를 0으로 초기화 한 후에 넣어준다. 아니라면 p++이후 p를 넣어준다.
// 그렇다면 처음 배열의 값은 [1001, 0 , 1, 2, 3, 0, 1, 2, 3, 0]일 것이다.

// 이후 두 번째 for를 만나서 왼쪽으로 검증을 해준다.
// s[i]가 t와 같다면 p는 그냥 0으로 초기화 해준다. 이미 해당 값은 0으로 선언된 상태이기 때문,
// 값이 다르다면 똑같이 p++을 한 이후에 Math.min(answer[i](이전값), p(현재 나온 p값))을 사용해
// 더 작은 값이 answer[i]로 들어가게 된다.
