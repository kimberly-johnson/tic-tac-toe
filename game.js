let clicks = 0;

function addPlay(event) {
    let player = "-X";
    clicks++;

    if(clicks % 2 === 0){
        player = "-O";
    } else {
        player = "-X";
    }

    let spaceID = event.target.id;
    let element = document.getElementById(spaceID + player);
    element.style.visibility = "visible";
}