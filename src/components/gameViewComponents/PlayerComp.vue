<template>
    <v-card
        height="300"
        rounded="lg"
        >
        <v-card-actions>
            <v-btn
                elevation="2"
                :click="rock"
                >
                </v-btn>
            <v-btn
                elevation="2"
                :click="paper"
                >
                </v-btn>
            <v-btn
                elevation="2"
                :click="scissors"
                >
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
            store: undefined
            }
        },
        computed: {
            //Initial 
            ...mapState(useGameStore,['button1', 'button2', 'button3']),
            //Getters
            ...mapState(useGameStore,['quoteHttpCode', 'quoteText']),
            //Actions
            //...mapState(useGameStore,['loginRequest'])
        },
        methods: {
            
        }
    }
</script>



