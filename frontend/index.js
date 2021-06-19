let fight = {
    "player1": {
        "tag": document.getElementById('player1'),
        "weapon": document.getElementById('player1Weapon'),
        "angle": 0,
        "x": 200,
        "y": 180,
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
        "x": 200,
        "y": 1400,
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
    if (e.key === "w"){
        fight.player1.controls.up = true
    }
    if (e.key === "s"){
        fight.player1.controls.down = true
    }
    if (e.key === "a"){
        fight.player1.controls.left = true
    }
    if (e.key === "d"){
        fight.player1.controls.right = true
    }
    if (e.key === " "){
        fight.player1.controls.swing = true
    }
    if (e.key === "ArrowUp"){
        fight.player2.controls.up = true
    }
    if (e.key === "ArrowDown"){
        fight.player2.controls.down = true
    }
    if (e.key === "ArrowLeft"){
        fight.player2.controls.left = true
    }
    if (e.key === "ArrowRight"){
        fight.player2.controls.right = true
    }
    }
);

document.addEventListener('keyup', function(e) {
    if (e.key === "w"){
        fight.player1.controls.up = false
    }
    if (e.key === "s"){
        fight.player1.controls.down = false
    }
    if (e.key === "a"){
        fight.player1.controls.left = false
    }
    if (e.key === "d"){
        fight.player1.controls.right = false
    }
    if (e.key === " "){
        fight.player1.controls.swing = false
    }
    if (e.key === "ArrowUp"){
        fight.player2.controls.up = false
    }
    if (e.key === "ArrowDown"){
        fight.player2.controls.down = false
    }
    if (e.key === "ArrowLeft"){
        fight.player2.controls.left = false
    }
    if (e.key === "ArrowRight"){
        fight.player2.controls.right = false
    }
    }
);

function loop(){
    if (fight.player1.controls.up == true){
        fight.player1.y = Math.min(fight.player1.y + 5, 550)
    }
    if (fight.player1.controls.swing == true ){
        fight.player1.angle += 1
	    fight.player1.tag.style.transform = `rotate(${fight.player1.angle}deg)`;
        fight.player1.weapon.style.transform = `rotate(-${fight.player1.angle}deg)`
    }

    fight.player1.tag.style.bottom = fight.player1.y+'px'
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)