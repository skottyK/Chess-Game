// Example fen position: '1kr3nr/ppp1p3/2np1p1b/2qP3p/4PBbP/1P1B4/P1P5/1K1RQ1NR w - - 0 1'
/**
 * Converts from a fen string to a 2d array with empty squares as ''
 * @param {string} fenPosition  the position to parse
 * @returns {[Number][Number]} an array which can be accessed by [row][column]
 */
export function parseBoard(fenPosition) {
    let positionArray = [];
    let splitFen = fenPosition.split(/\/| /);
    for (let i = 0; i < 8; i++) {
        let row = [];
        let fenRow = splitFen[7-i].split('');
        for (let j = 0; j < fenRow.length; j++) {
            if (isNaN(fenRow[j])) { // Not a number
                row.push(fenRow[j])
            } else { // Case where it's a number
                for (let k = 0; k < Number(fenRow[j]); k++) {
                    row.push('');
                }
            }
        }
        positionArray.push(row);
    }
    return positionArray;
}

/**
 * Convert from 2d array to a fen position
 * @param {[String][String]} array an array organized by [row][column]
 * @return {string} the board setup section of a fen string
 */
export function arrayToFenPosition(array) {
    let fenString = '';
    for (let row = 7; row >= 0; row--) {
        let rowString = '';
        let currEmptyCount = 0;
        for (let col = 0; col < 8; col++) {
            if (array[row][col] === '') {
                currEmptyCount += 1;
            } else {
                if (currEmptyCount > 0) rowString = rowString + currEmptyCount;
                currEmptyCount = 0;
                rowString = rowString + array[row][col];
            }
        }
        if (currEmptyCount > 0) {
            rowString = rowString + currEmptyCount;
            currEmptyCount = 0;
        }
        if (row > 0) fenString = fenString + rowString + '/';
        else fenString = fenString + rowString;
    }
    return fenString;
}

/**
 * Parses fen notation and square given to identify all legal moves from given square
 * @param {string} fenPosition current board position
 * @param {string} square the square to identify legal moves for
 * @returns {[string]} a list of legal moves listed in chess notation (e.g. a1, a2, b2, ...)
 */
export function getMoves(fenPosition, square) {
    // Convert square to indexes
    let indexNotation = convertNotationToIndex(square);
    let rowIndex = indexNotation[0];
    let colIndex = indexNotation[1];
    let positionArray = parseBoard(fenPosition);
    let piece = positionArray[rowIndex][colIndex];
    // From here, we have parsed the piece, now we look for legal getMoves
    let legalMoves = [];
    switch(piece) {
        case "p": 
            legalMoves = legalMoves.concat(getPawnMoves(positionArray, rowIndex, colIndex, true, fenPosition));
            break;
        case "P": 
            legalMoves = legalMoves.concat(getPawnMoves(positionArray, rowIndex, colIndex, false, fenPosition));
            break;
        case "r": 
            legalMoves = legalMoves.concat(getRookMoves(positionArray, rowIndex, colIndex, true));
            break;
        case "R": 
            legalMoves = legalMoves.concat(getRookMoves(positionArray, rowIndex, colIndex, false));
            break;
        case "n": 
            legalMoves = legalMoves.concat(getKnightMoves(positionArray, rowIndex, colIndex, true));
            break;
        case "N": 
            legalMoves = legalMoves.concat(getKnightMoves(positionArray, rowIndex, colIndex, false));
            break;
        case "b": 
            legalMoves = legalMoves.concat(getBishopMoves(positionArray, rowIndex, colIndex, true));
            break;
        case "B": 
            legalMoves = legalMoves.concat(getBishopMoves(positionArray, rowIndex, colIndex, false));
            break;
        case "q": 
            legalMoves = legalMoves.concat(getBishopMoves(positionArray, rowIndex, colIndex, true), getRookMoves(positionArray, rowIndex, colIndex, true));
            break;
        case "Q": 
            legalMoves = legalMoves.concat(getBishopMoves(positionArray, rowIndex, colIndex, false), getRookMoves(positionArray, rowIndex, colIndex, false));
            break;
        case "k":    
            legalMoves = legalMoves.concat(getKingMoves(positionArray, rowIndex, colIndex, true, fenPosition));
            break;
        case "K": 
            legalMoves = legalMoves.concat(getKingMoves(positionArray, rowIndex, colIndex, false, fenPosition));
            break;
        default: 
            return [];
    }
    return legalMoves;
}

