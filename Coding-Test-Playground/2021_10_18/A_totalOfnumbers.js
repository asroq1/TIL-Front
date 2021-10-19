function solution(n, k, card) {
  let answer
  //   1.중복되는 숫자를 뽑을 수 있기 때문에 set을 활용해 중복을 제거한다.
  let temp = new Set()
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        temp.add(card[i] + card[j] + card[k])
      }
    }
  }
  let box = Array.from(temp).sort((a, b) => b - a)
  answer = box[k - 1]
  return answer
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]
console.log(solution(10, 3, arr))
