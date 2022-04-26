<template>
    <v-card
        height="300"
        rounded="lg"
        >
        <v-card-title
            class="headline"
            >Player One</v-card-title>
        <v-card-actions>
            <v-btn
                label="Rock"
                elevation="2"
                @click="clickedRock"
                >
                Rock
                </v-btn>
            <v-btn
                label="Paper"
                elevation="2"
                @click="clickedPaper"
                >
                Paper
                </v-btn>
            <v-btn
                label="Scissors"
                elevation="2"
                @click="clickedScissors"
                >
                Scissors
                </v-btn>
                
        </v-card-actions>
    </v-card>
</template>

<script>
import {useGameStore} from '@/stores/gameStore';
import {mapState} from 'pinia';
    export default {
        name: 'PlayerComponent',
        data(){
            return {
            store: undefined,
            
            
            
            }
        },
        computed: {
            //Initial 
            
            ...mapState(useGameStore,['startGame']),
            //Getters
            
            //Actions
            ...mapState(useGameStore,['clickedRock','clickedPaper','clickedScissors'])
        },
        methods: {
            
            
            
    
        }
    }
</script>



