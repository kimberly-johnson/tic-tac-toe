let clicks = 0;
let matrix = [["empty", "empty", "empty"], ["empty", "empty", "empty"], ["empty", "empty", "empty"]];

function addPlay(event) {
    let player = "X";
    clicks++;

    if (clicks % 2 === 0) {
        player = "O";
    } else {
        player = "X";
    }

    let spaceID = event.target.id;
    let element = document.getElementById(spaceID + "-" + player);
    element.style.visibility = "visible";

    //I wish i could just use indexes as id's rather than have to parse them
    let firstIndex = 0;
    let secondIndex = 0;
    let indexes = spaceID.split("-");

    if (indexes[0] === "T") {
        firstIndex = 0;
    } else if (indexes[0] === "M") {
        firstIndex = 1;
    } else if (indexes[0] === "B") {
        firstIndex = 2;
    }
    if (indexes[1] === "L") {
        secondIndex = 0;
    } else if (indexes[1] === "M") {
        secondIndex = 1;
    } else if (indexes[1] === "R") {
        secondIndex = 2;
    }

    matrix[firstIndex][secondIndex] = player
    console.log("element", spaceID, firstIndex, secondIndex, matrix)
    const win = determineWin(matrix);
    console.log("win", win)
}

function determineWin(matrix) {
    let win = "";

    //loops through all rows and checks if horizontal win
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes("X") && !matrix[i].includes("O") && !matrix[i].includes("empty")) {
            win = "X"
            return win;
        } else if (matrix[i].includes("O") && !matrix[i].includes("X") && !matrix[i].includes("empty")) {
            win = "O"
            return win;
        }
    }

    //checks for vertical win in left row
    if (matrix[0][0] === "X" && matrix[1][0] === "X" && matrix[2][0] === "X") {
        win = "X";
        return win;
    } else if(matrix[0][0] === "O" && matrix[1][0] === "O" && matrix[2][0] === "O"){
        win = "O";
        return win;
    }

    //checks for vertical win in middle row
    if (matrix[0][1] === "X" && matrix[1][1] === "X" && matrix[2][1] === "X") {
        win = "X";
        return win;
    } else if(matrix[0][1] === "O" && matrix[1][1] === "O" && matrix[2][1] === "O"){
        win = "O";
        return win;
    }

    //checks for vertical win in right row
    if (matrix[0][2] === "X" && matrix[1][2] === "X" && matrix[2][2] === "X") {
        win = "X";
        return win;
    } else if(matrix[0][2] === "O" && matrix[1][2] === "O" && matrix[2][2] === "O"){
        win = "O";
        return win;
    }

    //checks for diagonal win left to right
    if (matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X") {
        win = "X";
        return win;
    } else if (matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O") {
        win = "O";
        return win;
    }

    //checks for diagonal win right to left
    if (matrix[0][2] === "X" && matrix[1][1] === "X" && matrix[2][0] === "X") {
        win = "X";
        return win;
    } else if (matrix[0][2] === "O" && matrix[1][1] === "O" && matrix[2][0] === "O") {
        win = "O";
        return win;
    }
}