if (false) {
	var tokens = 3;
	var height = 4.3;
	var age = 11;
	var adult = true;
	var boss = true;
	var park_pass = true;

	// Can he ride?
	if (((tokens >= 5) && (height >= 4.0) && ((age >= 12) || (adult === true))) || (boss === false) || (park_pass === true)) {
	    console.log("Step right up!");
	} else {
	    console.log("Sorry, you can't ride");
	}
} else if (false) {
	for(var i = 0; i < 25; i++) {
		console.log(i + ": This is awesome!");
	}
} else if (true) {
	var arr = ["Howdy there", "OMG", "javascript", "Pair Programming"];
	for(var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
} else {
	console.log("all conditions false!");
}