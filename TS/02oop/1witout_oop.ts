{
  //coffe bean 변수
  //make coffe 함수는 받은 인자 샷 shot만큼 coffeereturn

  const BEANS_GRAM_PER_SHOT: number = 20
  let coffeeBeansGram: number = 1000

  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  const makeCoffe = (shots: number): CoffeeCup => {
    if (coffeeBeansGram < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error(' not enought coffe benas')
    }
    coffeeBeansGram -= shots * BEANS_GRAM_PER_SHOT
    return {
      shots,
      hasMilk: false,
    }
  }

  const coffee = makeCoffe(40)
  console.log(coffee)
}
