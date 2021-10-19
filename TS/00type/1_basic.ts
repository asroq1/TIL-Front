{
  // JS Remind

  //   old : var 호이스팅 등 여러 문제가 발생할 수 있다.
  var age = 5
  age = 1

  // let es6
  let name = 'hello'
  name = 'hi'

  // const
  const age = 5
  //다시 쓰기가 불가능하다.
  age = 5

  // Primitive : number ,string , boolean, bigint, symbol, null, undefined
  // Object : funtion, array ...

  // 1. number

  const num: number = 1

  // 2. string

  const str: string = 'hi'

  // 3. boolean
  const bool: boolean = true

  // 4. undefined 이렇게 optional로 설정해줄 수 있다.

  let und: number | undefined
  und = undefined
  und = 2

  function find(): number | undefined {
    return undefined
  }
  // 5. null 위와 같이 optional로 자주 활용한다.

  let nul: string | null

  // 6. 🐛unknown 가능하면 쓰지 않는 것이 좋다. 너무 추상적이기 때문이다. 자바스크립트와의 호환성 때문에 가끔 사용
  let notSure: unknown = 0
  notSure = 'test'
  notSure = 5

  //   7. 🐛any 똑같이 사용하지 않는 것이 좋다. bullshit.
  let anycall: any = 0
  anycall = 'rt'
  anycall = true

  // 8 void 함수의 리턴값이 없을 때 사용.
  function print(): void {
    console.log('hi world')
    return
  }
  let unusable: void = undefined //🐛

  // 9. never 아무것도 리턴하지 않을 때 사용하는 타입이다.
  function throwErr(message: string): never {
    throw new Error(message)
  }

  // 9 object 🐛 명시적이지 못해서 이것도 딱히 좋은 방법은 아니다.
  let obj: object
  function accSomeObj(obj: object) {
    accSomeObj({ name: 'devicii' })
    accSomeObj({ gender: 'devicii' })
  }
}
