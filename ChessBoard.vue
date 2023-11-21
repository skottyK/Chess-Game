<!-- eslint-disable -->
<template>
    <div class="chessboard">
        <div name="8" class="row">
            <div name="a" class="squarePrimary"><SquareContents ref="a8" @click="onClick('a8')" /></div>
            <div name="b" class="squareSecondary"><SquareContents ref="b8" @click="onClick('b8')"/></div>
            <div name="c" class="squarePrimary"><SquareContents ref="c8" @click="onClick('c8')"/></div>
            <div name="d" class="squareSecondary"><SquareContents ref="d8" @click="onClick('d8')"/></div>
            <div name="e" class="squarePrimary"><SquareContents ref="e8" @click="onClick('e8')"/></div>
            <div name="f" class="squareSecondary"><SquareContents ref="f8" @click="onClick('f8')"/></div>
            <div name="g" class="squarePrimary"><SquareContents ref="g8" @click="onClick('g8')"/></div>
            <div name="h" class="squareSecondary"><SquareContents ref="h8" @click="onClick('h8')"/></div>
        </div>
        <div name="7" class="row">
            <div name="a" class="squareSecondary"><SquareContents ref="a7" @click="onClick('a7')" /></div>
            <div name="b" class="squarePrimary"><SquareContents ref="b7" @click="onClick('b7')"/></div>
            <div name="c" class="squareSecondary"><SquareContents ref="c7" @click="onClick('c7')"/></div>
            <div name="d" class="squarePrimary"><SquareContents ref="d7" @click="onClick('d7')"/></div>
            <div name="e" class="squareSecondary"><SquareContents ref="e7" @click="onClick('e7')"/></div>
            <div name="f" class="squarePrimary"><SquareContents ref="f7" @click="onClick('f7')"/></div>
            <div name="g" class="squareSecondary"><SquareContents ref="g7" @click="onClick('g7')"/></div>
            <div name="h" class="squarePrimary"><SquareContents ref="h7" @click="onClick('h7')"/></div>
        </div>
        <div name="6" class="row">
            <div name="a" class="squarePrimary"><SquareContents ref="a6" @click="onClick('a6')"/></div>
            <div name="b" class="squareSecondary"><SquareContents ref="b6" @click="onClick('b6')"/></div>
            <div name="c" class="squarePrimary"><SquareContents ref="c6" @click="onClick('c6')"/></div>
            <div name="d" class="squareSecondary"><SquareContents ref="d6" @click="onClick('d6')"/></div>
            <div name="e" class="squarePrimary"><SquareContents ref="e6" @click="onClick('e6')"/></div>
            <div name="f" class="squareSecondary"><SquareContents ref="f6" @click="onClick('f6')"/></div>
            <div name="g" class="squarePrimary"><SquareContents ref="g6" @click="onClick('g6')"/></div>
            <div name="h" class="squareSecondary"><SquareContents ref="h6" @click="onClick('h6')"/></div>
        </div>
        <div name="5" class="row">
            <div name="a" class="squareSecondary"><SquareContents ref="a5" @click="onClick('a5')"/></div>
            <div name="b" class="squarePrimary"><SquareContents ref="b5" @click="onClick('b5')"/></div>
            <div name="c" class="squareSecondary"><SquareContents ref="c5" @click="onClick('c5')"/></div>
            <div name="d" class="squarePrimary"><SquareContents ref="d5" @click="onClick('d5')"/></div>
            <div name="e" class="squareSecondary"><SquareContents ref="e5" @click="onClick('e5')"/></div>
            <div name="f" class="squarePrimary"><SquareContents ref="f5" @click="onClick('f5')"/></div>
            <div name="g" class="squareSecondary"><SquareContents ref="g5" @click="onClick('g5')"/></div>
            <div name="h" class="squarePrimary"><SquareContents ref="h5" @click="onClick('h5')"/></div>
        </div>
        <div name="4" class="row">
            <div name="a" class="squarePrimary"><SquareContents ref="a4" @click="onClick('a4')"/></div>
            <div name="b" class="squareSecondary"><SquareContents ref="b4" @click="onClick('b4')"/></div>
            <div name="c" class="squarePrimary"><SquareContents ref="c4" @click="onClick('c4')"/></div>
            <div name="d" class="squareSecondary"><SquareContents ref="d4" @click="onClick('d4')"/></div>
            <div name="e" class="squarePrimary"><SquareContents ref="e4" @click="onClick('e4')"/></div>
            <div name="f" class="squareSecondary"><SquareContents ref="f4" @click="onClick('f4')"/></div>
            <div name="g" class="squarePrimary"><SquareContents ref="g4" @click="onClick('g4')"/></div>
            <div name="h" class="squareSecondary"><SquareContents ref="h4" @click="onClick('h4')"/></div>
        </div>
        <div name="3" class="row">
            <div name="a" class="squareSecondary"><SquareContents ref="a3" @click="onClick('a3')"/></div>
            <div name="b" class="squarePrimary"><SquareContents ref="b3" @click="onClick('b3')"/></div>
            <div name="c" class="squareSecondary"><SquareContents ref="c3" @click="onClick('c3')"/></div>
            <div name="d" class="squarePrimary"><SquareContents ref="d3" @click="onClick('d3')"/></div>
            <div name="e" class="squareSecondary"><SquareContents ref="e3" @click="onClick('e3')"/></div>
            <div name="f" class="squarePrimary"><SquareContents ref="f3" @click="onClick('f3')"/></div>
            <div name="g" class="squareSecondary"><SquareContents ref="g3" @click="onClick('g3')"/></div>
            <div name="h" class="squarePrimary"><SquareContents ref="h3" @click="onClick('h3')"/></div>
        </div>
        <div name="2" class="row">
            <div name="a" class="squarePrimary"><SquareContents ref="a2" @click="onClick('a2')"/></div>
            <div name="b" class="squareSecondary"><SquareContents ref="b2" @click="onClick('b2')"/></div>
            <div name="c" class="squarePrimary"><SquareContents ref="c2" @click="onClick('c2')"/></div>
            <div name="d" class="squareSecondary"><SquareContents ref="d2" @click="onClick('d2')"/></div>
            <div name="e" class="squarePrimary"><SquareContents ref="e2" @click="onClick('e2')"/></div>
            <div name="f" class="squareSecondary"><SquareContents ref="f2" @click="onClick('f2')"/></div>
            <div name="g" class="squarePrimary"><SquareContents ref="g2" @click="onClick('g2')"/></div>
            <div name="h" class="squareSecondary"><SquareContents ref="h2" @click="onClick('h2')"/></div>
        </div>
        <div name="1" class="row">
            <div name="a" class="squareSecondary"><SquareContents ref="a1" @click="onClick('a1')"/></div>
            <div name="b" class="squarePrimary"><SquareContents ref="b1"   @click="onClick('b1')"/></div>
            <div name="c" class="squareSecondary"><SquareContents ref="c1" @click="onClick('c1')"/></div>
            <div name="d" class="squarePrimary"><SquareContents ref="d1"   @click="onClick('d1')"/></div>
            <div name="e" class="squareSecondary"><SquareContents ref="e1" @click="onClick('e1')"/></div>
            <div name="f" class="squarePrimary"><SquareContents ref="f1"   @click="onClick('f1')"/></div>
            <div name="g" class="squareSecondary"><SquareContents ref="g1" @click="onClick('g1')"/></div>
            <div name="h" class="squarePrimary"><SquareContents ref="h1"   @click="onClick('h1')"/></div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import SquareContents from './SquareContents.vue';

