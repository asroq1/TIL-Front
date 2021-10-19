import { rejects } from 'assert'

{
  // JS Style
  function jsAdd(n1, n2) {
    return n1 + n2
  }

  function jsFetchNum(id) {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, rejects) => {
      resolve(100)
    })
  }
  // TS Style
  function add(n1: number, n2: number): number {
    return n1 + n2
  }

  function TSFetchNum(id: string): Promise<number> {
    //code ...
    //code ...
    //code ...
    return new Promise((resolve, rejects) => {
      resolve(100)
    })
  }

  // 1.optional parameter

  function printName(firstName: string, lastName?: string) {
    //lastName에는 ?를 붙임으로서 붙여도 되고, 안붙여도 되고를 설정해줌
    console.log(firstName)
    console.log(lastName)
  }
  printName('devicii', 'jung')
  printName('devicii') //인자가 1개라서 불가능함. 상단의 optional ?를 넣어서 lastName이 들어가지 않아도 사용가능.

  //2. default parameter
  function printMessages(messages: string = 'default messages') {
    //이렇게 아무것도 인자값이 없다면 default의 값이 나온다.
    console.log(messages)
  }
  printMessages()

  //3. Rest parameter

  function addNumbers(...num: number[]): number {
    return num.reduce((a, b) => a + b)
  }
  console.log(addNumbers(1, 2))
  console.log(addNumbers(1, 2, 3, 4, 5))
  console.log(addNumbers(1, 2, 3, 4, 5))
}
