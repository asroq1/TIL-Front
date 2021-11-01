{
  type Bread = {
    flour: number
    hasEgg: boolean
  }

  const DOUGH_GRAMM_PER_BREAD: number = 100

  let wheatflours: number = 300
  function makeBread(things: number): Bread {
    if (wheatflours < things * DOUGH_GRAMM_PER_BREAD) {
      throw new Error('Not enough Flour !')
    }
    wheatflours -= things * DOUGH_GRAMM_PER_BREAD
    return {
      flour: things,
      hasEgg: false,
    }
  }

  wheatflours += 3 * DOUGH_GRAMM_PER_BREAD
  const bread = makeBread(2)
  console.log(bread)
}
