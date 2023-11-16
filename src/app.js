const { createApp } = Vue;

createApp({
    data() {
        return {
            squares: Array(9).fill(null),
            xIsNext: true,
            turn: 'Your Turn:',
            xWinner: '',
            yWinner: '',
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
                this.$refs.cross.pause
                this.$refs.cross.currentTime = 0
                this.$refs.cross.play()
            } else {
                this.$refs.circle.pause
                this.$refs.circle.currentTime = 0
                this.$refs.circle.play()
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
            this.$refs.rst.pause
            this.$refs.rst.currentTime = 0
            this.$refs.rst.play()

            this.nextRoundDisabled = true
        },
        resetAll() {
            this.squares = Array(9).fill(null);
            this.xIsNext = true;
            this.turn = 'Your Turn:'
            this.xWinner = ''
            this.yWinner = ''
            this.xWinnerCounter = 0
            this.yWinnerCounter = 0
            this.$refs.rstAll.pause
            this.$refs.rstAll.currentTime = 0
            this.$refs.rstAll.play()

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
}).mount("#app");
