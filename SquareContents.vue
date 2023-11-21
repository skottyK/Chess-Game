<!-- eslint-disable -->
<template>
    <div name="squareContents" class="primaryHighlight" v-if="primaryHighlight">
        <font-awesome-icon icon="chess-rook" class="piecePrimary" v-if="this.rook && this.primary"/>
        <font-awesome-icon icon="chess-rook" class="pieceSecondary" v-else-if="this.rook && !this.primary"/>
        <font-awesome-icon icon="chess-knight" class="piecePrimary" v-else-if="this.knight && this.primary"/>
        <font-awesome-icon icon="chess-knight" class="pieceSecondary" v-else-if="this.knight && !this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="piecePrimary" v-else-if="this.bishop && this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="pieceSecondary" v-else-if="this.bishop && !this.primary"/>
        <font-awesome-icon icon="chess-queen" class="piecePrimary" v-else-if="this.queen && this.primary"/>
        <font-awesome-icon icon="chess-queen" class="pieceSecondary" v-else-if="this.queen && !this.primary"/>
        <font-awesome-icon icon="chess-king" class="piecePrimary" v-else-if="this.king && this.primary"/>
        <font-awesome-icon icon="chess-king" class="pieceSecondary" v-else-if="this.king && !this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="piecePrimary" v-else-if="this.pawn && this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="pieceSecondary" v-else-if="this.pawn && !this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="pieceHidden" v-else />
    </div>
    <div name="squareContents" class="capturableHighlight" v-else-if="highlight && !emptySquare">
        <font-awesome-icon icon="chess-rook" class="piecePrimary" v-if="this.rook && this.primary"/>
        <font-awesome-icon icon="chess-rook" class="pieceSecondary" v-else-if="this.rook && !this.primary"/>
        <font-awesome-icon icon="chess-knight" class="piecePrimary" v-else-if="this.knight && this.primary"/>
        <font-awesome-icon icon="chess-knight" class="pieceSecondary" v-else-if="this.knight && !this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="piecePrimary" v-else-if="this.bishop && this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="pieceSecondary" v-else-if="this.bishop && !this.primary"/>
        <font-awesome-icon icon="chess-queen" class="piecePrimary" v-else-if="this.queen && this.primary"/>
        <font-awesome-icon icon="chess-queen" class="pieceSecondary" v-else-if="this.queen && !this.primary"/>
        <font-awesome-icon icon="chess-king" class="piecePrimary" v-else-if="this.king && this.primary"/>
        <font-awesome-icon icon="chess-king" class="pieceSecondary" v-else-if="this.king && !this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="piecePrimary" v-else-if="this.pawn && this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="pieceSecondary" v-else-if="this.pawn && !this.primary"/>
    </div>
    <div name="squareContents" v-else-if="highlight && emptySquare">
        <font-awesome-icon icon="circle" class="legalMoveIndicator" />
    </div>
    <div name="squareContents" v-else>
        <font-awesome-icon icon="chess-rook" class="piecePrimary" v-if="this.rook && this.primary"/>
        <font-awesome-icon icon="chess-rook" class="pieceSecondary" v-else-if="this.rook && !this.primary"/>
        <font-awesome-icon icon="chess-knight" class="piecePrimary" v-else-if="this.knight && this.primary"/>
        <font-awesome-icon icon="chess-knight" class="pieceSecondary" v-else-if="this.knight && !this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="piecePrimary" v-else-if="this.bishop && this.primary"/>
        <font-awesome-icon icon="chess-bishop" class="pieceSecondary" v-else-if="this.bishop && !this.primary"/>
        <font-awesome-icon icon="chess-queen" class="piecePrimary" v-else-if="this.queen && this.primary"/>
        <font-awesome-icon icon="chess-queen" class="pieceSecondary" v-else-if="this.queen && !this.primary"/>
        <font-awesome-icon icon="chess-king" class="piecePrimary" v-else-if="this.king && this.primary"/>
        <font-awesome-icon icon="chess-king" class="pieceSecondary" v-else-if="this.king && !this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="piecePrimary" v-else-if="this.pawn && this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="pieceSecondary" v-else-if="this.pawn && !this.primary"/>
        <font-awesome-icon icon="chess-pawn" class="pieceHidden" v-else />
    </div>
</template>

<script>
/* eslint-disable */
export default {

    data() {
        return {
            pawn: false,
            rook: false,
            knight: false,
            bishop: false,
            queen: false,
            king: false,
            primary: true,
            highlight: false,
            primaryHighlight: false
        }
    },
    computed: {
        emptySquare() {
            return !(this.pawn || this.rook || this.knight || this.bishop || this.queen || this.king);
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        clear() {
            this.pawn = false;
            this.rook = false;
            this.knight = false;
            this.bishop = false;
            this.queen = false;
            this.king = false;
            this.highlight = false;
        },
        setPawn(primary) {
            this.clear();
            this.primary = primary;
            this.pawn = true;
        },
        setRook(primary) {
            this.clear();
            this.primary = primary;
            this.rook = true;
        },
        setKnight(primary) {
            this.clear();
            this.primary = primary;
            this.knight = true;
        },
        setBishop(primary) {
            this.clear();
            this.primary = primary;
            this.bishop = true;
        },
        setQueen(primary) {
            this.clear();
            this.primary = primary;
            this.queen = true;
        },
        setKing(primary) {
            this.clear();
            this.primary = primary;
            this.king = true;
        },
        primaryHighlightSquare() {
            this.primaryHighlight = true;
        },
        secondaryHighlight() {
            this.highlight = true;
        },
        clearHighlight() {
            this.highlight = false;
            this.primaryHighlight = false;
        }
    }
}
</script>

<style>
.piecePrimary {
    color: #7700ba;
    height: 40px;
    width: 50px;
    padding-top: 5px;
    opacity: 100%;
}
.pieceSecondary{
    color: #c9c9c9;
    height: 40px;
    width: 50px;
    padding-top: 5px;
    opacity: 100%;
}
.pieceHidden {
    color: #a5b20d;
    height: 40px;
    width: 50px;
    padding-top: 5px;
    opacity: 0%;
}
.primaryHighlight {
    background-color: #51a8f5;
    height: 50px;
    width: 50px;
    opacity: 100%;
}
.capturableHighlight {
    background-color: #430b75;
    height: 50px;
    width: 50px;
    opacity: 100%;
}
.legalMoveIndicator {
    color: #878787;
    height: 15px;
    width: 15px;
    padding-top: 17.5px;
    padding-left: 17.5px;
    opacity: 100%;
}
</style>
