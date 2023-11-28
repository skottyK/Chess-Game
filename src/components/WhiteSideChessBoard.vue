<template>
    <div class="wrapper">
    <div class="chessboard">
        <div name="8" class="row">
            <div name="a" class="squareWhite"><SquareContents ref="a8" @click="onClick('a8')" /></div>
            <div name="b" class="squareColor"><SquareContents ref="b8" @click="onClick('b8')"/></div>
            <div name="c" class="squareWhite"><SquareContents ref="c8" @click="onClick('c8')"/></div>
            <div name="d" class="squareColor"><SquareContents ref="d8" @click="onClick('d8')"/></div>
            <div name="e" class="squareWhite"><SquareContents ref="e8" @click="onClick('e8')"/></div>
            <div name="f" class="squareColor"><SquareContents ref="f8" @click="onClick('f8')"/></div>
            <div name="g" class="squareWhite"><SquareContents ref="g8" @click="onClick('g8')"/></div>
            <div name="h" class="squareColor"><SquareContents ref="h8" @click="onClick('h8')"/></div>
        </div>
        <div name="7" class="row">
            <div name="a" class="squareColor"><SquareContents ref="a7" @click="onClick('a7')" /></div>
            <div name="b" class="squareWhite"><SquareContents ref="b7" @click="onClick('b7')"/></div>
            <div name="c" class="squareColor"><SquareContents ref="c7" @click="onClick('c7')"/></div>
            <div name="d" class="squareWhite"><SquareContents ref="d7" @click="onClick('d7')"/></div>
            <div name="e" class="squareColor"><SquareContents ref="e7" @click="onClick('e7')"/></div>
            <div name="f" class="squareWhite"><SquareContents ref="f7" @click="onClick('f7')"/></div>
            <div name="g" class="squareColor"><SquareContents ref="g7" @click="onClick('g7')"/></div>
            <div name="h" class="squareWhite"><SquareContents ref="h7" @click="onClick('h7')"/></div>
        </div>
        <div name="6" class="row">
            <div name="a" class="squareWhite"><SquareContents ref="a6" @click="onClick('a6')"/></div>
            <div name="b" class="squareColor"><SquareContents ref="b6" @click="onClick('b6')"/></div>
            <div name="c" class="squareWhite"><SquareContents ref="c6" @click="onClick('c6')"/></div>
            <div name="d" class="squareColor"><SquareContents ref="d6" @click="onClick('d6')"/></div>
            <div name="e" class="squareWhite"><SquareContents ref="e6" @click="onClick('e6')"/></div>
            <div name="f" class="squareColor"><SquareContents ref="f6" @click="onClick('f6')"/></div>
            <div name="g" class="squareWhite"><SquareContents ref="g6" @click="onClick('g6')"/></div>
            <div name="h" class="squareColor"><SquareContents ref="h6" @click="onClick('h6')"/></div>
        </div>
        <div name="5" class="row">
            <div name="a" class="squareColor"><SquareContents ref="a5" @click="onClick('a5')"/></div>
            <div name="b" class="squareWhite"><SquareContents ref="b5" @click="onClick('b5')"/></div>
            <div name="c" class="squareColor"><SquareContents ref="c5" @click="onClick('c5')"/></div>
            <div name="d" class="squareWhite"><SquareContents ref="d5" @click="onClick('d5')"/></div>
            <div name="e" class="squareColor"><SquareContents ref="e5" @click="onClick('e5')"/></div>
            <div name="f" class="squareWhite"><SquareContents ref="f5" @click="onClick('f5')"/></div>
            <div name="g" class="squareColor"><SquareContents ref="g5" @click="onClick('g5')"/></div>
            <div name="h" class="squareWhite"><SquareContents ref="h5" @click="onClick('h5')"/></div>
        </div>
        <div name="4" class="row">
            <div name="a" class="squareWhite"><SquareContents ref="a4" @click="onClick('a4')"/></div>
            <div name="b" class="squareColor"><SquareContents ref="b4" @click="onClick('b4')"/></div>
            <div name="c" class="squareWhite"><SquareContents ref="c4" @click="onClick('c4')"/></div>
            <div name="d" class="squareColor"><SquareContents ref="d4" @click="onClick('d4')"/></div>
            <div name="e" class="squareWhite"><SquareContents ref="e4" @click="onClick('e4')"/></div>
            <div name="f" class="squareColor"><SquareContents ref="f4" @click="onClick('f4')"/></div>
            <div name="g" class="squareWhite"><SquareContents ref="g4" @click="onClick('g4')"/></div>
            <div name="h" class="squareColor"><SquareContents ref="h4" @click="onClick('h4')"/></div>
        </div>
        <div name="3" class="row">
            <div name="a" class="squareColor"><SquareContents ref="a3" @click="onClick('a3')"/></div>
            <div name="b" class="squareWhite"><SquareContents ref="b3" @click="onClick('b3')"/></div>
            <div name="c" class="squareColor"><SquareContents ref="c3" @click="onClick('c3')"/></div>
            <div name="d" class="squareWhite"><SquareContents ref="d3" @click="onClick('d3')"/></div>
            <div name="e" class="squareColor"><SquareContents ref="e3" @click="onClick('e3')"/></div>
            <div name="f" class="squareWhite"><SquareContents ref="f3" @click="onClick('f3')"/></div>
            <div name="g" class="squareColor"><SquareContents ref="g3" @click="onClick('g3')"/></div>
            <div name="h" class="squareWhite"><SquareContents ref="h3" @click="onClick('h3')"/></div>
        </div>
        <div name="2" class="row">
            <div name="a" class="squareWhite"><SquareContents ref="a2" @click="onClick('a2')"/></div>
            <div name="b" class="squareColor"><SquareContents ref="b2" @click="onClick('b2')"/></div>
            <div name="c" class="squareWhite"><SquareContents ref="c2" @click="onClick('c2')"/></div>
            <div name="d" class="squareColor"><SquareContents ref="d2" @click="onClick('d2')"/></div>
            <div name="e" class="squareWhite"><SquareContents ref="e2" @click="onClick('e2')"/></div>
            <div name="f" class="squareColor"><SquareContents ref="f2" @click="onClick('f2')"/></div>
            <div name="g" class="squareWhite"><SquareContents ref="g2" @click="onClick('g2')"/></div>
            <div name="h" class="squareColor"><SquareContents ref="h2" @click="onClick('h2')"/></div>
        </div>
        <div name="1" class="row">
            <div name="a" class="squareColor"><SquareContents ref="a1" @click="onClick('a1')"/></div>
            <div name="b" class="squareWhite"><SquareContents ref="b1"   @click="onClick('b1')"/></div>
            <div name="c" class="squareColor"><SquareContents ref="c1" @click="onClick('c1')"/></div>
            <div name="d" class="squareWhite"><SquareContents ref="d1"   @click="onClick('d1')"/></div>
            <div name="e" class="squareColor"><SquareContents ref="e1" @click="onClick('e1')"/></div>
            <div name="f" class="squareWhite"><SquareContents ref="f1"   @click="onClick('f1')"/></div>
            <div name="g" class="squareColor"><SquareContents ref="g1" @click="onClick('g1')"/></div>
            <div name="h" class="squareWhite"><SquareContents ref="h1"   @click="onClick('h1')"/></div>
        </div>
    </div>
        <!-- <div name="OpponentMove" v-if="!this.isItWhiteMove">
            <h2 class="moveText">Opponent To Move</h2>
            <v-progress-linear color="dark-blue" indeterminate :height="6"></v-progress-linear>
        </div> -->
        <div name="ButtonLine" class="row">
            <v-btn @click="changePage">Navigate</v-btn>
        </div>
    </div>
