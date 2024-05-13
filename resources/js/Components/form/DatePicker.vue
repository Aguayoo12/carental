<template>
    <v-card class="py-3" :dark="dark">
          
          <v-layout row :wrap="vertical">
            <v-flex xs12>
              <v-date-picker
                id="picker1"
                ref="picker1"
                v-model="dates"
                :picker-date.sync="pickerPage1"
                multiple
                no-title
              ></v-date-picker>              
            </v-flex>
            <v-flex xs12>
              <v-date-picker
                id="picker2"
                ref="picker2"
                v-model="dates"
                :picker-date.sync="pickerPage2"
                multiple
                no-title
                full-width
               ></v-date-picker>              
            </v-flex>            
          </v-layout>
          
         </v-card>
</template>

<script> 
    
</script>