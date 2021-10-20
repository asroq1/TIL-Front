import { stat } from 'fs'

{
  //Union types : OR

  type Direction = 'left' | 'right' | 'top' | 'bottom'
  function move(direction: Direction) {
    console.log(direction)
  }
  move('bottom')
  move('left')

  //한 개의 union만 사용 가능
  type TileSize = 8 | 12 | 16
  const tile: TileSize = 16

  type SuccessState = {
    res: {
      body: string
    }
  }
  type FailState = {
    reason: string
  }
  type LoginState = SuccessState | FailState

  function login(): LoginState {
    return {
      res: {
        body: 'logged in !',
      },
    }
  }

  function printLoginState(state: LoginState) {
    if ('res' in state) {
      console.log(state.res.body)
    } else {
      console.log(state.reason)
    }
  }
  //   printLoginState(state)
  //   success -> body !
  //   fail -> reason  !
}
