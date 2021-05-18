const someone = {
	name: 'devicii',
	whoAmI: function () {
		console.log(this)
	},
}

someone.whoAmI()
//{name: 'devicii' whoAmI : f}

const myWhoAmI = someone.whoAmI
myWhoAmI()
//Window{ ...}

const button = document.querySelector('#button')
button.addEventListener('click', () => {
	someone.whoAmI()
})
button.addEventListener('click', () => {
	myWhoAmI()
})
//<button id="btn">...</button>
//<button id="btn">...</button>

// 핵심은 호출한 놈 === this이고, 호출한 곳이 즉 this가 된다.

const bindedWhoAmI = myWhoAmI.bind(someone)
button.addEventListener('click', () => {
	console.log(bindedWhoAmI)
})

// {name : "devicii", whoAmI : f}
// 이렇게 bind()함수를 사용해서 값을 묶어줄 수도 있다 이렇게 하면 호출한 위치와 상관없게 결과가 나온다

// js에서는 선언할 떄 결정,호출할 때 결정하는 것이 있음.
// this는 후자, 호출과 무관하게 묶어주는 애가 bind()함수임.
