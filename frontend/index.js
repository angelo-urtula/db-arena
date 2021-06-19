let player1Angle = 0
document.addEventListener('keydown', function(e) {
    let player1 = document.getElementById("player1");
    let player1Weapon = document.getElementById("player1Weapon");
    
    if (e.key === " "){
        player1Angle += 120
	player1.style.transform = `rotate(${player1Angle}deg)`;
    player1Weapon.style.transform = `rotate(-${player1Angle}deg)`
}
});