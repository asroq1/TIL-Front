// type CoffeeCup = {
//   shots: number
//   hasMilk: boolean
// }

// type MilkType = 'wpc' | 'wpi' | 'choco'

// class coffeeMachine {
//   BGPS: number
//   constructor(BGPS: number) {
//     this.BGPS = BGPS
//   }

//   makeAmericano(shots: number, cups: number): CoffeeCup {
//     if (this.BGPS < shots * cups) {
//       throw new Error(' not enough coffee bean !')
//     }
//     this.BGPS -= shots * cups
//     return {
//       shots,
//       hasMilk: false,
//     }
//   }
//   makeLatte(shots: number, cups: number, milk: MilkType): CoffeeCup {
//     if (this.BGPS < shots * cups) {
//       throw new Error(' not enough coffee bean !')
//     } else if (milk === null) {
//       throw new Error(' you need to choose the milk for your coffee.')
//     }

//     this.BGPS -= shots * cups
//     return {
//       shots,
//       hasMilk: true,
//     }
//   }
// }

// const americanoMachine = new coffeeMachine(20)
// const latteMachine = new coffeeMachine(20)

// console.log(americanoMachine.makeAmericano(10, 2))
// console.log(latteMachine.makeLatte(10, 2, 'wpc'))

{
  //coffe bean 변수
  //make coffe 함수는 받은 인자 샷 shot만큼 coffeereturn

  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT: number = 20 //static을 붙이면 class level이 된다.
    coffeeBeansGram: number = 1000 //obj level

    constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans
    }

    static makeMachine = (coffeeBeans: number): CoffeeMaker => {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffe = (shots: number): CoffeeCup => {
      if (this.coffeeBeansGram < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        // this가 아닌 class level이라서 class이름을 붙인다.
        throw new Error(' not enought coffe benas')
      }
      this.coffeeBeansGram -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = new CoffeeMaker(100) // ()가 생성자이다
  console.log(maker)
  const maker2 = new CoffeeMaker(10) // ()가 생성자이다
  console.log(maker2)

  const maker3 = CoffeeMaker.makeMachine(3) // 얘는 static함수를 사용해서 객체에서 바로 부를 수 있음 아니라면 new로 obj를 새로 생성해야함
  console.log(maker3)
}

// 예를 들어 Math객체에서 이렇게 new Math라는 객체를 사용하지 않고,
// .abs를 호출해도 바로 사용할 수 있는 이유가 아래와 같인 abs함수는 static함수이기 떄문.
// Math.abs(4)
