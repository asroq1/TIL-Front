{
  type Bread = {
    flour: number
    hasEgg: boolean
  }

  class BreadMaker {
    static DOUGH_GRAMM_PER_BREAD: number = 100 // 위와 같이 static을 붙이면 class level이 된다.
    wheatflours: number = 300 // static을 붙이지 않으면 obj level

    constructor(wheatflours: number) {
      this.wheatflours = wheatflours
    }

    makeBread(things: number): Bread {
      // class레벨이 된 멤버변수는 즉 static이 붙으면 this가 아닌 클래스의 명을 앞에 붙인다.
      if (this.wheatflours < things * BreadMaker.DOUGH_GRAMM_PER_BREAD) {
        throw new Error('Not enough Flour !')
      }
      this.wheatflours -= things * BreadMaker.DOUGH_GRAMM_PER_BREAD
      return {
        flour: things,
        hasEgg: false,
      }
    }
  }

  const bread = makeBread(40)
  console.log(bread)
  const bread2 = new BreadMaker(20) //  <- construotor가 얘다
  console.log(bread2)
}