</template>

<script>
import SquareContents from './SquareContents.vue';
import { getMoves } from '../controllers/ChessController.mjs';

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
            isItWhiteMove: false,
            canWhiteQueenCastle: false,
            canWhiteKingCastle: false,
            canColorQueenCastle: false,
            canColorKingCastle: false,
            enPasantAbleSquares: [],
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
            //this.setBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');

            // Testing FEN notations to use
            //this.setBoard('rnbqkbnr/pppppppp/bBBBqppp/qQKKQQ2/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1');
            //this.setBoard('rnbqkbnr/8/pppppppp/8/8/PPPPPPPP/8/RNBQKBNR w KQkq - 0 1');
            //this.setBoard('rnbqkbnr/pqqqbbb/8/qqqq4/8/8/PPPqqPPP/RNBQKBNR w KQkq - 0 1')
            //this.setBoard('Rnbqkbnr/1p1ppppp/r7/2p4R/3PP1P1/8/PPP2P1P/1NBQKBN1 w k - 0 1');
            //console.log(parseBoard('3Q4/8/8/B2r1R2/8/8/3P4/8 w - - 0 1'));
            this.setBoard('1r1rb1k1/q5pp/1p1npn1b/2pp4/3P1N1Q/P7/KPP3B1/3RR3 w - - 0 1');
        },
        setBoard(fen) {
            this.position = fen;
            let splitFen = fen.split(/\/| /); // Regular expression means split at / or a space
            // Parses all 8 rows of pieces
            for (let i = 0; i < 8; i++) {
                let currRank = splitFen[7-i].split('');
                let currLetter = 'a'
                currRank.forEach((x) => {
                    if (x == 'r') this.$refs[currLetter + '' + (i+1)].setRook(false);
                    else if (x == 'R') this.$refs[currLetter + '' + (i+1)].setRook(true);
                    else if (x == 'n') this.$refs[currLetter + '' + (i+1)].setKnight(false);
                    else if (x == 'N') this.$refs[currLetter + '' + (i+1)].setKnight(true);
                    else if (x == 'b') this.$refs[currLetter + '' + (i+1)].setBishop(false);
                    else if (x == 'B') this.$refs[currLetter + '' + (i+1)].setBishop(true);
                    else if (x == 'q') this.$refs[currLetter + '' + (i+1)].setQueen(false);
                    else if (x == 'Q') this.$refs[currLetter + '' + (i+1)].setQueen(true);
                    else if (x == 'k') this.$refs[currLetter + '' + (i+1)].setKing(false);
                    else if (x == 'K') this.$refs[currLetter + '' + (i+1)].setKing(true);
                    else if (x == 'p') this.$refs[currLetter + '' + (i+1)].setPawn(false);
                    else if (x == 'P') this.$refs[currLetter + '' + (i+1)].setPawn(true);
                    else currLetter = String.fromCharCode(currLetter.charCodeAt(0) + Number(x-1)); // x-1 since it will add 1 already
                    currLetter = String.fromCharCode(Number(currLetter.charCodeAt(0) + 1));
                })
            }
            // splitFen[8] = whose move it is
            this.isItWhiteMove = (splitFen[8] == 'w');

            // splitFen[9] = who can castle/where
            if (splitFen[9].includes('q')) this.canColorQueenCastle = true;
            if (splitFen[9].includes('Q')) this.canWhiteQueenCastle = true;
            if (splitFen[9].includes('k')) this.canColorKingCastle = true;
            if (splitFen[9].includes('K')) this.canWhiteKingCastle = true;

            // splitFen[10] = EnPasant takes available or a - if there are none
            this.enPasantAbleSquares = splitFen[10];

            // splitFen[11] = Number of moves since last capture
            this.movesSinceCapture = splitFen[11];

            // splitFen[12] = Number of moves total
            this.moveCount = splitFen[12];
        },
        onClick(e) {
            if (!this.selected) {
                this.selected = true;
                let moves = getMoves(this.position, e);
                moves.forEach((x) => {
                    this.$refs[x].secondaryHighlight();
                });
                this.$refs[e].primaryHighlightSquare();
            } else {
                this.board.forEach((x) => {
                    this.$refs[x].clearHighlight();
                })
                this.selected = false;
            }
        },
        changePage() {
            this.$router.push('/chess');
        },
    }
}
</script>

<style>
.squareWhite {
    width: 50px;
    height: 50px;
    background-color: #FFFFFF;
    margin: auto;
}
.squareColor {
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

.moveText {
    text-align: center;
}
</style>