export default {

    components: {
        SquareContents,
    },
    data() {
        return {
            board: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 
            'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 
            'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8'],
            position: '',
            positionArray: [],
            selected: false,
            moveCount: 0,
            movesSinceCapture: 0,
        }
    },
    computed: {
        filteredNames() {
            return "apple";
        }
    },
    mounted() {
        // Will eventually be API call to get position of current game ID
        this.resetBoard();
    },
    methods: {
        resetBoard() {
            // Starting FEN notation
            this.setBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
        },
        setBoard(fen) {
            this.position = fen;
            let splitFen = fen.split(/\/| /); // Regular expression means split at / or a space
            // Parses all 8 rows of pieces
            for (let i = 0; i < 8; i++) {
                let currRank = splitFen[i].split('');
                this.positionArray.push(currRank);
                let currLetter = 'a'
                currRank.forEach((x) => {
                    if (x == 'r') this.$refs[currLetter + '' + (i+1)].setRook(true);
                    else if (x == 'R') this.$refs[currLetter + '' + (i+1)].setRook(false);
                    else if (x == 'n') this.$refs[currLetter + '' + (i+1)].setKnight(true);
                    else if (x == 'N') this.$refs[currLetter + '' + (i+1)].setKnight(false);
                    else if (x == 'b') this.$refs[currLetter + '' + (i+1)].setBishop(true);
                    else if (x == 'B') this.$refs[currLetter + '' + (i+1)].setBishop(false);
                    else if (x == 'q') this.$refs[currLetter + '' + (i+1)].setQueen(true);
                    else if (x == 'Q') this.$refs[currLetter + '' + (i+1)].setQueen(false);
                    else if (x == 'k') this.$refs[currLetter + '' + (i+1)].setKing(true);
                    else if (x == 'K') this.$refs[currLetter + '' + (i+1)].setKing(false);
                    else if (x == 'p') this.$refs[currLetter + '' + (i+1)].setPawn(true);
                    else if (x == 'P') this.$refs[currLetter + '' + (i+1)].setPawn(false);
                    else currLetter = String.fromCharCode(currLetter.charCodeAt(0) + x)
                    currLetter = String.fromCharCode(currLetter.charCodeAt(0) + 1);
                })
            }
            // splitFen[8] = whose move it is
            // splitFen[9] = who can castle/where
            // splitFen[10] = EnPasant takes available or a - if there are none
            // splitFen[11] = Number of moves since last capture
            // splitFen[12] = Number of moves total
            console.log(this.positionArray);
        },
        onClick(e) {
            if (!this.selected) {
                this.$refs[e].primaryHighlightSquare();
                this.board.forEach((x) => {
                    if (x !== e) this.$refs[x].secondaryHighlight();
                });
                this.selected = true;
        } else {
          this.board.forEach((x) => {
          this.$refs[x].clearHighlight();
        })
        this.selected = false
      }
    }
  }
}
</script>

<style>
/* eslint-disable */
.squarePrimary {
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    margin: auto;
}
.squareSecondary {
    width: 50px;
    height: 50px;
    background-color: #d590fc;
    margin: auto;
}
.row {
    display: flex;
}
.chessboard {
    border-width: 2.5px;
    border-color: #000000;
    border-style: solid;
}
</style>