/**
 * Computes a list of legal moves that a pawn can make
 * @param {[Number][Number]} board 2d array representing the board
 * @param {Number} rowIndex index of the row that the pawn is in
 * @param {Number} colIndex index of the col that the pawn is in
 * @param {boolean} isLowerCase boolean representing if the pawn is lowercase (black) or uppercase (white)
 * @param {String} fenPosition the fen position of the board used to parse possible en pasant moves
 * @return {[String]} list of moves the pawn can make except for en pasant for now...
 */
export function getPawnMoves(positionArray, rowIndex, colIndex, isPieceLowerCase, fenPosition) {
    let legalMoves = [];
    let enPasantTarget = fenPosition.split(/\/| /)[10];
    if (isPieceLowerCase) {
        // black side pawn can move -1 row or -2 if in row 7
        // double move forward check
        if (rowIndex == '6' && positionArray[rowIndex-1][colIndex] === '' && positionArray[rowIndex-2][colIndex] === '') {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-2, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex-2, colIndex));
        }
        // single move forward check
        if (rowIndex-1 >= 0 && positionArray[rowIndex-1][colIndex] === '') {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex));
        }
        // capture check
        if (rowIndex-1 >= 0 && colIndex-1 >= 0 && positionArray[rowIndex-1][colIndex-1] !== '' && !isLowerCase(positionArray[rowIndex-1][colIndex-1])) {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex-1));
        }
        if (rowIndex-1 >= 0 && colIndex+1 <= 7 && positionArray[rowIndex-1][colIndex+1] !== '' && !isLowerCase(positionArray[rowIndex-1][colIndex+1])) {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex+1));
        }
        // TODO NOT EMPTY
        if (rowIndex === 3 && enPasantTarget !== '-') {
            // Possible en pasant, check the squares
            let enPasantColIndex = convertNotationToIndex(enPasantTarget)[1];
            if (enPasantColIndex + 1 === colIndex || enPasantColIndex - 1 === colIndex) legalMoves.push(enPasantTarget);
        }
    } else {
        // white side pawn can move +1 row or +2 if in row 2
        // double move forward check
        if (rowIndex == '1' && positionArray[rowIndex+1][colIndex] === '' && positionArray[rowIndex+2][colIndex] === '') {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+2, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex+2, colIndex)); 
        }
        // single move forward check
        if (rowIndex+1 <= 7 && positionArray[rowIndex+1][colIndex] === '') {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex));
        }
        // capture check
        if (rowIndex+1 <= 7 && colIndex-1 >= 0 && positionArray[rowIndex+1][colIndex-1] !== '' && isLowerCase(positionArray[rowIndex+1][colIndex-1])) {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex-1));
        }
        if (rowIndex+1 <= 7 && colIndex+1 <= 7 && positionArray[rowIndex+1][colIndex+1] !== '' && isLowerCase(positionArray[rowIndex+1][colIndex+1])) {
            if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex+1));
        }
        if (rowIndex === 4 && enPasantTarget !== '-') {
            // Possible en pasant, check the squares
            let enPasantColIndex = convertNotationToIndex(enPasantTarget)[1];
            if (enPasantColIndex + 1 === colIndex || enPasantColIndex - 1 === colIndex) legalMoves.push(enPasantTarget);
        }
    }
    return legalMoves;
}

/**
 * Computes a list of legal moves that a bishop can make
 * @param {[Number][Number]} board 2d array representing the board
 * @param {Number} rowIndex index of the row that the bishop is in
 * @param {Number} colIndex index of the col that the bishop is in
 * @param {boolean} isLowerCase boolean representing if the bishop is lowercase (black) or uppercase (white)
 * @return {[String]} list of moves
 */
export function getBishopMoves(positionArray, rowIndex, colIndex, isPieceLowerCase) {
    let increment = 1;
    let legalMoves = [];
    // + row + col
    while (rowIndex+increment <= 7 && colIndex+increment <= 7 && positionArray[rowIndex+increment][colIndex+increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex+increment));
        increment += 1;
    }
    if (rowIndex+increment <= 7 && colIndex+increment <=7 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+increment][colIndex+increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex+increment));
    }
    // + row - col
    increment = 1;
    while (rowIndex+increment <= 7 && colIndex-increment >= 0 && positionArray[rowIndex+increment][colIndex-increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex-increment));
        increment += 1;
    }
    if (rowIndex+increment <= 7 && colIndex-increment >= 0 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+increment][colIndex-increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex-increment));
    }
    // - row + col
    increment = 1;
    while (rowIndex-increment >= 0 && colIndex+increment <= 7 && positionArray[rowIndex-increment][colIndex+increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex+increment));
        increment += 1;
    }
    if (rowIndex-increment >= 0 && colIndex+increment <= 7 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-increment][colIndex+increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex+increment));
    }
    // - row - col
    increment = 1;
    while (rowIndex-increment >= 0 && colIndex-increment >= 0 && positionArray[rowIndex-increment][colIndex-increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex-increment));
        increment += 1;
    }
    if (rowIndex-increment >= 0 && colIndex-increment >= 0 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-increment][colIndex-increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex-increment));
    }
    return legalMoves;
}

