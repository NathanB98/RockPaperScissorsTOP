let computerSelection;
        let playerSelection;
        let playerScore = 0;
        let computerScore = 0;

        game();
        console.log('Final score. Player: ' + playerScore + '. Computer: ' + computerScore + '.');
        winningScore();

        function game() {
            playerChoice();

            computerPlay(computerSelection);
            playRound(playerSelection, computerSelection);
            console.log('Player: ' + playerSelection);
            console.log('Computer: ' + computerSelection);
        }

        function playerChoice() {
            
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
            //playerSelection = prompt('Enter your move:');
            //playerSelection = playerSelection.toLowerCase();
            //prevents issues with case sensitivity

            //tie game condition
            if(playerSelection == computerSelection) {
                console.log('Tie game!');
            } else if (
                //conditions for the player to lose the round
                (playerSelection == 'scissors' && computerSelection == 'rock') ||
                (playerSelection == 'paper' && computerSelection == 'scissors') ||
                (playerSelection == 'rock' && computerSelection == 'paper')
            ) {
                console.log('You lose! ' + computerSelection + ' beats ' + playerSelection);
                return computerScore += 1;
            } else if (
                //conditions for the computer to lose the round
                (computerSelection == 'scissors' && playerSelection == 'rock') ||
                (computerSelection == 'paper' && playerSelection == 'scissors') ||
                (computerSelection == 'rock' && playerSelection == 'paper')
            ){
                console.log('You win! ' + playerSelection + ' beats ' + computerSelection);
                return playerScore += 1;
            } else {
                //catch for incorrect inputs
                console.log('Please choose between: rock, paper, or scissors');
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