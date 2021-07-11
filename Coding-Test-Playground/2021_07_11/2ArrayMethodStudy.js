//for each

// forEach의 내부 모습

function forEach(func, thiArg) {
  for (let i = 0; i < a.length; i++) {
    func(a[i], i)
  }
}

const arr = [10, 11, 12, 13, 14, 15]
arr.forEach((v, i) => {
  console.log(v, i)
})

// 설명 :
// v는 배열의 요소이다.
// i는 인덱스의 번호이다
// for대신에 사용할 수 있다. forEach는 요소들을 하나씩 돌면서 반복 호출한다.

// 결과 :
//  10 0
// 11 1
// 12 2
// 13 3
// 14 4
// 15 5

//map

// map()은 새로운 요소들을 반환하는 함수다

// 1. map의 내부 모습
function map(func, thisArg) {
  const list = []
  for (let i = 0; i < a.length; i++) {
    list.push(func(a[i], i))
  }
  return list
}

// 2. 실행
const arr = [10, 11, 12, 13, 14, 15]
const answer = arr.map((v, i) => {
  return v * v
})
console.log(answer)

// 결과 : [ 100, 121, 144, 169, 196, 225 ]

// 3. 실행2
const arr = [10, 11, 12, 13, 14, 15]
const answer = arr.map((v, i) => {
  if (v % 2 === 0) {
    return v
  }
})
console.log(answer)

// [ 10, undefined, 12, undefined, 14, undefined ]
// 이렇게 호출하면 우리는 짝수만 나올 것이라 예상하지만 map은 항상 똑같은 크기의 배열을 반환한다. 그래서 홀수는 undefined가 나오게 된다.

//filter

// 1. filter의 내부 모습
const filter = ((func, thisArg) => {
const list = []
for(let i = 0; i<arr.length; i++){
    if(function(a[i], i)) {
        list.push(a[i])
    }
    return list
}
})

// 2. 실행
const arr = [10, 11, 12, 13, 14, 15]
let answer
answer = arr.filter((v, i) => {
  return v % 2 == 0
})
console.log(answer)

// 결과: [10, 12, 14]
// 위에서 본 map과는 다르게 원본 배열의 사이즈가 그대로 나오지 않는다. 원본 배열에서 조건에 따라 추출하는게 filter이다.

//reduce

// 1. reduce의 내부 모습

const reduce = ((func, value) =>{
  const result = value
  for (let i = 0; i < arr.length; i++) {
    result = func(result, a[i])
  }
})


// // 2. 실행

const arr = [10, 11, 12, 13, 14, 15]
let answer

answer = arr.reduce((acc, v) => {
  return acc + v
}, 0)
console.log(answer)

// 결과 : 75 (배열 인덱스 값의 총합)

// 위의 filter()와 map()과는 다르게 값을 반환한다. 두 번째 인자는 초깃값을 의미한다.
