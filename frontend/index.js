let player1Angle = 0

let fight = {
    "player1": {
        "tag": document.getElementById('player1'),
        "x": "200",
        "y": "180",
        "controls": {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "swing": false
        }

    },
    "player2": {
        "tag": document.getElementById('player2'),
        "x": "200",
        "y": "1400",
        "controls": {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "swing": false
    }
}
}

document.addEventListener('keydown', function(e) {
    
    let player1Weapon = document.getElementById("player1Weapon");
    if (e.key === " "){
        player1Angle += 10
	    player1.style.transform = `rotate(${player1Angle}deg)`;
        player1Weapon.style.transform = `rotate(-${player1Angle}deg)`}
    if(e.key === "ArrowRight"){
        movePlayer1Right()
        }
    }
);