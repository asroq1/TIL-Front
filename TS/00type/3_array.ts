{
  // Araay

  const friuts: string[] = ['🎃', '👭']
  const scores: Array<number> = [1, 3, 4]

  function printArr(friuts: readonly string[]) {
    // readonly를 붙여놔서 수정 생성이 불가능해진다.
  }

  // Tuple 서로 다른 타입의 데이터를 담을 수 있음. 튜플 사용을 권장하지 않음.
  // Tuple 보단 interface, class, type alias등을 사용하는 것이 낫다.
  let studnet: [string, number]
  studnet = ['name', 1234]
  studnet[0] // name 출력
  studnet[1] // 1234 출력
}
