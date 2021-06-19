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
        "weapon": document.getElementById('player2Weapon'),
        "angle": 0,
        "x": 1400,
        "y": 180,
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
    if (e.key === "Enter"){
        fight.player2.controls.swing = true
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
    if (e.key === "Enter"){
        fight.player2.controls.swing = false
    }
    }
);

function loop(){
    if (fight.player1.controls.up == true){
        fight.player1.y = Math.min(fight.player1.y + 3, 550)
    }
    if (fight.player1.controls.down == true){
        fight.player1.y = Math.max(fight.player1.y - 3, 20)
    }
    if (fight.player1.controls.left == true){
        fight.player1.x = Math.max(fight.player1.x - 3, 20)
    }
    if (fight.player1.controls.right == true){
        fight.player1.x = Math.min(fight.player1.x + 3, 1555)
    }
    if (fight.player1.controls.swing == true ){
        fight.player1.angle += 1
	    fight.player1.tag.style.transform = `rotate(${fight.player1.angle}deg)`;
        fight.player1.weapon.style.transform = `rotate(-${fight.player1.angle}deg)`
    }
    if (fight.player2.controls.up == true){
        fight.player2.y = Math.min(fight.player2.y + 3, 550)
    }
    if (fight.player2.controls.down == true){
        fight.player2.y = Math.max(fight.player2.y - 3, 20)
    }
    if (fight.player2.controls.left == true){
        fight.player2.x = Math.max(fight.player2.x - 3, 20)
    }
    if (fight.player2.controls.right == true){
        fight.player2.x = Math.min(fight.player2.x + 3, 1555)
    }
    if (fight.player2.controls.swing == true ){
        fight.player2.angle -= 1
	    fight.player2.tag.style.transform = `rotate(${fight.player2.angle}deg)`;
        fight.player2.weapon.style.transform = `rotate(-${fight.player2.angle}deg)`}

    fight.player1.tag.style.bottom = fight.player1.y+'px'
    fight.player1.tag.style.left = fight.player1.x+'px'
    fight.player2.tag.style.bottom = fight.player2.y+'px'
    fight.player2.tag.style.left = fight.player2.x+'px'
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)