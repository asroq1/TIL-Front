//deep copy

//shallow copy

let num1 = 1
let num2 = num1

num2 = 2

console.log(num1, num2)

//이것이 바로 deep copy이다.
// Result : num1 : 1 num2 : 2

// 이것이 바로 shallow copy의 개념이다
// Result : num1 : 2 num2 : 2

//원시값들은 deep copy가 일어난다

const devicii = {
  name: 'jung',
  age: 100,
}

let devCopy = devicii
devCopy.name = 'who r u'

console.log(devicii, devCopy)

// 객체는 이렇게 shallow copy를 활용한다.
// 이유는 불필요한 메모리 낭비를 줄이기 위해서다.

// Result :{ name: 'who r u', age: 100 } { name: 'who r u', age: 100 }

let spreadEx = { ...devicii }

spreadEx.age = 20

console.log(spreadEx)

//이렇게 spread Operator을 활용하면 deep copy를 활용한 것처럼 객체의 값을 변환할 수 있다.
//Result : { name: 'who r u', age: 20 }
