{
  // type assertion ┗|｀O′|┛

  function isStrFunc(): any {
    return 'str'
  }

  const res = isStrFunc()(
    //이 시점에선 res가 문자열인지 몰라서 .length를 사용할 수 없다.
	res.length; // impossible
   console.log((res as string).length) // as로 타입을 캐스팅 하는 것과 동일하다.
  )

  //정말 정확하지 않다면 쓰지 않는 것이 좋다.. 이것도 에러 뜨는 코드
  const wrong : any = 5;
	console.log((wrong as Array<number>).push(1));


	function findNumbers() : number[] |  undefined {
		return undefined
	}

	const numbers = findNumbers()
	numbers.push(2); //number가 배열일수 있지만 undefined일 수 있기 때문에 error가 뜸
	numbers!.push(2) //확실하다면 !를 넣어서 사용할 수 있다. 

	
}
