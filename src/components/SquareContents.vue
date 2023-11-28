<template>
    <div name="primaryHighlight" class="primaryHighlight" v-if="primaryHighlight">
        <font-awesome-icon icon="chess-rook" class="pieceColor" v-if="this.rook && !this.white"/>
        <font-awesome-icon icon="chess-rook" class="pieceWhite" v-else-if="this.rook && this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceColor" v-else-if="this.knight && !this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceWhite" v-else-if="this.knight && this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceColor" v-else-if="this.bishop && !this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceWhite" v-else-if="this.bishop && this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceColor" v-else-if="this.queen && !this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceWhite" v-else-if="this.queen && this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceColor" v-else-if="this.king && !this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceWhite" v-else-if="this.king && this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceColor" v-else-if="this.pawn && !this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceWhite" v-else-if="this.pawn && this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceHidden" v-else />
    </div>
    <div name="capturableHighlight" class="capturableHighlight" v-else-if="highlight && !emptySquare">
        <font-awesome-icon icon="chess-rook" class="pieceColor" v-if="this.rook && !this.white"/>
        <font-awesome-icon icon="chess-rook" class="pieceWhite" v-else-if="this.rook && this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceColor" v-else-if="this.knight && !this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceWhite" v-else-if="this.knight && this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceColor" v-else-if="this.bishop && !this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceWhite" v-else-if="this.bishop && this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceColor" v-else-if="this.queen && !this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceWhite" v-else-if="this.queen && this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceColor" v-else-if="this.king && !this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceWhite" v-else-if="this.king && this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceColor" v-else-if="this.pawn && !this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceWhite" v-else-if="this.pawn && this.white"/>
    </div>
    <div name="legalMoveIndicator"  v-else-if="highlight && emptySquare">
        <font-awesome-icon icon="circle" class="legalMoveIndicator" />
    </div>
    <div name="piece" v-else>
        <font-awesome-icon icon="chess-rook" class="pieceColor" v-if="this.rook && !this.white"/>
        <font-awesome-icon icon="chess-rook" class="pieceWhite" v-else-if="this.rook && this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceColor" v-else-if="this.knight && !this.white"/>
        <font-awesome-icon icon="chess-knight" class="pieceWhite" v-else-if="this.knight && this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceColor" v-else-if="this.bishop && !this.white"/>
        <font-awesome-icon icon="chess-bishop" class="pieceWhite" v-else-if="this.bishop && this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceColor" v-else-if="this.queen && !this.white"/>
        <font-awesome-icon icon="chess-queen" class="pieceWhite" v-else-if="this.queen && this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceColor" v-else-if="this.king && !this.white"/>
        <font-awesome-icon icon="chess-king" class="pieceWhite" v-else-if="this.king && this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceColor" v-else-if="this.pawn && !this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceWhite" v-else-if="this.pawn && this.white"/>
        <font-awesome-icon icon="chess-pawn" class="pieceHidden" v-else />
    </div>
</template>

<script>

export default {

    data() {
        return {
            pawn: false,
            rook: false,
            knight: false,
            bishop: false,
            queen: false,
            king: false,
            white: true,
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
        setPawn(white) {
            this.clear();
            this.white = white;
            this.pawn = true;
        },
        setRook(white) {
            this.clear();
            this.white = white;
            this.rook = true;
        },
        setKnight(white) {
            this.clear();
            this.white = white;
            this.knight = true;
        },
        setBishop(white) {
            this.clear();
            this.white = white;
            this.bishop = true;
        },
        setQueen(white) {
            this.clear();
            this.white = white;
            this.queen = true;
        },
        setKing(white) {
            this.clear();
            this.white = white;
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
        },
        isWhite() {
            return this.white;
        }
    }
}
</script>

<style>
.pieceColor {
    color: #7700ba;
    height: 40px;
    width: 50px;
    padding-top: 5px;
    opacity: 100%;
}
.pieceWhite{
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