<template>
    <div id="titleContainer">
        <div class="victoryCounter">
            🏆 {{ xWinnerCounter }}
        </div>
        <h1 id="title"><span class="blue">TIC</span> <span class="white">TAC</span> <span class="red">TOE</span>
        </h1>
        <div class="victoryCounter">
            {{ yWinnerCounter }} 🏆
        </div>
    </div>
</template>

<script>

export default {
    props: {
        xWinnerCounter: Number,
        yWinnerCounter: Number
    }
};

</script>

<style scoped>

#titleContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;

}

#title {
    font-size: 50px;
    margin-bottom: 60px;
}

.victoryCounter{
    font-size: 50px;
    text-shadow: 1px 1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, -1px -1px 0 #000000, 1px 0px 0 #000000, 0px 1px 0 #000000, -1px 0px 0 #000000, 0px -1px 0 #000000;
    color: #FFFFFF;
}

.blue {
    color: #39A7FF;
    text-shadow: 4px 3px 0 rgb(9, 9, 129);
}

.white {
    color: white;
    text-shadow: 4px 3px 0 rgb(161, 155, 155);
}

.red {
    color: #D80032;
    text-shadow: 4px 3px 0 rgb(90, 8, 8);
}


@media screen and (max-width: 1000px){

    #titleContainer {
        align-items: baseline;
        margin-top: 20px;
    }

    .victoryCounter {
        font-size: 15px;
    }

    #title {
        font-size: 20px;
    }

    .blue {
        text-shadow: 2px 1px 0 rgb(9, 9, 129);
    }

    .white {
        text-shadow: 2px 1px 0 rgb(161, 155, 155);
    }

    .red {
        text-shadow: 2px 1px 0 rgb(90, 8, 8);
    }


}


</style>