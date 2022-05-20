// declare loop variable
let loopVar = 1;

// loop from 1 to 100.

for (; loopVar <= 100; loopVar++){
	//  check for numbers divisible by (3 and (*) 5 = 15)
	if (loopVar % 15 === 0){
		console.log("FizzBuzz");
	}
	else if (loopVar % 5 === 0){
		console.log("Buzz");
	}
	else if(loopVar % 3 === 0){
		console.log("Fizz");
	}
	else{
		console.log(loopVar);
	}
}