/**
 * Computes a list of legal moves that a knight can make
 * @param {[Number][Number]} board 2d array representing the board
 * @param {Number} rowIndex index of the row that the knight is in
 * @param {Number} colIndex index of the col that the knight is in
 * @param {boolean} isLowerCase boolean representing if the knight is lowercase (black) or uppercase (white)
 * @return {[String]} list of moves the knight can make
 */
export function getKnightMoves(positionArray, rowIndex, colIndex, isPieceLowerCase) {
    let legalMoves = [];
    // -2 row +1 col
    if (rowIndex-2 >= 0 && colIndex+1 <= 7 && (positionArray[rowIndex-2][colIndex+1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-2][colIndex+1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-2, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex-2, colIndex+1));
    }
    // -2 row -1 col
    if (rowIndex-2 >= 0 && colIndex-1 >= 0 && (positionArray[rowIndex-2][colIndex-1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-2][colIndex-1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-2, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex-2, colIndex-1));
    }
    // +2 row +1 col
    if (rowIndex+2 <= 7 && colIndex+1 <= 7 && (positionArray[rowIndex+2][colIndex+1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+2][colIndex+1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+2, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex+2, colIndex+1));
    }
    // +2 row -1 col
    if (rowIndex+2 <= 7 && colIndex-1 >= 0 && (positionArray[rowIndex+2][colIndex-1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+2][colIndex-1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+2, colIndex-1))legalMoves.push(convertIndexToNotation(rowIndex+2, colIndex-1));
    }
    // -1 row +2 col
    if (rowIndex-1 >= 0 && colIndex+2 <= 7 && (positionArray[rowIndex-1][colIndex+2] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-1][colIndex+2])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex+2)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex+2));
    }
    // -1 row -2 col
    if (rowIndex-1 >= 0 && colIndex-2 >= 0 && (positionArray[rowIndex-1][colIndex-2] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-1][colIndex-2])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex-2)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex-2));
    }
    // +1 row +2 col
    if (rowIndex+1 <= 7 && colIndex+2 <= 7 && (positionArray[rowIndex+1][colIndex+2] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+1][colIndex+2])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex+2)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex+2));
    }
    // +1 row -2 col
    if (rowIndex+1 <= 7 && colIndex-2 >= 0 && (positionArray[rowIndex+1][colIndex-2] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+1][colIndex-2])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex-2)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex-2));
    }

    return legalMoves;
}

/**
 * Computes a list of legal moves that a rook can make
 * @param {[Number][Number]} board 2d array representing the board
 * @param {Number} rowIndex index of the row that the rook is in and can move along
 * @param {Number} colIndex index of the col that the rook is in and can move along
 * @param {boolean} isLowerCase boolean representing if the rook is lowercase (black) or uppercase (white)
 * @return {[String]} list of moves the rook can make
 */
export function getRookMoves(positionArray, rowIndex, colIndex, isPieceLowerCase) {
    let legalMoves = [];
    // vertical + direction
    let increment = 1;
    while (rowIndex+increment <= 7 && positionArray[rowIndex+increment][colIndex] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex));
        increment += 1;
    }
    if (rowIndex+increment <= 7 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+increment][colIndex]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+increment, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex+increment, colIndex));
    }
    // vertical - direction
    increment = 1;
    while (rowIndex-increment >= 0 && positionArray[rowIndex-increment][colIndex] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex));
        increment += 1;
    }
    if (rowIndex-increment >= 0 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-increment][colIndex]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-increment, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex-increment, colIndex));
    }
    // horizontal + direction
    increment = 1;
    while (colIndex + increment <= 7 && positionArray[rowIndex][colIndex+increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex+increment));
        increment += 1;
    }
    if (colIndex + increment <= 7 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex][colIndex+increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex+increment)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex+increment));
    }
    // horizontal - direction
    increment = 1;
    while (colIndex - increment >= 0 && positionArray[rowIndex][colIndex-increment] === '') {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex-increment));
        increment += 1;
    }
    if (colIndex - increment >= 0 && !(isPieceLowerCase === isLowerCase(positionArray[rowIndex][colIndex-increment]))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex-increment)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex-increment));
    }
    return legalMoves;
}

