{
  type CoffeeCup = {
    shots: number
    hasMilk: boolean
  }

  // public
  // private
  // protected

  class CoffeeMaker {
    //1. 외부에서 멤버변수에 접근할 수 없도록 private으로 만든다.
    private BEANS_GRAM_PER_SHOT: number = 20 //static을 붙이면 class level이 된다.
    private coffeeBeansGram: number = 1000 //obj level

    private constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans
    }

    fillBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans shoulb be greater than 0')
      }
      this.BEANS_GRAM_PER_SHOT += beans
    }

    static makeMachine = (coffeeBeans: number): CoffeeMaker => {
      return new CoffeeMaker(coffeeBeans)
    }

    makeCoffe = (shots: number): CoffeeCup => {
      if (this.coffeeBeansGram < shots * this.BEANS_GRAM_PER_SHOT) {
        // this가 아닌 class level이라서 class이름을 붙인다.
        throw new Error(' not enought coffe benas')
      }
      this.coffeeBeansGram -= shots * this.BEANS_GRAM_PER_SHOT
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = CoffeeMaker.makeMachine(2)
  //이렇게 set을 활용해 캡슐화를 진행할 수 있다,
  maker.fillBeans(40)

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

    private internalAge = 4

    get age(): number {
      return this.internalAge
    }
    set age(num: number) {
      this.internalAge = num
    }

    //멤버 변수로 first와 last를 해주지 않고 생성자 안에다가 바로 선언해서 사용할 수 있음
    constructor(private firstName: string, private lastName: string) {}
  }

  const user1 = new User('jemie', 'horse')
  console.log(user1.fullName)

  user1.age = 6
  //여기서 internal age가 4에서 6으로 바뀌어 출력된 이유는 위의 user1.age가 setter함수라서 쓰기로 값을 바뀌었기 때문이다.
  console.log(user1)

  // 1. get set을 안쓰면 똑같이 jemie hores로 나온다. 이유는 한 번 할당돼면 계속 지정되기 때문에 getter setter을 쓴다
  // 2. get set을 활용해야지 내가 원하는 것처럼 만들 수 있으며, 멤버 변수처럼 접근하면 됌
}
