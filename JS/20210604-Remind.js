// 1. hoisting

// 아직 선언되지 않은 함수, 변수를 상단으로 끌어올려 사용하는 방식

// 함수를 선언하기 이전이지만 코드는 정상적으로 작동한다.
// 이와 같은 것을 hoisting이라고 칭한다.
hoistingFunc()

function hoistingFunc() {
	console.log('this is hositing')
}
// 출력 : this is hoistring

console.log(hoistingNumber)
var hoistingNumber = 1

// 출력 : undefined

// 반면 let, const를 사용하게 된다면 개발자 도구에서 error 메세지를 확인할 수 있을 것이다.

// 2. closure

// 내부함수에서 외부함수의 변수에 접근 가능한 것이 클로저이다.

function outer() {
	let closure = 'this is clousure'
	function inner() {
		alert(closure)
	}
	inner()
}

outer()
//결과 : 'this is closure'

// 외부함수가 종료된 이후에도 내부함수가 접근할 수 있다.
function outer() {
	let closure = 'this is closure2'
	return function () {
		alert(closure)
	}
}
const inner = outer()
inner()

//결과 : 'this is closure2'

//심화
// 클로저는 자바스크립트가 private한 변수를 사용할 수 있도록 하는 메커니즘.
function factory_clousure(title) {
	return {
		get_title: function () {
			return title
		},
		set_title: function (_title) {
			title = _title
		},
	}
}

const first = factory_clousure('one')
const second = factory_clousure('two')

console.log(first.get_title())
console.log(second.get_title())

first.set_title('arsenal')
//결과 : 'one' , 'two'

console.log(first.get_title())
console.log(second.get_title())
//결과 : 'arsenal' , 'two'

// 3.this

// 3-1 그냥 this
this //window

// 3-2  함수 내 this
function a() {
	console.log(this)
}

//window()

// 3-3 객채 내 this
const obj = {
	a: function () {
		console.log(this)
	},
}
obj.a()

// 객체 안에서 this는 객체를 가리킨다.
// ojb

// 3-4 객체 할당 후 this
const obj2 = obj.a
a()

// 호출하는 함수가 객체의 메소드인지 그냥 함수인지가 중요하다. 이 예제에서는 그냥 funtion이라 window가 나온다.
//window

// 3-5 bind , call, apply
const obj2 = { c: 'd' }
function b() {
	console.log(this)
}
b() //window
// 이렇게 apply, bind  , call을 사용하면 this가 객체를 가르킨다
b.bind(obj2).call() // obj2
b.call(obj2) // obj2
b.apply(obj2) //obj2

//3-6 생성자 this
function person(name, age) {
	this.name = name
	this.age = age
}

person.prototype.sayHi = function () {
	console.log(this.name, this.age)
}

// 객체를 생성하지 않고 할당하게 되면 window를 가르키게 된다.
person('devicii', 24)
console.log(window.name, window.age)
//devicii, 24

// but new를 쓴다면 ?

const devicii = new person('devicii', 24)
devicii.sayHi() //  devicii 24