/**
 * Parses the board based on a given king piece to determine the list of legal moves for the king
 * @param {[Number][Number]} positionArray an array [row][col] representing the board
 * @param {Number} rowIndex the index in the positionarray of the row
 * @param {Number} colIndex the index in the positionarray of the column
 * @param {boolean} isPieceLowerCase boolean for if the piece is lowercase (black) or uppercase (white)
 * @param {string} fenPosition fen position of the board used to determing if castling is possible
 * @return {[string]} the list of legal moves for the king
 */
export function getKingMoves(positionArray, rowIndex, colIndex, isPieceLowerCase, fenPosition) {
    let legalMoves = [];
    // +row =col
    if (rowIndex+1 <= 7 && (positionArray[rowIndex+1][colIndex] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+1][colIndex])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex));
    }
    // +row +col
    if (rowIndex+1 <= 7 && colIndex+1 <= 7 && (positionArray[rowIndex+1][colIndex+1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+1][colIndex+1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex+1));
    }
    // +row -col
    if (rowIndex+1 <= 7 && colIndex-1 >= 0 && (positionArray[rowIndex+1][colIndex-1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex+1][colIndex-1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex+1, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex+1, colIndex-1));
    }
    // =row +col
    if (colIndex+1 <= 7 && (positionArray[rowIndex][colIndex+1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex][colIndex+1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex+1));
    }
    // =row -col
    if (colIndex-1 >= 0 && (positionArray[rowIndex][colIndex-1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex][colIndex-1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex, colIndex-1));
    }
    // -row +col
    if (rowIndex-1 >= 0 && colIndex+1 <= 7 && (positionArray[rowIndex-1][colIndex+1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-1][colIndex+1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex+1)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex+1));
    }
    // -row -col
    if (rowIndex-1 >= 0 && colIndex-1 >= 0 && (positionArray[rowIndex-1][colIndex-1] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-1][colIndex-1])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex-1)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex-1));
    }
    // -row =col
    if (rowIndex-1 >= 0 && (positionArray[rowIndex-1][colIndex] === '' || !(isPieceLowerCase === isLowerCase(positionArray[rowIndex-1][colIndex])))) {
        if (checkLegalMove(positionArray, !isPieceLowerCase, rowIndex, colIndex, rowIndex-1, colIndex)) legalMoves.push(convertIndexToNotation(rowIndex-1, colIndex));
    }

    let castleOptions = fenPosition.split(/\/| /)[9];
    // now check for castling
    if (isPieceLowerCase) {
        if (castleOptions.includes('k') && positionArray[7][6] === '' && positionArray[7][5] === '' && canCastleLegally(positionArray, false, true)) legalMoves.push('g8');
        if (castleOptions.includes('q') && positionArray[7][1] === '' && positionArray[7][2] === '' && positionArray[7][3] === '' && canCastleLegally(positionArray, false, false)) legalMoves.push('c8');
    } else {
        if (castleOptions.includes('K') && positionArray[0][6] === '' && positionArray[0][5] === '' && canCastleLegally(positionArray, true, true)) legalMoves.push('g1');
        if (castleOptions.includes('Q') && positionArray[0][1] === '' && positionArray[0][2] === '' && positionArray[0][3] === '' && canCastleLegally(positionArray, true, false)) legalMoves.push('c1');
    }
    return legalMoves;
}

/**
 * Given a fen position and a piece to move from one square to another, update the fen position
 * @param {String} fenPosition 
 * @param {String} oldSquare 
 * @param {String} moveToSquare 
 * @return {String} the updated fen position with the given piece moved
 */
