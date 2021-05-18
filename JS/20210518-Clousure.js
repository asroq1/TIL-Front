//add1()은 이렇게 a,b의 값을 리턴하는 순수함수이다.
function add1(a, b) {
	return a + b
}

//여기서 add2()함수를 보면 add2()는 poison의 값도 함께 더해서 return하게 된다.
// 이렇게 된다면 add2()는 add1()과는 다르게 순수함수가 아닌 클로저 함수이다.

let poison = 0
function add2(a, b) {
	return a + b + position
}

add1(6, 11) // 17
add2(6, 11) // 17

//위의 결과값은 동일하게 나왔지만 아래처럼 poison변수가 3으로 선언되면 6+11+0의 리턴값이 poison변수의 값3을 더해서,
//6+11+3의 결과값을 리턴하게 된다.

poison = 3
add1(6, 11) // 17
add2(6, 11) // 20
