
//Arrow Function

// Before ES6
function ugly() {
	alert('TT');
    //여기서 this와 arrow funtion의 this는 다르다. 전자는 동적이고, 후자는 정적으로 변하게 된다.
}

//  After ES6
const handsome = () => {
	alert('Hi :) ');
}

//ProtoType VS Class

 // Prototype
 
 function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  
  Animal.prototype.say = function() {
    console.log(this.sound);
  };
  Animal.prototype.sharedValue = 1;
  
  const dog = new Animal('개', '멍멍이', '멍멍');
  const cat = new Animal('고양이', '야옹이', '야옹');
  
  dog.say();
  cat.say();
  
  console.log(dog.sharedValue);
  console.log(cat.sharedValue);
  
  // After ES6
  
  // class문법의 내부는 prototype으로 구현되어 있다.
  class Animal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
    say() {
      console.log(this.sound);
    }
  }
  
  const dog = new Animal('개', '멍멍이', '멍멍');
  const cat = new Animal('고양이', '야옹이', '야옹');
  
  dog.say();
  cat.say();


//  enhanced object literals

// Before ES6 

const data = {
  id: id,
  password: '42'
}

// AfterES6
const data = {
  id,
  password: '42'
}

//이렇게 같은 key와 value가 같다면 생략할 수 있다.


// Destructuring\

const {data} = state.data;
function doneLogin ({name, age, onSuccess, onFail}) {...}
doneLogin({name: "jamie", onSuccess: () => alert("Welcome ")})

