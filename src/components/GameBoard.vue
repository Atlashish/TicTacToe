<template>
  <div class="stats">
                <div class="turn">{{turn}}</div>
                <div class="winner">{{xWinner}}</div>
                <div class="status" v-if="status == 'X'"
                    :style="{ 'color': '#39A7FF', 'text-shadow': '0 0 10px #39A7FF'  }">{{ status }} </div>
                <div class="draw" v-if="status === 'Draw!'">{{ status }}</div>
            </div>
    <div id="trisContainer">
      <Square v-for="(square, index) in squares" :key="index" @click="handleClick(index)" :value="square" />
    </div>
    <div class="stats">
                <div class="turn">{{turn}}</div>
                <div class="winner">{{yWinner}}</div>
                <div class="status" v-if="status == 'O'"
                    :style="{ 'color': '#D80032', 'text-shadow': '0 0 10px #D80032' }">{{ status }} </div>
                <div class="draw" v-if="status === 'Draw!'">{{ status }}</div>
            </div>
  </template>

<script>
import Square from './Square.vue';

export default {
  components: {
    Square,
  },
  props: {
    squares: Array,
    turn: String,
    status: String,
    xWinner: String,
    yWinner: String,
  },
  emits: ['handleClick'],
  methods: {
    handleClick(index) {
      this.$emit('handleClick', index);
    },
  },
};
</script>

<style scoped>

#trisContainer {
    display: grid;
    grid-template-columns: repeat(3, 125px);
    gap: 5px;

}

.turn,
.winner,
.draw {
    font-size: 50px;
    text-shadow: 1px 1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, -1px -1px 0 #000000, 1px 0px 0 #000000, 0px 1px 0 #000000, -1px 0px 0 #000000, 0px -1px 0 #000000;
    color: #FFFFFF;
}

.turn{
   width: 300px;
}

.status {
    text-align: center;
    font-size: 100px;
    font-weight: bold;
    margin-top: 30px;
}

@media screen and (max-width: 1000px){

  .status {
        font-size: 20px;
    }

    #trisContainer {
        grid-template-columns: repeat(3, 50px);
        gap: 2px;
    }

    .turn,
    .winner,
    .draw {
        font-size: 8px;
        width: 50px;
    }

}

</style>