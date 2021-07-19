//my code

// function solution(str) {
//   let answer = ''
//   for (let i = 0; i < str.length; i++) {
//     if (isNaN(str[i]) === false) {
//       answer += str[i]
//     }
//   }
//   if (answer[0] == 0) {
//     return answer.slice(1)
//   }
//
// }

// let str = 'tge0a1h205er'
// console.log(solution(str))

//solution code 1

function solution(str) {
    let answer = ''
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            answer += str[i]
        }

        return parseInt(answer)
    }

  let str = 'tge0a1h205er'
  console.log(solution(str))


//   풀이 : parseInt를 사용하게 된다면 앞의 무의미한 0이 없어지기 때문에,
//   parseInt를 사용하면 된다.


//solution code 2

// function solution(s) {
//   let answer = ''
//   for (let i = 0; i < s.length; i++) {
//     if (!isNaN(s[i])) {
//       answer = answer = answer * 10 + Number(s[i])
//     }

//     return answer
//   }
// }
// let str = 'tge0a1h205er'
// console.log(solution(str))
