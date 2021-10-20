{
  // before

  //   type SuccessState = {
  //     res: {
  //       body: string
  //     }
  //   }
  //   type FailState = {
  //     reason: string
  //   }
  //   type LoginState = SuccessState | FailState

  //   function login(): LoginState {
  //     return {
  //       res: {
  //         body: 'logged in !',
  //       },
  //     }
  //   }

  //   function printLoginState(state: LoginState) {
  //     if ('res' in state) {
  //       console.log(state.res.body)
  //     } else {
  //       console.log(state.reason)
  //     }
  //   }
  //after
  type SuccessState = {
    result: 'success'
    res: {
      body: string
    }
  }
  type FailState = {
    result: 'fail'

    reason: string
  }
  type LoginState = SuccessState | FailState

  function login(): LoginState {
    return {
      result: 'success',
      res: {
        body: 'logged in !',
      },
    }
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(state.res.body)
    } else {
      console.log(state.reason)
    }
  }
}
