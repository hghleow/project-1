var score = 0;
//console.log("score is here", score);


//Scenario 1

//Question 1
var s1o1 = function() {
	alert("Oops! That is incorrect.");
};

document.getElementById("opt1-1-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! That is incorrect.");
};

document.getElementById("opt1-1-2")
	.addEventListener("click", s1o2);


var s1o3 = function() {
	alert("Oops! That is incorrect.");
};

document.getElementById("opt1-1-3")
	.addEventListener("click", s1o3);


var s1o4 = function() {
	score++;
	alert("Correct! " + "You score 1 point. You now have " + score + "point(s)!");
	//console.log("user has clicked", score);
	document.getElementById("opt1-1-4")
		.style.backgroundColor = "green";
};

document.getElementById("opt1-1-4")
	.addEventListener("click", s1o4);


//Question 2
var s1o1 = function() {
	score++;
	alert("Well done! " + "You score 1 point. You now have " + score + "point(s)!");
	document.getElementById("opt1-2-1")
		.style.backgroundColor = "green";
};

document.getElementById("opt1-2-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! That's incorrect.");
};

document.getElementById("opt1-2-2")
	.addEventListener("click", s1o2);

//Scenario 2

//Question 1
var s1o1 = function() {
	score++;
	alert("Well done! " + "You score 1 point. You now have " + score + "point(s)!");
	document.getElementById("opt2-1-1")
		.style.backgroundColor = "green";
};

document.getElementById("opt2-1-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! That's incorrect.");
};

document.getElementById("opt2-1-2")
	.addEventListener("click", s1o2);


var s1o3 = function() {
	alert("Oops! That's incorrect.");
};

document.getElementById("opt2-1-3")
	.addEventListener("click", s1o3);


var s1o4 = function() {
	alert("Oops! Try again.");
};

document.getElementById("opt2-1-4")
	.addEventListener("click", s1o4);

//Scenario 3

//Question 1

var s1o1 = function() {
score++;
	alert("Well done! " + "You score 1 point. You now have " + score + "point(s)!");
	document.getElementById("opt3-1-1")
		.style.backgroundColor = "green";
};

document.getElementById("opt3-1-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-1-2")
	.addEventListener("click", s1o2);

//Question 2

var s1o1 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-2-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-2-2")
	.addEventListener("click", s1o2);


var s1o3 = function() {
	score++;
	alert("Well done! " + "You score 1 point. You now have " + score + "point(s)!");
	document.getElementById("opt3-2-3")
		.style.backgroundColor = "green";
};

document.getElementById("opt3-2-3")
	.addEventListener("click", s1o3);


var s1o4 = function() {
	alert("Incorrect!");
};

document.getElementById("opt3-2-4")
	.addEventListener("click", s1o4);

//Question 3

var s1o1 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-3-1")
	.addEventListener("click", s1o1);


var s1o2 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-3-2")
	.addEventListener("click", s1o2);


var s1o3 = function() {
	score++;
	alert("Well done! " + "You score 1 point. You now have " + score + "point(s)!");
	document.getElementById("opt3-3-3")
		.style.backgroundColor = "green";
};

document.getElementById("opt3-3-3")
	.addEventListener("click", s1o3);


var s1o4 = function() {
	alert("Oops! Try harder.");
};

document.getElementById("opt3-3-4")
	.addEventListener("click", s1o4);