let computerSelection;
        let playerSelection;
        let playerScore = 0;
        let computerScore = 0;
     
        playerChoice();
        winningScore();

        function playerChoice() {
            //sets each unique button to a unique variable, for further maniplulation
            const btn1 = document.querySelector('#btnRock')
            const btn2 = document.querySelector('#btnPaper')
            const btn3 = document.querySelector('#btnScissor')

            //eventlisteners that take a button click as input and set the players selection to the correct corresponding button
            //after players choice is set, the game() function is called to continue playing after users choice.
            btn1.addEventListener('click', function(){
                playerSelection = 'rock';
                game();
            });
            btn2.addEventListener('click', function(){
                playerSelection = 'paper';
                game();
            });
            btn3.addEventListener('click', function(){
                playerSelection = 'scissors';
                game();
            });
        }

        function game() {
            computerPlay(computerSelection);
            playRound(playerSelection, computerSelection);

            //Displays the last move selected by player and comp, aswell as the current score.
            document.getElementById('lastMove').innerHTML = 'Player: ' + playerSelection.toUpperCase() + ' - Computer: ' + computerSelection.toUpperCase();
            document.getElementById('scoreBoard').innerHTML = 'Player Score: ' + playerScore + ' - Computer Score: ' + computerScore;
        }

        //Generates a random number from 1 to 3, and assigns a move based on this random number
        function computerPlay() {
            let compChoice = Math.floor(Math.random() * 3) + 1;

            //assigns the random number to 1 of 3 possible moves
            switch(compChoice){
                case 1:
                    computerSelection = 'rock';
                    break;
                case 2:
                    computerSelection = 'paper';
                    break;
                case 3:
                    computerSelection = 'scissors';
                    break;
            }
            return computerSelection;
        }

        function playRound() {
            //tie game condition
            if(playerSelection == computerSelection) {
                document.getElementById('resultsForm').innerHTML = 'Tie Game!';
            } else if (
                //conditions for the player to lose the round
                (playerSelection == 'scissors' && computerSelection == 'rock') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'rock' && computerSelection == 'paper')
            ) {
                document.getElementById('resultsForm').innerHTML = 'You lose! ' + computerSelection.toUpperCase() + ' beats ' + playerSelection.toUpperCase();
                return computerScore += 1;
            } else if (
                //conditions for the computer to lose the round
                (computerSelection == 'scissors' && playerSelection == 'rock') ||
                (computerSelection == 'paper' && playerSelection == 'scissors') ||
                (computerSelection == 'rock' && playerSelection == 'paper')
            ){
                document.getElementById('resultsForm').innerHTML = 'You win! ' + playerSelection.toUpperCase() + ' beats ' + computerSelection.toUpperCase();
                return playerScore += 1;
            }
        }

        function winningScore() {
            //compares scores between player and computer to find the winner
            if(playerScore > computerScore) {
                console.log('Player is the winner!');
            } else if (computerScore > playerScore) {
                console.log('Computer is the winner!');
            } else {
                console.log('The game is a draw!');
            }
        }