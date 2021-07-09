// my code

function solution(s) {
  let answer = ''
  const set = new Set()
  answer = Array.from(new Set(s))
  return answer
}
console.log(solution('ksekkset'))

// soultion code 1

function solution(s) {
  let answer = ''

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i]
    }
  }

  return answer
}
console.log(solution('kksekkset'))
// 풀이 : indexOf()는 해당되는 문자가 있다면 그 문자의 인덱스 번호를 반환한다.
// 인자로 준 문자열에서 중복되는 문자는 항상 맨 처음에 발견된 인덱스 번호를 가지게 된다.
// 그로 인해 문자열의 indexOf로 반환 받은 인덱스와 문자의 인덱스가 다르다면 중복된 문자이다.

// soultion code 2
// 추가 문제 : 중복 문자 갯수 찾기
function solution(s) {
  let answer = ''
  let pos = s.indexOf('k')
  while (pos !== -1) {
    answer++
    pos = s.indexOf('k', pos + 1)
  }

  return answer
}
console.log(solution('ksekkset'))

// 풀이 : 맨 처음 pos의 값은 0으로 셋팅된다. indexOf()는 해당되는 값이 없으면 -1을 리턴한다.
// 따라서 pos가 걸릴 때마다 answer은 카운팅 되고 pos는 해당 포스의 다음 indexOf로 찾아간다. 그러다가 indexOf()가 -1을 리턴하면 종료된다.
