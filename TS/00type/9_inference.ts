{
  //type inference 타입 추론

  //   자동적으로 text는 문자열로 인식해서 1로 넣으면 에러가 뜬다.
  let text = 'hello'
  text = 1

  //string으로 message를 선언하지 않으면 any라서 웬만해서 string이라고 명시적으로 하자.
  function print(message: string) {
    console.log(message)
  }

  //이런 함수에서 타입 추론은 웬만해서 지양하자. 명시적으로 반환형을 넣어주는 것이 좋다.
  function add(x: number, y: number) {
    return x + y
  }
  const res = add(1, 3)

  // like this
  function addFix(x: number, y: number): number {
    return x + y
  }
  const res2 = addFix(1, 3)
}
