<template>
    <v-container class="grey lighten-5">
    <v-row
        class="mb-6"
        no-gutters
    >
        <v-col
        
        >
            <v-card
            class="pa-2"
            tile
            outlined
            
            >
            {{playerScore}}
            </v-card>
        </v-col>
        <v-col
        
        >
            <v-card
                class="pa-2"
                tile
                outlined
                >
            <v-card-text>Games</v-card-text>
            <v-card-text>of 3</v-card-text>
            </v-card>
        </v-col>
        <v-col
        
        >
            <v-card
            class="pa-2"
            tile
            outlined
            
            >
            {{computerScore}}
            </v-card>
        </v-col>
    </v-row>

    </v-container>
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
            
            ...mapState(useGameStore,['playerScore','computerScore','isGameOver']),
            //Getters
            
            //Actions
            
        },
        methods: {
            
            
            
    
        }
    }
</script>