export function move(fenPosition, oldSquare, moveToSquare) {
    let splitFen = fenPosition.split(' ');
    let positionArray = parseBoard(fenPosition);
    let oldPos = convertNotationToIndex(oldSquare);
    let oldRow = oldPos[0];
    let oldCol = oldPos[1];
    let newPos = convertNotationToIndex(moveToSquare);
    let newRow = newPos[0];
    let newCol = newPos[1];
    let pieceMoved = positionArray[oldRow][oldCol];
    let pieceTaken = positionArray[newRow][newCol];

    // Move
    positionArray[newRow][newCol] = positionArray[oldRow][oldCol];
    positionArray[oldRow][oldCol] = '';

    // Special case - En Pasant
    if (pieceMoved === 'p' && oldCol !== newCol && pieceTaken === '') {
        // En Pasant just happened, with black taking a white piece
        positionArray[newRow+1][newCol] = '';
    } else if (pieceMoved === 'P' && oldCol !== newCol && pieceTaken === '') {
        // En pasant just happened with white taking a black piece
        positionArray[newRow-1][newCol] = '';
    }
    
    // Special case - Castle
    if (pieceMoved === 'k') {
        if (splitFen[2].includes('q') && newRow === 7 && newCol === 2) {
            // Move rook
            positionArray[7][3] = positionArray[7][0];
            positionArray[7][0] = '';
        } else if (splitFen[2].includes('k') && newRow === 7 && newCol === 6) {
            positionArray[7][5] = positionArray[7][7];
            positionArray[7][7] = '';
        }
    } else if (pieceMoved === 'K') {
        if (splitFen[2].includes('Q') && newRow === 0 && newCol === 2) {
            positionArray[0][3] = positionArray[0][0];
            positionArray[0][0] = '';
        } else if (splitFen[2].includes('K') && newRow === 0 && newCol === 6) {
            positionArray[0][5] = positionArray[0][7];
            positionArray[0][7] = '';
        }
    }

    // if this isn't a capture, increase half move clock
    if (splitFen[1] === 'b') {
        if (positionArray[newRow][newCol] !== '' || pieceMoved !== 'p' || pieceMoved !== 'P') splitFen[4] = splitFen[4] + 1;
        else splitFen[4] = 0;
    }

    // set move to opposite team
    if (splitFen[1] === 'w') splitFen[1] = 'b';
    else splitFen[1] = 'w';

    // increase move count
    if (splitFen[1] === 'b') splitFen[5] = splitFen[5] + 1;
    
    // if we just did a double move, allow for enpasants
    if (pieceMoved === 'p' && (oldRow-newRow === 2)) {
        splitFen[3] = convertIndexToNotation(oldRow-1, oldCol);
    } else if (pieceMoved === 'P' && (newRow-oldRow === 2)) {
        splitFen[3] = convertIndexToNotation(oldRow+1, oldCol);
    } else {
        splitFen[3] = '-';
    }

    // if this altered castling permissions, update them
    if (splitFen[2] !== '-') {
        if (pieceMoved === 'k') {
            splitFen[2] = splitFen[2].replace('k', '');
            splitFen[2] = splitFen[2].replace('q', '');
        } else if (pieceMoved === 'r') {
            if (oldRow === 7 && oldCol === 0) splitFen[2] = splitFen[2].replace('q', '');
            else if (oldRow === 7 && oldCol === 7) splitFen[2] = splitFen[2].replace('k', '');
        } else if (pieceMoved === 'K') {
            splitFen[2] = splitFen[2].replace('K', '');
            splitFen[2] = splitFen[2].replace('Q', '');
        } else if (pieceMoved === 'R') {
            if (oldRow === 0 && oldCol === 0) splitFen[2] = splitFen[2].replace('Q', '');
            else if (oldRow === 0 && oldCol === 7) splitFen[2] = splitFen[2].replace('K', '');
        }
        if (splitFen[2] === '') splitFen[2] = '-';
    }

    return (arrayToFenPosition(positionArray) + ' ' + splitFen[1] + ' ' + splitFen[2] + ' ' + splitFen[3] + ' ' + splitFen[4] + ' ' + splitFen[5]);
}

/**
 * Checks if the king for the side that is about to move can be captured
 * @param {String} fenPosition the position to analyze
 * @returns {boolean} true IFF the color whose turn it is to move is in check, false otherwise
 */
export function checkForCheck(fenPosition) {
    let board = parseBoard(fenPosition);
    let isItWhiteTurn = fenPosition.split(/\/| /)[8] === 'w';
    let kingLocation = findKing(board, isItWhiteTurn);
    return (checkForHorizontalVerticalChecks(board, kingLocation[0], kingLocation[1], isItWhiteTurn) || 
    checkForDiagonalChecks(board, kingLocation[0], kingLocation[1], isItWhiteTurn) ||
    checkForKnightChecks(board, kingLocation[0], kingLocation[1], isItWhiteTurn) ||
    checkForPawnChecks(board, kingLocation[0], kingLocation[1], isItWhiteTurn));
}

/**
 * Once the side whose move it is has been verified to be in check, this will check if there is any legal move for that side to escape it
 * @param {String} fenPosition the board position
 * @returns {boolean} TRUE iff that side is in checkmate, and FALSE otherwise
 */
export function checkForMate(fenPosition) {
    // TODO
    return fenPosition === '';
}

