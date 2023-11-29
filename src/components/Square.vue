<template>
    <div class="square" @click="handleClick" :style="squareStyle">
      <h1 id="symbol">{{ value }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: String,
    },
    
    methods: {
      handleClick() {
        this.$emit('click');
      },
    },
    computed: {
      squareStyle() {
        return {
          'color': this.value === 'X' ? '#39A7FF' : '#D80032',
          'text-shadow': this.value === 'X' ? '0 0 10px #39A7FF' : '0 0 10px #D80032',
        };
      },
    },
  };
  </script>
  
  <style scoped>
.square {
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 125px;
    height: 125px;
    font-size: 30px;
    cursor: pointer;
    border: 1px solid black;
    background-color: purple;
    border-radius: 5px;
}

.square:hover #symbol {
    transform: scale(1.5);
    transition: transform 0.5s;
}

.square:hover {
    background-color: rgb(203, 122, 203);
}  

@media screen and (max-width: 1000px){

  .square {
        width: 50px;
        height: 50px;
        font-size: 10px;
    }

}

</style>