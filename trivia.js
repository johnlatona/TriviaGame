
$(document).ready(function(){
	var questionsAndAnswers = [
		{
			question: 'Which artist bumped Michael Jackson off of the Billboard Number 1 spot in January 1992?', 
			choices: ["Billy Joel", "Nirvana", "Green Day", "Ace of Base"],
			answer: 'Nirvana',
			isChosen: false,
			audio: new Audio("audio/smells_like_teen_spirit.mp3"),
			image: 'images/nirvana.gif'
		},  
		{
			question: 'In what year did Greenday release their album "Dookie"?', 
			choices: ["1993", "1996", "1994", "1991"],
			answer:"1994",
			isChosen: false,
			audio: new Audio("audio/longview.mp3"),
			image: 'images/green-day.gif'
		},
		{
			question: "Which popular 1990's grunge band suffered a tragic loss when their lead singer died from an overdose in 2002?",
			choices: ["Mudhoney", "Pearl Jam", "Alice In Chains", "Soundgarden"],
			answer: 'Alice In Chains',
			isChosen: false,
			audio: new Audio("audio/them_bones.mp3"),
			image: 'images/alice-in-chains.gif'
		},
		{
			question: 'Which artist wrote the song "Can You Feel The Love Tonight" for The Lion King soundtrack?',
			choices: ["Neil Diamond", "Elton John", "Usher", "George Michael"],
			answer: 'Elton John',
			isChosen: false,
			audio: new Audio("audio/can_you_feel_the_love_tonight.mp3"),
			image: 'images/elton-john.gif'
		},
		{
			question: 'Which traditional American folk song did Swedish dance group Rednex cover in 1995?',
			choices: ["Cotton-Eye Joe", "America the Beautiful", "This Land is Your Land", "Here Comes The Sun"],
			answer: 'Cotton-Eye Joe',
			isChosen: false,
			audio: new Audio("audio/cotton_eye_joe.mp3"),
			image: 'images/cotton-eye-joe.gif'
		},   
		{
			question: 'Which popular band did it all for the nookie in 1999?',
			choices: ["Fred Durst", "Limp Bizkit", "Linkin Park", "Seether"],
			answer: 'Limp Bizkit',
			isChosen: false,
			audio: new Audio("audio/nookie.mp3"),
			image: 'images/nookie.gif'
		},
		{
			question: '"Save Tonight" was the one hit wonder from which singer in 1997?',
			choices: ["The Verve Pipe", "Baz Luhrmann", "Eagle-Eye Cherry", "Lou Bega"],
			answer: 'Eagle-Eye Cherry',
			isChosen: false,
			audio: new Audio("audio/save_tonight.mp3"),
			image: 'images/save-tonight.gif'
		},	
		{
			question: 'Deep Blue Something had a 1995 hit with which track that takes its name from an Audrey Hepburn film?',
			choices: ["Josey", "The Kandinsky Prince", "Breakfast at Tiffany's", "Gammer Gerten's Needle"],
			answer: "Breakfast at Tiffany's",
			isChosen: false,
			audio: new Audio("audio/breakfast_at_tiffanys.mp3"),
			image: 'images/breakfast-at-tiffanys.gif'
		},
		{
			question: 'Which ex-soap star was Torn and all out of faith in 1997?',
			choices: ["Ricky Martin", "Taye Diggs", "Natalie Imbruglia", "Jensen Ackles"],
			answer: 'Natalie Imbruglia',
			isChosen: false,
			audio: new Audio("audio/torn.mp3"),
			image: 'images/torn.gif'
		},
		{
			question: "Which song famously started playing at The Notorious B.I.G's funeral?",
			choices: ["California Love", "Happy Birthday", "Hypnotize", "Big Poppa"],
			answer: "Hypnotize",
			isChosen: false,
			audio: new Audio("audio/hypnotize.mp3"),
			image: 'images/hypnotize.gif'
		}
	];
	var question;
	var answer;
	var count = 30;
	var selector;
	var choiceOne;
	var choiceTwo;
	var choiceThree;
	var choiceFour;
	var asked;
	var intervalId;
	var timeoutId;
	var unanswered = 0;
	var correct = 0;
	var incorrect = 0;
	var click = new Audio("audio/button_click_version_sound_effect_13.webm.mp3")
	var clap = new Audio("audio/clap.mp3");
	var done = new Audio("audio/done.mp3");
	var buzzer = new Audio("audio/buzzer.mp3");
	var gameBackground = new Audio("audio/game_background.mp3");
	var countdownBeep = new Audio("audio/countdown.mp3");

	$("#timer").html(count);

	function showTimeUp() {
		$("#game").hide();
		$("#correct").hide();
		$("#incorrect").hide();
		$("#times-up").show();
		$("#start-game").hide();
		$("#game-over").hide();
		$(".background-opacity").fadeOut("slow");
		$("#timer").show();
		buzzer.play();

	};

	function showCorrect() {
		$("#game").hide();
		$("#correct").show();
		$("#incorrect").hide();
		$("#times-up").hide();
		$("#start-game").hide();
		$("#game-over").hide();
		$(".background-opacity").fadeOut("slow");
		$("#timer").show();
		gameBackground.pause();
		gameBackground.currentTime = 0;
	};

	function showIncorrect() {
		$("#game").hide();
		$("#correct").hide();
		$("#incorrect").show();
		$("#times-up").hide();
		$("#start-game").hide();
		$("#game-over").hide();
		$(".background-opacity").fadeOut("slow");
		$("#timer").show();
		gameBackground.pause();
		gameBackground.currentTime = 0;
	};

	function showGame() {
		$("#game").show();
		$("#correct").hide();
		$("#incorrect").hide();
		$("#times-up").hide();
		$("#start-game").hide();
		$("#game-over").hide();
		$("#timer").show();
		$(".background-opacity").fadeIn("slow");
		buzzer.pause();
		buzzer.currentTime = 0;
		gameBackground.play();
	};

	function startGame() {
		count = 30;
		$("#game").hide();
		$("#correct").hide();
		$("#incorrect").hide();
		$("#times-up").hide();
		$("#start-game").show();
		$("#game-over").hide();
		$("#timer").hide();
		$(".background-opacity").hide();
		gameBackground.pause();
		gameBackground.currentTime = 0;
	}

	function gameOver() {
		$("#game").hide();
		$("#correct").hide();
		$("#incorrect").hide();
		$("#times-up").hide();
		$("#start-game").hide();
		$("#game-over").show();
		$("#timer").hide();
		gameBackground.pause();
		gameBackground.currentTime = 0;
	}

	function selectQuestion() {
		selector = Math.floor(Math.random() * 10);
		console.log(selector);
	};

	$(document).ready(function(){
		startGame();
	})

	function assign(index) {

		question = questionsAndAnswers[index].question;
		answer = questionsAndAnswers[index].answer;
		choiceOne = questionsAndAnswers[index].choices[0];
		choiceTwo = questionsAndAnswers[index].choices[1];
		choiceThree = questionsAndAnswers[index].choices[2];
		choiceFour = questionsAndAnswers[index].choices[3];
		questionsAndAnswers[index].isChosen = true;

		console.log(index);
		console.log(questionsAndAnswers[index].isChosen);
		console.log(question);
		console.log(choiceOne + ', ' + choiceTwo + ', ' + choiceThree + ', ' + choiceFour);

		$("#question").html(question);
		$("#answer-one").html(choiceOne);
		$("#answer-two").html(choiceTwo);
		$("#answer-three").html(choiceThree);
		$("#answer-four").html(choiceFour);

		return;	
	};

	function askQuestion() {
		selectQuestion();
		asked = questionsAndAnswers[selector].isChosen;
		console.log(asked);
		if(asked === false) {
			assign(selector);
		}
		else {
			for (selector = 0; selector < questionsAndAnswers.length; selector++) {
				if (questionsAndAnswers[selector].isChosen === false) {

					question = questionsAndAnswers[selector].question;
					answer = questionsAndAnswers[selector].answer;
					choiceOne = questionsAndAnswers[selector].choices[0];
					choiceTwo = questionsAndAnswers[selector].choices[1];
					choiceThree = questionsAndAnswers[selector].choices[2];
					choiceFour = questionsAndAnswers[selector].choices[3];
					questionsAndAnswers[selector].isChosen = true;

					console.log(selector);
					console.log(questionsAndAnswers[selector].isChosen);
					console.log(question);
					console.log(choiceOne + ', ' + choiceTwo + ', ' + choiceThree + ', ' + choiceFour);

					$("#question").html(question);
					$("#answer-one").html(choiceOne);
					$("#answer-two").html(choiceTwo);
					$("#answer-three").html(choiceThree);
					$("#answer-four").html(choiceFour);

					return;
				}
				else if (questionsAndAnswers[selector].isChosen === true) {
					continue;
				}
			}
			clearTimeout(timeoutId);
			clearInterval(intervalId);
			gameOver();
			clap.play();
			done.play();
			$("#game-over").prepend('<h1>All done!</h1><h2>Let'+"'"+'s see how you did: </h2><br><h3>Correct Answers: ' + correct + '</h3><h3>Incorrect Answers : ' + incorrect + '</h3><h3>Unanswered Questions: ' + unanswered + '</h3>');
			console.log("done");
			console.log("----------------------------");
			resetBoolean();
			return;
		}
	};

	function clickPulseStart() {
		$("#start-button-word").animate({opacity: "0.5"}, "normal");
		$("#start-button-word").animate({opacity: "1.0"}, "normal", clickPulseStart);
		$("#restart-button-word").animate({opacity: "0.5"}, "normal");
		$("#restart-button-word").animate({opacity: "1.0"}, "normal", clickPulseStart);
	};

	function resetBoolean() {
		for (var k = 0; k < questionsAndAnswers.length; k++) {
			questionsAndAnswers[k].isChosen = false;
		}
	}; 

	function countdown() {
		count--;
		$("#timer").html(count);
		if(count <= 10 && count > 5) {
			$("#timer").css("color", "rgb(255, 255, 255)");
		}
		else if(count <= 5 && count > 0) {
			countdownBeep.play()
			$("#timer").css("color", "#FF3192");
			$("#timer").animate({fontSize: "7vw"}, "fast");
			$("#timer").animate({fontSize: "6vw"}, "fast");
			countdownBeep.currentTime = 0;
		}
		else if(count === 0) {
			unanswered++;
			clearInterval(intervalId);
			showTimeUp();
			$("#start-button").removeAttr("disabled");
			$("#times-up").html("<h1>Time's Up!</h1><h2>The correct answer was " + answer + ".</h2>");
			console.log("Unanswered: " + unanswered);
			askQuestion();
			timeoutId = setTimeout(runTimer, 3000);
		}
	};

	function runTimer() {
		count = 30;
		$("#timer").css("color", "#00B8B3");
		$("#timer").html(count);
		clap.currentTime = 0;
		done.pause()
		done.currentTime = 0;
		showGame();
		intervalId = setInterval(countdown, 1000);
	}

	function checkAnswer(text) {
		if(text === answer) {
			correct++
			showCorrect();
			questionsAndAnswers[selector].audio.play();
			$("#correct-message").html('<h1>Correct!</h1><h2>The answer is ' + answer + '!</h2><br><img src="'+ questionsAndAnswers[selector].image + '">');
			clearInterval(intervalId);
			timeoutId = setTimeout(function() {
				runTimer();
				questionsAndAnswers[selector].audio.pause();
				questionsAndAnswers[selector].audio.currentTime = 0;
				askQuestion();
			}, 4000);
			console.log("Correct :" + correct);
		}
			else {
			incorrect++
			showIncorrect();
			questionsAndAnswers[selector].audio.play();
			$("#incorrect-message").html('<h1>Wrong Answer!</h1><h2> The answer was ' + answer + '.</h2><br><img src="'+ questionsAndAnswers[selector].image + '">');
			clearInterval(intervalId);
			timeoutId = setTimeout(function() {
				runTimer();
				questionsAndAnswers[selector].audio.pause();
				questionsAndAnswers[selector].audio.currentTime = 0;
				askQuestion();
			}, 4000);
			console.log("Incorrect: " + incorrect);
		}
	}

	$("#start-button").click(function() {
		click.play();
		showGame();
		count = 30;
		$("#timer").html(count);
		askQuestion();
		runTimer();
	});

	$("#restart-button").click(function() {
		click.play();
		showGame();
		count = 30;
		$("#timer").html(count);
		askQuestion();
		runTimer();
	});

	$("#answer-one").click(function() {
		var text = document.getElementById("answer-one").textContent;
		checkAnswer(text);
	})

	$("#answer-two").click(function() {
		var text = document.getElementById("answer-two").textContent;
		checkAnswer(text);
	})

	$("#answer-three").click(function() {
		var text = document.getElementById("answer-three").textContent;
		checkAnswer(text);
	})

	$("#answer-four").click(function() {
		var text = document.getElementById("answer-four").textContent;
		checkAnswer(text);
	})

	startGame();
	clickPulseStart();
});










