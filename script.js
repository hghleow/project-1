var userName = prompt("What is your name?");
	if (userName===true) {
		alert(`Good day ${userName} ! Welcome to Traffic Essentials 101. Here, you'll get to refresh your memory on driving on the roads again. It will be an adventure as you encounter common difficult situations on the roads. When you respond to those road situations correctly, you earn a point!`);
	} else {};


var scenario1 = [
	{
		question1: "You want to make a right turn. Cars Yellow and Blue want to make a turn at the junction too. Who takes a turn first?",
		options: [
			"You",
			"Car A",
			"Car B",
			"Cars A & B"
		],		
		ans: "Cars A & B"
	},
	{
		question2: "Well done! Now that Cars A & B have made their turns, what is your next move?",
		options: [
			"Switch on the right signal, then turn make a right turn",
			"Switch on the left signal, then make a right turn"
		],
		ans: "Switch on the right signal, then turn make a right turn"
	}
]

var firstQ = scenario1[0];
console.log(firstQ.ans)

var scenario2 = [
	{
		question1: "You are approaching the Police Officer from his front. You want to turn left. What do you do when you see the signal below?",
		options: [
			"remain stationary",
			"proceed to make a right turn",
			"accelerate forward",
			"proceed to make a left turn"
		],
		ans: "remain stationary"
	}
]

var scenario3 = [
	{
		question1: "You have come to a stop at the stop line. You want to make a right turn. What do you do?",
		options: [
			"switch on the right signal",
			"switch on the left signal"
		],
		ans: "switch on the right signal"
	},
	{
		question2: "Terrific! As seen in the diagram, Car A is heading in the forward direction. There is a traffic light ahead of you. Click it to decide your next move.",
		options: [
			"proceed to make a right turn and gesture a quick 'thanks' to Car A as you drive by",
			"wait for Car A to cross the junction and proceed to make a right turn",
			"wait for Car A to cross the junction. Make sure there is no more oncoming traffic before turning right",
			"Wait for Car A to cross the junction and remain stationary even though there is no oncoming traffic. Proceed to do a right turn when the green arrow on the traffic light appears."
		],
		ans: "wait for Car A to cross the junction. Make sure there is no more oncoming traffic before turning right"
	},
	{
		question3: "You got it right! As you are about to move off, Car B approaches the junction and stops on your left as seen in the diagram. His right signal light is on. What do you do?",
		options: [
			"accelerate ahead of him and end up on any lane available",
			"let him turn right ahead of you before turning right into lane 1",
			"proceed safely to make a right turn into lane 1",
			"proceed safely to make a right turn into lane 2"
		],
		ans: "proceed safely to make a right turn into lane 1"
	}
];

var scenario1Options = scenario1[0].options;

// Loop through options array and add a button for every item in the array to the page
for (var i = 0; i < scenario1Options.length; i++) {
	debugger;
  // step 1: create empty button
  var btn = $('<button>');

  // step 2: insert the approrpriate text into this button
  btn.text(scenario1Options[i]);

  // step 3: add this new button to the DIV
  //divThatContainsAll4Buttons.append(btn);

  // step 3: append this newly created button (which exist only in memory) to the DOM
  $('body').append(btn);
}






