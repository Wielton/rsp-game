import { defineStore } from "pinia";

export const useGameStore = defineStore('player',{
    state : ()=>{
        return {
            computerOptions : ['Rock','Paper','Scissors'],
            computerScore: 0,
            playerScore: 0,
            isGameOver: false
            // I have three options to take care of:
            // User selection
            // Computer selection
            // Game status
        }
    },
    actions: {
        clickedRock(computerInput){
            computerInput = this.computerOptions[Math.floor(Math.random() * 3)];
            console.log(computerInput);
            if ((computerInput == "Scissors")) {
                console.log("You Win");
                this.playerScore++;
            } else if(computerInput == "Rock"){
            console.log("It's a tie");
            }else{
                console.log("Computer Wins");
                this.computerScore++;
            }
        },
        clickedPaper(computerInput){
            computerInput = this.computerOptions[Math.floor(Math.random() * 3)];
            console.log(computerInput);
            if (computerInput == "Rock") {
                console.log("You Win");
                this.playerScore++;
            } else if(computerInput == "Paper"){
            console.log("It's a tie");
            } else {
            console.log('Computer Wins');
            this.computerScore++;
            }
        },
        clickedScissors(computerInput){
            computerInput = this.computerOptions[Math.floor(Math.random() * 3)];
            console.log(computerInput);
            if (computerInput == "Paper") {
                console.log("You Win");
                this.playerScore++;
            } else if(computerInput == "Scissors"){
            console.log("It's a tie");
            } else {
            console.log('Computer Wins');
            this.computerScore++;
            }
        },
    },
    getters: {
        isGameOver: state =>{
            if((state.playerScore == 5)||(state.computerScore == 5)){
                this.state.playerScore = 0;
                this.state.computerScore = 0;
                return true;
            }
        }
    }

    },
    


)