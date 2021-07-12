// 1.jwt token
// 유저가 토큰을 볼수는 있지만 수정을 못한다. only read
// 서버에서만 수정할 수 있다.

// 2. 형식
// {header} {payload} {signatur}
// signature은 서버에서만 관리 시그니처로 값을 확인한다. 값이 다르면 조작된 데이터라는 의미

// 단점 중복 로그인을 확인하기 어려움.
// 한 번 토큰이 유출된다면 아주 위험한 상황들이 발생된다.