/**
 * Locates the row and column index of the king
 * @param {[String][String]} board 
 * @param {boolean} isItWhiteKing 
 * @return {[Number]} an array like [kingRow, kingCol]
 */
export function findKing(board, isItWhiteKing) {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            if (board[row][col] === 'k' && !isItWhiteKing) {
                return [row, col];
            }
            if (board[row][col] === 'K' && isItWhiteKing) {
                return [row, col];
            }
        }
    }
}

/**
 * Check for any checks on the board in the horizontal and vertical direction
 * @param {[String][String]} board 2d array representing the board in [row][col] format
 * @param {Number} kingRow the row index of the king
 * @param {Number} kingCol the column index of the king
 * @param {boolean} isItWhiteKing is TRUE iff it is whites king, false otherwise
 * @return {boolean} TRUE iff there is a check, false otherwise
 */
export function checkForHorizontalVerticalChecks(board, kingRow, kingCol, isItWhiteKing) {
    let increment = 1;
    // king row +
    while (kingRow + increment <= 7 && board[kingRow+increment][kingCol] === '') {
        increment += 1;
    }
    if (kingRow + increment <= 7 && canAttackHorizontalVertical(board[kingRow+increment][kingCol], isItWhiteKing)) return true;
    // king row -
    increment = 1;
    while (kingRow - increment >= 0 && board[kingRow-increment][kingCol] === '') {
        increment += 1;
    }
    if (kingRow - increment >= 0 && canAttackHorizontalVertical(board[kingRow-increment][kingCol], isItWhiteKing)) return true;
    // king col +
    increment = 1;
    while (kingCol + increment <= 7 && board[kingRow][kingCol+increment] === '') {
        increment += 1;
    }
    if (kingCol+increment <= 7 && canAttackHorizontalVertical(board[kingRow][kingCol+increment], isItWhiteKing)) return true;
    // king col -
    increment = 1;
    while (kingCol - increment >= 0 && board[kingRow][kingCol-increment] === '') {
        increment += 1;
    }
    if (kingCol-increment >= 0 && canAttackHorizontalVertical(board[kingRow][kingCol-increment], isItWhiteKing)) return true;

    return false;
}

/**
 * Check for any checks on the board in the diagonal directions
 * @param {[String][String]} board 2d array representing the board in [row][col] format
 * @param {Number} kingRow the row index of the king
 * @param {Number} kingCol the column index of the king
 * @param {boolean} isItWhiteKing is TRUE iff it is whites king, false otherwise
 */
export function checkForDiagonalChecks(board, kingRow, kingCol, isItWhiteKing) {
    // TODO: INCORPORATE CHECKING FOR QUEEN/BISHOP
    let increment = 1;
    // + row + col
    while (kingRow + increment <= 7 && kingCol + increment <= 7 && (board[kingRow+increment][kingCol+increment] === '')) {
        increment += 1;
    }
    if (kingRow + increment <= 7 && kingCol + increment <= 7 && canAttackDiagonal(board[kingRow+increment][kingCol+increment], isItWhiteKing)) return true;
    // + row - col
    increment = 1;
    while (kingRow + increment <= 7 && kingCol - increment >= 0 && (board[kingRow+increment][kingCol-increment] === '')) {
        increment += 1;
    }
    if (kingRow + increment <= 7 && kingCol - increment >= 0 && canAttackDiagonal(board[kingRow+increment][kingCol-increment], isItWhiteKing)) return true;
    // - row + col
    increment = 1;
    while (kingRow - increment >= 0 && kingCol + increment <= 7 && (board[kingRow-increment][kingCol+increment] === '')) {
        increment += 1;
    }
    if (kingRow - increment >= 0 && kingCol + increment <= 7 && canAttackDiagonal(board[kingRow-increment][kingCol+increment], isItWhiteKing)) return true;
    // - row - col
    increment = 1;
    while (kingRow - increment >= 0 && kingCol - increment >= 0 && (board[kingRow-increment][kingCol-increment] === '')) {
        increment += 1;
    }
    if (kingRow - increment >= 0 && kingCol - increment >= 0 && canAttackDiagonal(board[kingRow-increment][kingCol-increment], isItWhiteKing)) return true;

    return false;
}

/**
 * Check for any checks on the board in the knight squares
 * @param {[String][String]} board 2d array representing the board in [row][col] format
 * @param {Number} kingRow the row index of the king
 * @param {Number} kingCol the column index of the king
 * @param {boolean} isItWhiteKing is TRUE iff it is king turn, false otherwise
 * @return {boolean} TRUE iff the king is in check, FALSE otherwise
 */
