const number = 123 // 정수를 담는 메모리 할당.
const string = 'abcd' //문자열을 담기 위한 메모리 할당.

const obj = {
	a: 1,
	b: null,
} //객체와 객체 안의 값들을 담기 위한 메모리 할당

const a = [1, null, 'abcd'] //(객체처럼) 배열과 배열 안의 값을 담기 위한 메모리 할당

function func(data) {
	return data + 2
} //함수를 위한 할당 (함수는 호출 가능한 객체이다.)

someElement.addEventListenr('click', () => {
	someElement.style.background = 'black'
	//함수식 또한 객체를 담기 위한 메모리를 할당한다.
})

//함수 호출을 통한 할당

const date = new Date()
// Date객체를 위한 메모리 할당

const event = document.createElement('div')
//dom 요소를 위해 메모리를 할당한다.

const string = 'abcd'
const string2 = s.substr(0, 3) //s2는 새로운 문자열. 자바스크립트에선 문자열이 immutable data이기 떄문에,
//메모리를 새로 할당하지 않고 단순히 [0, 3]이라는 범위만 저장한다.

const a = ['abcd abcd', 'nana nanan']
const a2 = ['devicii', 'nanan ananan']
const a3 = a.concat(a2) //a와 a2를 이어붙여, 4개의 원소를 가진 새로운 배열

//주의 사항
// 메모리 누수를 방지하려면 아래와 같은 순환 참조를 피해야 한다. 가비지 컬렉션이 제대로 역할을 할 수 없기 떄문

function func() {
	const obj = {}
	const obj2 = {}
	obj.a = obj2 //obj는 obj2를 참조
	obj2.a = obj //obj2는 obj를 참조

	return 'string'
}

f()
