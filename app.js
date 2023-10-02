const game = ()=>{
    let pScore= 0;
    let cScore = 0;
    console.log('hello word!');
    //start the game
    const startGame= ()=>{
        const playBtn= document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click',()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }
    //play match
    const playMatch= ()=>{
        const options= document.querySelectorAll('.options button');
        const playerHand= document.querySelector('.player-hand');
        const computerHand= document.querySelector('.computer-hand');
        const hands=document.querySelectorAll('.hands img');

        hands.forEach(hand=>{
            hand.addEventListener('animationend',function(){
                this.style.animation = '';
            });
        });
        //computer options
        const computerOptions= ['rock','paper','scissors'];
        options.forEach(option=>{
            option.addEventListener('click',function(){
                //the computer choice
                const computerNumber= Math.floor(Math.random() * 3);
                const computerChoice=computerOptions[computerNumber];
                setTimeout(()=>{
                //here where we call compare hands
                compareHands(this.textContent,computerChoice);
                //update images
                playerHand.style.animation= ' shakePlayer 2s linear';
                computerHand.style.animation= ' shakeComputer 2s linear';
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
                },3000);
            
            });
        });
    }
    const updateScore = ()=>{
        const playerScore = document.querySelector('.playerScore p');
        const computerScore = document.querySelector('.computerScore p');
        playerScore.textContent= pScore;
        computerScore.textContent=cScore;
    }
    const compareHands= (playerChoice,computerChoice)=>{
        //update text
        const winner = document.querySelector('.winner')
        //comparation conditions
        if(playerChoice === computerChoice){//checking for a tie!
            winner.textContent ="It's a tie!";
            return;
        }
        if(playerChoice === 'rock'){//checking for rock!
            if(computerChoice === 'scissors'){
                winner.textContent='Player wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'paper'){//checking for paper!
            if(computerChoice === 'scissors'){
                winner.textContent='Computer wins!';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player wins!";
                pScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === 'scissors'){//checking for scissors!
            if(computerChoice === 'paper'){
                winner.textContent='Player wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer wins!";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    startGame();  
    playMatch(); 
}
game();