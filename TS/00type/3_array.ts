{
  // Araay

  const friuts: string[] = ['๐', '๐ญ']
  const scores: Array<number> = [1, 3, 4]

  function printArr(friuts: readonly string[]) {
    // readonly๋ฅผ ๋ถ์ฌ๋์ ์์  ์์ฑ์ด ๋ถ๊ฐ๋ฅํด์ง๋ค.
  }

  // Tuple ์๋ก ๋ค๋ฅธ ํ์์ ๋ฐ์ดํฐ๋ฅผ ๋ด์ ์ ์์. ํํ ์ฌ์ฉ์ ๊ถ์ฅํ์ง ์์.
  // Tuple ๋ณด๋จ interface, class, type alias๋ฑ์ ์ฌ์ฉํ๋ ๊ฒ์ด ๋ซ๋ค.
  let studnet: [string, number]
  studnet = ['name', 1234]
  studnet[0] // name ์ถ๋ ฅ
  studnet[1] // 1234 ์ถ๋ ฅ
}
