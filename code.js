''//function for contdownTimer V1 for week1-2
function blastoffTimerV1(){
	console.log("start() function started");
	//created varible currTime set it equal to 10
	var currTime = 10;
	console.log(currTime);
	document.getElementById("countdownStatus").innerHTML = currTime;
	//9
	setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 1000)
	//8
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 2000)
	//7
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 3000)
	//6
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 4000)
	//5
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 5000)
	//4
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 6000)
	//3
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 7000)
	//2
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 8000)
	//1
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = currTime;
		console.log(currTime);
	}, 9000)
	//blastoff
		setTimeout(function(){
	currTime = currTime - 1;
		//what we do after the delay
		document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
		console.log(currTime);
	}, 10000)
}
//every line of code commented on....
function playCraps(){
	console.log("playCraps() started");
	//generate varibles: die1, die2, sum
	var die1;
	var die2;
	var sum;
	//roll the dice
	die1 = Math.floor(Math.random()*6)+1;
	console.log(die1)
	die2 = Math.floor(Math.random()*6)+1;
	console.log(die2)
	//determine the sum of the two dice and save it in sum
	sum = die1 + die2; 
	console.log("sum is equal to " + sum);
	//follow the rules of craps and tell the status in crapsStatus 
	//first lose
	if(sum == 7 || sum == 11){
	//You have lost
		document.getElementById("crapsStatus").innerHTML = "Craps!! You lose!"
	//You have won
	} else if(die1 == die2 && die1%2 == 0){
		document.getElementById("crapsStatus").innerHTML = "Huzzah! You Win!!"
	//Please play again you didnt win or lose
	} else{
		document.getElementById("crapsStatus").innerHTML = "You did not win or lose. Please play agian"
	}
}
// blastoff function
function blastoffTimerV2(){
	console.log("blastoffTimerV2() started");
	//want to make a loop that runs 11 times,10-1 and then blastoff
	var countdownTimer = 10;
	var stepTime = 1000;
	// timer function
	for(var i = 0; i < 10; i = i + 1){
		setTimeout(function(){
			console.log("countdownTimer");
		document.getElementById("countdownStatus").innerHTML = countdownTimer;
		countdownTimer = countdownTimer - 1;
		}, stepTime * i)
	}
	//BLASTOFF!!!
			setTimeout(function(){
		document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
		console.log("Blastoff!!!");
	// stepTime= 1000 & countdownTimer= 10
	}, stepTime * countdownTimer)
}

// blastoff function
function blastoffTimerV3(){
	console.log("blastoffTimerV2() started");
	//want to make a loop that runs 11 times,10-1 and then blastoff
	var countdownTimer = 10;
	var stepTime = 1000;
	// timer function
	for(var i = 0; i <= countdownTimer; i = i + 1){
	//version 3 blastoff timer
		setTimeout(function(){
			console.log("countdownTimer");
			if(countdownTimer <= 0 ){
		document.getElementById("countdownStatus").innerHTML = "Blastoff!!!";
		console.log("Blastoff!!!");
		//Half way warning 
			}else if(countdownTimer < 5){
		document.getElementById("countdownStatus").innerHTML = " Warning Less 		than half way to launch, time left = " + countdownTimer;
		countdownTimer = countdownTimer - 1;
			}else{
		document.getElementById("countdownStatus").innerHTML = countdownTimer;
		countdownTimer = countdownTimer - 1;
			}
		}, stepTime * i)
	}
}
//start function
function startFun(){
	console.log("startFun() started");
	document.getElementById("data").rows["seconds"].innerHTML = "reading data";
	index = 0;
	timer = setInterval(updateDisplay, time_interval);
	document.getElementById("startButton").disabled =true;
	document.getElementById("stopButton").disabled =false;	
}
//stop function
function stopFun(){
	console.log("stopFun() started");
	clearInterval(timer);
	document.getElementById("stopButton").disabled =true;
	document.getElementById("startButton").disabled =false;
}

//play dtation function
function playStation(){
	console.log("playStation() started");
//play space Station sounds here
	mySound = new sound(" us-lab-background.mp3 ");
	mySound.play();
}

function sound(srcFile){
//start function
	console.log ("sound function started");
//audio 
	this.sound = document.createElement("audio");
//source
	this.sound.src = srcFile;
//Attribute
	this.sound.setAttribute("preload","audio");
//control
	this.sound.setAttribute("controls","none");
//display
	this.sound.style.display = "none";
//document
	document.body.appendChild(this.sound);
	//function
	this.play = function(){
		//play
		this.sound.play();
	}
	//function
	this.stop = function(){
		//pause
		this.sound.pause();
	}
}