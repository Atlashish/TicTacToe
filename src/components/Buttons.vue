<template>
    <div>
      <button id="rstAllButton" @click="resetAll">RESTART</button>
      <button id="resetButton" @click="reset" :class="{ 'disabled-button': nextRoundDisabled }" :disabled="nextRoundDisabled">NEXT ROUND</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nextRoundDisabled: Boolean,
    },
    methods: {

      reset() {
        this.$emit('reset');
      },

      resetAll() {
        this.$emit('resetAll');
      },

    }
  };
  </script>
  
  <style scoped>

#rstAllButton {
    font-size: 30px;
    width: 230px;
    margin-top: 40px;
    margin-right: 10px;
    cursor: pointer;
    border-color: purple;
    border-radius: 5px;
    background-color:#D80032;
    color: white;
}

.disabled-button {
    font-size: 30px;
    width: 230px;
    margin-top: 40px;
    margin-left: 10px;
    cursor: pointer;
    border-color: purple;
    border-radius: 5px;
    background-color: grey;
    color: rgb(108, 102, 102);
}

.disabled-button:hover{
    cursor: default;
}

#resetButton:not([disabled]) {
    font-size: 30px;
    width: 230px;
    margin-top: 40px;
    margin-left: 10px;
    cursor: pointer;
    border-color: purple;
    border-radius: 5px;
    background-color: #39A7FF;
    color: white;
}

#resetButton:not([disabled]):hover{
    cursor: pointer;
    background-color: rgb(0, 102, 142);
}

#resetButton:not([disabled]):active{
    background-color: skyblue;
}

#rstAllButton:hover{
    background-color: rgb(141, 1, 1);
}

#rstAllButton:active{
    background-color: rgb(250, 43, 43);
}

@media screen and (max-width: 1000px){

    .disabled-button,#resetButton:not([disabled]), #rstAllButton {
        font-size: 10px;
        width: 100px;
        margin-top: 20px;
    }

}

</style>
  