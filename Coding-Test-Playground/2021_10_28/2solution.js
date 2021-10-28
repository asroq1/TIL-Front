function solution(arr1, arr2) {
  let answer = []
  // 이렇게 2자리 수 이상이 들어올 경우엔 정렬 기준을 줘야한다 그렇지 않는다면 13때문에 잘못된 값이 나온다.
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  //   arr1.sort()
  //   arr2.sort()
  let p1 = 0
  let p2 = 0
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++])
      p2++
    } else if (arr1[p1] < arr2[p2]) {
      p1++
    } else {
      p2++
    }
  }
  return answer
}

let a = [1, 13, 9, 5, 2]
let b = [3, 2, 5, 7, 8]
console.log(solution(a, b))

//1 두 개의 배열을 정렬시킨다.