export function checkForKnightChecks(board, kingRow, kingCol, isItWhiteKing) {
    // +2 row +1 col
    if (kingRow + 2 <= 7 && kingCol + 1 <= 7 && canAttackKnight(board[kingRow+2][kingCol+1], isItWhiteKing)) return true;
    // +2 row -1 col
    if (kingRow + 2 <= 7 && kingCol - 1 >= 0 && canAttackKnight(board[kingRow+2][kingCol-1], isItWhiteKing)) return true;
    // -2 row +1 col
    if (kingRow - 2 >= 0 && kingCol + 1 <= 7 && canAttackKnight(board[kingRow-2][kingCol+1], isItWhiteKing)) return true;
    // -2 row -1 col
    if (kingRow - 2 >= 0 && kingCol - 1 >= 0 && canAttackKnight(board[kingRow-2][kingCol-1], isItWhiteKing)) return true;
    // +1 row +2 col
    if (kingRow + 1 <= 7 && kingCol + 2 <= 7 && canAttackKnight(board[kingRow+1][kingCol+2], isItWhiteKing)) return true;
    // +1 row -2 col
    if (kingRow + 1 <= 7 && kingCol - 2 >= 0 && canAttackKnight(board[kingRow+1][kingCol-2], isItWhiteKing)) return true;
    // -1 row +2 col
    if (kingRow - 1 >= 0 && kingCol + 2 <= 7 && canAttackKnight(board[kingRow-1][kingCol+2], isItWhiteKing)) return true;
    // -1 row -2 col
    if (kingRow - 1 >= 0 && kingCol - 2 >= 0 && canAttackKnight(board[kingRow-1][kingCol-2], isItWhiteKing)) return true;

    return false;
}

/**
 * Checks the board for if the specified king is being put in check by pawns
 * @param {[String][String]} board 2d array representing board
 * @param {Number} kingRow index of the row the king is in
 * @param {Number} kingCol index of the col the king is in
 * @param {boolean} isItWhiteKing TURE iff the king is white, FALSE otherwise
 * @return {boolean} TRUE iff the king is in check, FALSE otherwise
 */
export function checkForPawnChecks(board, kingRow, kingCol, isItWhiteKing) {
    if (isItWhiteKing) {
        // Black pawns attacking white king, black pawns move towards row 0
        if (kingRow+1 <= 7 && kingCol+1 <= 7 && board[kingRow+1][kingCol+1] === 'p') return true;
        if (kingRow+1 <= 7 && kingCol-1 >= 0 && board[kingRow+1][kingCol-1] === 'p') return true;
    } else {
        // White pawns attacking black king, white pawns move towards row 8
        if (kingRow-1 >= 0 && kingCol+1 <= 7 && board[kingRow-1][kingCol+1] === 'P') return true;
        if (kingRow-1 >= 0 && kingCol-1 >= 0 && board[kingRow-1][kingCol-1] === 'P') return true;
    }

    return false;
}

/**
 * Function to test if a character is lower case. Only cares about scope of chess pieces (ignoring symbols/other chars)
 * @param {Character} piece 
 * @returns {boolean} TRUE iff a character is lowercase, otherwise FALSE if the character is uppercase
 */
export function isLowerCase(piece) {
    return piece === piece.toLowerCase();
}

/**
 * Converts from chess notation to index (e.x. a1 -> [0][0])
 * @param {String} notation 
 * @returns {[Number]} index of the chess notation
 */
export function convertNotationToIndex(notation) {
    let row = notation.split('')[1];
    let col = notation.split('')[0];
    let rowIndex = row - 1;
    let colIndex = col === 'a' ? 0 : 
                    col === 'b' ? 1 :
                    col === 'c' ? 2 :
                    col === 'd' ? 3 : 
                    col === 'e' ? 4 :
                    col === 'f' ? 5 :
                    col === 'g' ? 6 : 7;
    return [rowIndex, colIndex];
}

/**
 * Converts from position array indexes to chess notation (e.g. [0][0] -> a1)
 * @param {Number} row 
 * @param {Number} col 
 * @returns {string} chess notation of the index
 */
export function convertIndexToNotation(row, col) {
    let letter = col === 0 ? 'a' :
                    col === 1 ? 'b' :
                    col === 2 ? 'c' :
                    col === 3 ? 'd' :
                    col === 4 ? 'e' :
                    col === 5 ? 'f' :
                    col === 6 ? 'g' : 'h';
    let rowNum = row + 1;
    return letter + String(rowNum);
}

