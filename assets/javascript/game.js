	$( document ).ready(function() {

		// Game counters
		var winCounter = 0;

		var lossCounter = 0;

		//var magicNumber = 0;

		//var userNumber = 0;


		// startGame()
		// This is the function that will start and restart the game.
		function startGame() {

			var userNumber = 0;

			

			// magicNumber chosen randomly
			var magicNumber = Math.floor(Math.random() * 102) + 18;
			
			// magicNumber displayed for player
			$("#magic-number").text(magicNumber);
			// console for debug
			console.log(magicNumber);
			

			//userNumber returned
			userUpdate();

			// userScore update
			function userUpdate() {
				$("#user-number").text(userNumber);
				
				// win conditions
				if (userNumber == magicNumber) {
					alert("you win!");
					winCounter++;
					$("#win-counter").text(winCounter);
					//userNumber = 0;
					startGame();
				}

				// lose conditions
				if (userNumber > magicNumber) {
					alert("you lose!");
					lossCounter++;
					$("#loss-counter").text(lossCounter);
					//userNumber = 0;
					startGame();
				}
			}

			// random values generated for gems one, two, three, and four
			gemOne = Math.floor(Math.random() * 11) + 1;
			console.log(gemOne);

			gemTwo = Math.floor(Math.random() * 11) + 1;
			console.log(gemTwo);

			gemThree = Math.floor(Math.random() * 11) + 1;
			console.log(gemThree);

			gemFour = Math.floor(Math.random() * 11) + 1;
			console.log(gemFour);


			// gem on "click" events
			$("#gem-one").on("click", function() {
				userNumber = userNumber + gemOne;
				//console.log(userNumber);
				userUpdate();
			});

			$("#gem-two").on("click", function() {
				userNumber = userNumber + gemTwo;
				//console.log(userNumber);
				userUpdate();
			});

			$("#gem-three").on("click", function() {
				userNumber = userNumber + gemThree;
				//console.log(userNumber);
				userUpdate();
			});

			$("#gem-four").on("click", function() {
				userNumber = userNumber + gemFour;
				//console.log(userNumber);
				userUpdate();
			});

		}

			

		// game loop
		startGame();

	});