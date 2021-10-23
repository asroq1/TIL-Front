type CoffeeCup = {
  shots: number
  hasMilk: boolean
}

type MilkType = 'wpc' | 'wpi' | 'choco'

class coffeeMachine {
  BGPS: number
  constructor(BGPS: number) {
    this.BGPS = BGPS
  }

  makeAmericano(shots: number, cups: number): CoffeeCup {
    if (this.BGPS < shots * cups) {
      throw new Error(' not enough coffee bean !')
    }
    this.BGPS -= shots * cups
    return {
      shots,
      hasMilk: false,
    }
  }
  makeLatte(shots: number, cups: number, milk: MilkType): CoffeeCup {
    if (this.BGPS < shots * cups) {
      throw new Error(' not enough coffee bean !')
    } else if (milk === null) {
      throw new Error(' you need to choose the milk for your coffee.')
    }

    this.BGPS -= shots * cups
    return {
      shots,
      hasMilk: true,
    }
  }
}

const americanoMachine = new coffeeMachine(20)
const latteMachine = new coffeeMachine(20)

console.log(americanoMachine.makeAmericano(10, 2))
console.log(latteMachine.makeLatte(10, 2, 'wpc'))
