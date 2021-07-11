function solution() {
  let answer,
    min = Number.MAX_SAFE_INTEGER
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    answer = min
    return answer
  }
}
let arr = [5, 2, 2, 4, 2, 1, 5, 9, 10]
console.log(solution(arr))

// solution 2
function solution(arr) {
  let answer = Math.min(...arr)
  return answer
}
let arr = [5, 2, 2, 4, 2, 1, 5, 9, 10]
console.log(solution(arr))

// 풀이 : min메소드를 활용해 최소값을 구할 수 있다. arr객체를 바로 넣으면 Nan이 나오기 때문에 spread operator을 활용해서 ...arr이렇게 넣어준다.

// solution 3
function solution(arr) {
  let answer = Math.max(...arr)
  return answer
}
let arr = [5, 2, 2, 4, 2, 1, 5, 9, 10]
console.log(solution(arr))

// 풀이 : max메소드를 활용해 최대값을 구할 수 있다. arr객체를 바로 넣으면 Nan이 나오기 때문에 spread operator을 활용해서 ...arr이렇게 넣어준다.

// solution 4
function solution(arr) {
  let answer = Math.max.apply(null, arr)
  return answer
}
let arr = [5, 2, 2, 4, 2, 1, 5, 9, 10]
console.log(solution(arr))

// 풀이 : bind메소드를 활용해 최대값을 구할 수 있다. 첫 번째 인자는 빈 값을 주고 두 번째 인자에 arr를 넣어준다.
