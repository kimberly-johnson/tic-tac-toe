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

    //if a win is determined, border around winning moves and disables buttons
    matrix[firstIndex][secondIndex] = player
    const win = determineWin(matrix);
    if(win.player){
        let firstWin = document.getElementById(win.winIds[0]);
        let secondWin = document.getElementById(win.winIds[1]);
        let thirdWin = document.getElementById(win.winIds[2]);
        firstWin.style.border= "2px solid red";
        secondWin.style.border= "2px solid red";
        thirdWin.style.border= "2px solid red";
        const buttons = document.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
        }
    }
}

function determineWin(matrix) {
    let win = {
        player: null, 
        winIds: ["", "", ""]
    };

    //loops through all rows and checks if horizontal win
    for (let i = 0; i < matrix.length; i++) {
        let letter = ""
        switch(i){
            case 0: letter = "T";
                break;
            case 1: letter = "M";
                break;
            case 2: letter = "B";
                break;
        }

        if (matrix[i].includes("X") && !matrix[i].includes("O") && !matrix[i].includes("empty")) {
            win = { player: "X", winIds: [`${letter}-L-X`, `${letter}-M-X`, `${letter}-R-X`] };
            return win;
        } else if (matrix[i].includes("O") && !matrix[i].includes("X") && !matrix[i].includes("empty")) {
            win = { player: "O", winIds: [`${letter}-L-O`, `${letter}-M-O`, `${letter}-R-O`] };
            return win;
        }

    }

    //checks for vertical win in left row
    if (matrix[0][0] === "X" && matrix[1][0] === "X" && matrix[2][0] === "X") {
        win = { player: "X", winIds: ["T-L-X", "M-L-X", "B-L-X"] };
        return win;
    } else if(matrix[0][0] === "O" && matrix[1][0] === "O" && matrix[2][0] === "O"){
        win = { player: "O", winIds: ["T-L-O", "M-L-O", "B-L-O"] };
        return win;
    }

    //checks for vertical win in middle row
    if (matrix[0][1] === "X" && matrix[1][1] === "X" && matrix[2][1] === "X") {
        win = { player: "X", winIds: ["T-M-X", "M-M-X", "B-M-X"] };
        return win;
    } else if(matrix[0][1] === "O" && matrix[1][1] === "O" && matrix[2][1] === "O"){
        win = { player: "O", winIds: ["T-M-O", "M-M-O", "B-M-O"] };
        return win;
    }

    //checks for vertical win in right row
    if (matrix[0][2] === "X" && matrix[1][2] === "X" && matrix[2][2] === "X") {
        win = { player: "X", winIds: ["T-R-X", "M-R-X", "B-R-X"] };
        return win;
    } else if(matrix[0][2] === "O" && matrix[1][2] === "O" && matrix[2][2] === "O"){
        win = { player: "O", winIds: ["T-R-O", "M-R-O", "B-R-O"] };
        return win;
    }

    //checks for diagonal win left to right
    if (matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X") {
        win = { player: "X", winIds: ["T-L-X", "M-M-X", "B-R-X"] };
        return win;
    } else if (matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O") {
        win = { player: "O", winIds: ["T-L-O", "M-M-O", "B-R-O"] };
        return win;
    }

    //checks for diagonal win right to left
    if (matrix[0][2] === "X" && matrix[1][1] === "X" && matrix[2][0] === "X") {
        win = { player: "X", winIds: ["T-R-X", "M-M-X", "B-L-X"] };
        return win;
    } else if (matrix[0][2] === "O" && matrix[1][1] === "O" && matrix[2][0] === "O") {
        win = { player: "O", winIds: ["T-R-O", "M-M-O", "B-L-O"] };
        return win;
    }
}