<template>
    <Title :xWinnerCounter="xWinnerCounter" :yWinnerCounter="yWinnerCounter" />
    <GameBoard :turn="turn" :xWinner="xWinner" :yWinner="yWinner" :status="status" :squares="squares"
        @handleClick="handleClick" />
    <Buttons :nextRoundDisabled="nextRoundDisabled" @reset="reset" @resetAll="resetAll" />
</template>
  
<script>
import { useSound } from '@vueuse/sound'
import Buttons from './components/Buttons.vue'
import GameBoard from './components/GameBoard.vue'
import Title from './components/Title.vue'

export default {
    components: {
        Buttons,
        GameBoard,
        Title
    },
    setup() {
        const { play: playXSound } = useSound('@/assets/audio/mixkit-arcade-game-jump-coin-216.wav');
        const { play: playOSound } = useSound('@/assets/audio/mixkit-click-melodic-tone-1129.wav');
        const { play: playReset  } = useSound('@/assets/audio/mixkit-game-click-1114.wav')
        const { play: playResetAll  } = useSound('@/assets/audio/mixkit-opening-software-interface-2578.wav')

        return {
      playXSound,
      playOSound,
      playReset,
      playResetAll
    };
    },
    data() {
        return {
            squares: Array(9).fill(null),
            xIsNext: true,
            turn: 'Your Turn:',
            xWinner: '',
            yWinner: '',
            winner: '',
            xWinnerCounter: 0,
            yWinnerCounter: 0,
            nextRoundDisabled: true
        };
    },
    methods: {
        handleClick(index) {
            if (this.squares[index] || this.calculateWinner()) {
                return;
            }

            this.squares[index] = (this.xIsNext ? 'X' : 'O');
            if (this.squares[index] == 'X') {
                this.playXSound();
            } else {
                this.playOSound();
            }

            this.xIsNext = !this.xIsNext;
        },
        calculateWinner() {
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],

                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],

                [0, 4, 8],
                [2, 4, 6],
            ];

            for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (
                    this.squares[a] &&
                    this.squares[a] === this.squares[b] &&
                    this.squares[a] === this.squares[c]
                ) {
                    return this.squares[a];
                }
            }
            return null;
        },
        reset() {
            this.squares = Array(9).fill(null);
            this.xIsNext = true;
            this.turn = 'Your Turn:'
            this.xWinner = ''
            this.yWinner = ''
            this.winner = '',
                this.playReset();

                this.nextRoundDisabled = true
        },
        resetAll() {
            this.squares = Array(9).fill(null);
            this.xIsNext = true;
            this.turn = 'Your Turn:'
            this.xWinner = ''
            this.yWinner = ''
            this.winner = '',
                this.xWinnerCounter = 0
            this.yWinnerCounter = 0
            this.playResetAll();

            this.nextRoundDisabled = true
        }

    },

    computed: {
        status() {
            const winner = this.calculateWinner();

            if (winner) {
                if (winner === 'X') {
                    this.xWinner = 'You Won!'
                    this.yWinner = 'Lost 😢'
                    this.xWinnerCounter++
                } else {
                    this.yWinner = 'You Won!'
                    this.xWinner = 'Lost 😢'
                    this.yWinnerCounter++
                }
                this.turn = ''
                this.nextRoundDisabled = false
                return `${winner}`;
            } else if (this.squares.every(square => square !== null)) {
                this.turn = ''
                this.nextRoundDisabled = false
                return 'Draw!';
            } else {
                return `${this.xIsNext ? 'X' : 'O'}`;
            }
        }
    }
}


</script>
  
<style scoped>
@media screen and (max-width: 1000px) {}
</style>