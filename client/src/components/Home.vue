<template>
  <div class="hello">
    <div>
      <div class='largeContainer'>
        <div class="container">
          <div>
            <p>Total Seconds Streamed Per Label</p>
            <p class="lilabel" >
              Label 1: {{ total1() }}
            </p>
            <p class="lilabel" >
              Label 2: {{ total2() }}
            </p>
            <p class="lilabel" >
              Label 3: {{ total3() }}
            </p>
          </div>
        </div>
        <div class="container2">
          <h3>Total seconds streamed: 
                  {{ totalGrand() }}
          </h3>
          <h3>Most streamed track: 
                  {{ mostPop() }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const url = "http://localhost:3000/all"

export default {
  data() {
    return {
      results: []
    }
  },
  mounted() {
    this.upDate()
    this.timer = setInterval( this.upDate, 15000 )
  },
  methods: {
    upDate:function() {
      axios.get( url ).then( response => {
        this.results = response.data
      })
    },
    total1:function() {
      let totalLabel1 = 0
      this.results.forEach( result => {
        if( result.label == "label1" ){
          totalLabel1 += result.seconds_streamed
        }
      })
      return totalLabel1
    },
    total2:function() {
      let totalLabel2 = 0
      this.results.forEach( result => {
        if( result.label == "label2" ){
          totalLabel2 += result.seconds_streamed
        }
      }) 
      return totalLabel2
    },
    total3:function() {
      let totalLabel3 = 0
      this.results.forEach( result => {
        if( result.label == "label3" ){
          totalLabel3 += result.seconds_streamed
        }
      }) 
      return totalLabel3
    },
    totalGrand:function() {
      let grandTotal = 0
      this.results.forEach( result => {
        grandTotal += result.seconds_streamed
      }) 
      return grandTotal
    },
    cancelAutoUpdate:function() { 
      clearInterval( this.timer ) 
      },
    beforeDestroy() {
      clearInterval( this.timer )
    },
    mostPop:function() {
      let message = ''
      let totalTrack1 = 0
      let totalTrack2 = 0
      let totalTrack3 = 0
      this.results.forEach( result => {
        if( result.track_id == "track1" ){
          totalTrack1 += result.seconds_streamed
        } if( result.track_id == "track2" ){
          totalTrack2 += result.seconds_streamed
        } if( result.track_id == "track3" ){
          totalTrack3 += result.seconds_streamed
        }
      }) 
      
      if( totalTrack1 > totalTrack2 && totalTrack3 ){
        return message = 'Track 1'
      } if( totalTrack2 > totalTrack1 && totalTrack3 ){
        return message = 'Track 2'
      } if( totalTrack3 > totalTrack2 && totalTrack1 ){
        return message = 'Track 3'
      }
    }
  }
}
</script>

<style scoped>

  .largeContainer {
    margin: 0 auto;
  }
  
  .container {
    display: inline-block;
    background-color: #fff;
    width: 30%;
    border: 5px solid #1baada;
    margin:40px;
    height: 300px;
    vertical-align:top;
    box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    -webkit-box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    -moz-box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    vertical-align: middle;
    line-height: 50px;
  }

  .container2 {
    display: inline-block;
    background-color: #fff;
    width: 30%;
    border: 5px solid #1baada;
    margin:40px;
    height: 300px;
    vertical-align:top;
    box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    -webkit-box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    -moz-box-shadow: 10px 10px 158px -19px rgba(0,0,0,0.59);
    vertical-align: middle;
    line-height: 100px;
  }

</style>
