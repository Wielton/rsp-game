import { defineStore } from "pinia";

export const useGameStore = defineStore('player',{
    state : ()=>{
        return {
            playerTitle: "Player One",
            computerTitle: "Computer",
            button1: "Rock",
            button2: "Paper",
            button3: "Scissors"
            // I have three options to take care of:
            // User selection
            // Computer selection
            // Game status
        }
    },
    actions: {
    },
    getters: {
        
    }


})