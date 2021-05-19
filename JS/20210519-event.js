// about event

const body = document.querySelector('body')
const html = docu
'click', ment.querySelector('html')
const button = document.querySelector('.button')

body.addEventListener(
	e => {
		console.log('body')
		//capture에서 멈추기 때문에 body만  리턴됌 결과 : body
		e.stopPropagation()
	},

	//기본값이 false인 capture을 true로 변환해서 순서가 다르게 나온다.
	//body -> button -> html
	true
)

html.addEventListener('click', () => {
	console.log('html')
})

button.addEventListener('click', () => {
	console.log('button')
})

// button -> body -> html순으로 버블링 된다.