/**
 * Helper function for checkForDiagonalChecks which checks if the piece is opposite color of king and can move diagonally
 * @param {String} piece the piece
 * @param {boolean} isWhiteKing TRUE iff the king is white, FALSE otherwise
 * @returns {boolean} TRUE iff the piece can attack the king, FALSE otherwise
 */
export function canAttackDiagonal(piece, isWhiteKing) {
    if (isWhiteKing && (piece === 'q' || piece === 'b')) return true;
    if (!isWhiteKing && (piece === 'Q' || piece === 'B')) return true;
    return false;
}

/**
 * Helper function for checkForHorizontalVerticalChecks which checks if a piece is the opposte color of the king and can move horizontal/vertically
 * @param {String} piece the piece
 * @param {boolean} isWhiteKing TRUE iff the king is white, FALSE otherwise
 * @returns {boolean} TRUE iff the piece can attack the king, FALSE otherwise
 */
export function canAttackHorizontalVertical(piece, isWhiteKing) {
    if (isWhiteKing && (piece === 'q' || piece === 'r')) return true;
    if (!isWhiteKing && (piece === 'Q' || piece === 'R')) return true;
    return false;
}

/**
 * Checks if the piece in a square 1 knight move away from the king is a knight of the opposite color
 * @param {String} piece the piece
 * @param {boolean} isWhiteKing TRUE if the king is white that could be attacked, FALSE otherwise
 * @returns {boolean} TRUE iff the piece is a knight that can attack the king, FALSE otherwise
 */
export function canAttackKnight(piece, isWhiteKing) {
    if (isWhiteKing && piece === 'n') return true;
    if (!isWhiteKing && piece === 'N') return true;
    return false;
}

/**
 * Verifies that a castle will be legal and not move through check
 * @param {[String][String]} board the board. This will NOT be changed in this function
 * @param {boolean} isWhiteKing is the piece trying to castle the white king?
 * @param {boolean} isKingSideCastle is the piece trying to castle to the king side
 * @return {boolean} TURE iff the castle is legal, false otherwise
 */
export function canCastleLegally(board, isWhiteKing, isKingSideCastle) {
    if (isWhiteKing) {
        // King at E1 or [0][4]
        if (isKingSideCastle) {
            // Check F1 and G1 which are [0][5] and [0][6]
            return checkLegalMove(board, isWhiteKing, 0, 4, 0, 5) && checkLegalMove(board, isWhiteKing, 0, 4, 0, 6) && checkLegalMove(board, isWhiteKing, 0, 4, 0 , 4);
        } else {
            // Check D1 and C1 which are [0][3] and [0][2]
            return checkLegalMove(board, isWhiteKing, 0, 4, 0, 3) && checkLegalMove(board, isWhiteKing, 0, 4, 0, 2) && checkLegalMove(board, isWhiteKing, 0, 4, 0 , 4);
        }
    } else {
        // King at E8 or [7][4]
        if (isKingSideCastle) {
            // Check F8 and G8 which are [7][5] and [7][6]
            return checkLegalMove(board, isWhiteKing, 7, 4, 7, 5) && checkLegalMove(board, isWhiteKing, 7, 4, 7, 6) && checkLegalMove(board, isWhiteKing, 7, 4, 7, 4);
        } else {
            // Check D8 and C8 which are [7][3] and [7][2]
            return checkLegalMove(board, isWhiteKing, 7, 4, 7, 3) && checkLegalMove(board, isWhiteKing, 7, 4, 7, 2) && checkLegalMove(board, isWhiteKing, 7, 4, 7, 4);
        }
    }
}

/**
 * For a potential move that a piece can make, check if the move will result in the piece being in check
 * @param {[string][string]} board The current board position. This will NOT be changed in this function
 * @param {boolean} isWhiteKing is the piece that would be in check white's king
 * @param {number} oldRow index of the old row of the piece
 * @param {number} oldCol index of the old column of the piece
 * @param {number} newRow index of the new row of the piece
 * @param {number} newCol index of the new column of the piece
 * @return {boolean} TRUE iff the move is legal (not resulting in check for themselves), FALSE otherwise
 */
export function checkLegalMove(board, isWhiteKing, oldRow, oldCol, newRow, newCol) {
    board = structuredClone(board);
    board[newRow][newCol] = board[oldRow][oldCol];
    if (!(oldRow === newRow && oldCol === newCol)) board[oldRow][oldCol] = '';
    let boardFenString = arrayToFenPosition(board);
    let fenString = isWhiteKing? String(boardFenString) + ' w - - 0 1':String(boardFenString) + ' b - - 0 1';
    return !checkForCheck(fenString);
} 