{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // interface생성.
  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
  }

  interface CommericalCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup
    fillBeans(beans: number): void
    clean(): void
  }
  //inplements로 interface를 구현한다. 만약 구현하지 않는다면 에러 발생
  // 총 두 개의 interface를 구현한다.
  class CoffeeMachine implements CoffeeMaker, CommericalCoffeeMaker {
    //1. 외부에서 멤버변수에 접근할 수 없도록 private으로 만든다.
    private static BEANS_GRAM_PER_SHOT: number = 20 //static을 붙이면 class level이 된다.
    private coffeeBeansGram: number = 1000 //obj level

    private constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans
    }

    fillBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans shoulb be greater than 0')
      }
      CoffeeMachine.BEANS_GRAM_PER_SHOT += beans
    }

    static makeMachine = (coffeeBeans: number): CoffeeMachine => {
      return new CoffeeMachine(coffeeBeans)
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`)

      //   if (this.coffeeBeansGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
      //     throw new Error('not enough coffee beans ! ')
      //   }

      this.coffeeBeansGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
    }

    clean() {
      console.log('cleaning machine now !')
    }

    private preheat(): void {
      console.log(`heating up ... ~`)
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots....`)
      return {
        shots,
        hasMilk: false,
      }
    }

    makeCoffee = (shots: number): CoffeeCup => {
      this.grindBeans(shots)
      this.preheat()
      return this.extract(shots)
    }
  }

  class AmatureUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
    }
  }

  class Barista {
    constructor(private machine: CommericalCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2)
      console.log(coffee)
      this.machine.fillBeans(45)
      this.machine.clean()
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32)
  const amateur = new AmatureUser(maker)
  const pro = new Barista(maker)
  pro.makeCoffee()
}
