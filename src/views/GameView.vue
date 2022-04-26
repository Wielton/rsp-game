<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-container>
        <v-row
          >
          <v-col
            
          >
          <PlayerComponent/>
          </v-col>

          <v-col
            
          >
            <v-card
              
            >
              <ScoreboardComp/>
            </v-card>
          </v-col>

          <v-col
            
          >
          <OpponentComp/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>
import PlayerComponent from '@/components/gameViewComponents/PlayerComp.vue'
import OpponentComp from '@/components/gameViewComponents/OpponentComp.vue'
import ScoreboardComp from '@/components/gameViewComponents/ScoreboardComp.vue'


  

  export default {
    name: 'GameView',

    components: {
      PlayerComponent,
        OpponentComp,
        ScoreboardComp
        
      
    },
  }
</script>