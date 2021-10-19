{
  // Type Aliases 새로운 타입을 정할 수 있다.

  type Text = string
  const name: Text = 'Devicii'
  const address: Text = 'korea'

  type Num = number
  type Student = {
    name: string
    age: number
  }
  // obj도 타입을 만들 수 있다.
  const student: Student = {
    name: 'deviicii',
    age: 24,
  }

  // String Literal Types

  type Name = 'devicii'
  let deviciiName: Name
  deviciiName = 'devicii'

  type JSON = 'json'
  const josn: JSON = 'json'
}
