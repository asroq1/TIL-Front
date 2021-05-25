// UseEffect

// useEffect는 렌더링이 될 때마다 특정 작업을 수행하는 hook이다. 클래스형의 compoenetDidMount + compoenetDidUpdate의 합친 버전이라고 보면 된다.

import React, { useEffect, useState } from 'react'

const Test = () => {
	const [name, setName] = useState('')
	const [nick, setNick] = useState('')

	useEffect(() => {
		console.log('렌더링 완료.')
		console.log({ name, nick })
	})
	const onChnage = e => {
		setName(e.target.name)
	}
	const onChangeNick = e => {
		setNick(e.target.name)
	}
	return <div>Hook Test ...</div>
}

export default Test

// 결과
//  렌더링이 완료
//  {name : "", nick: ""}
//  렌더링이 완료
//  {name : "", nick: ""}

// 만약 첫 렌더링에만 실행되고 업데이트 될 때는 실행하고 싶지 않다면 두 번째 파라미터에 빈 배열은 넣으면 된다.

useEffect(() => {
	console.log('마운트 될 때만 실행')
}, [])

//특정 값이 업데이트 될 때만 실행하고 싶을 때

//검사하고 싶은 값을 배열 안에 넣어주면 된다.
useEffect(() => {
	console.log(name)
}, [name])

// 정리 : 렌더링 되고 난 직후마다 실행되고, 두 번째 파라미터 배열에 무엇을 넣느냐에 따라 렌더 조건이 달라진다.

//useMemo

// useMemo를 사용하면 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있다. 연산의 결과를 기억하고 있는다.

// 버튼을 클릭할 때마다 두배로 계산된 값을 출력한다. 그런데 count와 관련없이 컴포넌트가 리렌더링 된 경우, 불필요한 연산을 한다.
function Component() {
	const [count, setCount] = useState(0)
	const doubleCount = count * 2

	console.log(doubleCount) // 두배로 계산한 값 출력

	return (
		<>
			<button onClick={() => setCount(count + 1)}>카운트 올리기</button>
		</>
	)
}

//이렇게 useMemo를 사용하면 의존하는 값이 변경될 때만 연산을 하게 되서 최적화가 가능해진다. 두 번째 인자는 의존하는 값을 명시해야한다.
const handleClick = useMemo(
	() => () => console.log('current count :' + count),
	[count]
) // useMemo로 useCallback 구현

//  useCallback 사용될 때마다 함수를 기억해 놓는다. 다시 렌더를 하지 않음.

// 이 코드는 별 문제가 되지 않는다 현재로서는.
function Component() {
	const handleClick = () => console.log('clicked!')

	return <button onClick={handleClick}>클릭해보세요!</button>
}

//   만약 알와 같이 작성되는 경우. like 부모 컴포넌트가 렌더링 or 상태가 변경되면
//   리렌더링이 발생한다.
function Component() {
	const [count, setCount] = React.useState(0)
	const handleClick = () => console.log('clicked!')

	return (
		<>
			<button onClick={() => setCount(count + 1)}>카운트 올리기</button>
			<button onClick={handleClick}>클릭해보세요!</button>
		</>
	)
}

//   아래와 같이 계속 함수를 재생성 하게 된다.

Component() // count는 0. 최초 렌더링

// setCount(count + 1)
Component() // count는 1. 두번째 렌더링

// setCount(count + 1)
Component() // count는 2. 세번째 렌더링

// setCount(count + 1)
Component() // count는 3. 네번째 렌더링

//이런 경우에는 useCallback을 활용해서 방지할 수 있다. 불필요한 메모리 낭비를 방지하고 최적화!
function Component() {
	const [count, setCount] = React.useState(0)
	const handleClick = React.useCallback(() => console.log('clicked!'), []) // useCallback 사용

	return (
		<>
			<button onClick={() => setCount(count + 1)}>카운트 올리기</button>
			<button onClick={handleClick}>클릭해보세요!</button>
		</>
	)
}

//   두 번째 배열 인자

const handleClick = React.useCallback(
	() => console.log('current count :' + count),
	[count]
) // 의존하는 상태 명시

//  만약 의존하는 값이 있다면 의존하는 값을 배열 안에다 집어넣어야 한다. 아니면 동일한 값을 유지하게 된다.

handleClick() // 실제 count 값: 0, 출력 결과: current count :0
setCount(count + 1) // 실제 count 값: 1
handleClick() // 실제 count 값: 1, 출력 결과: current count :1
