let player1Angle = 0

document.addEventListener('keydown', function(e) {
    ;
    let player1Weapon = document.getElementById("player1Weapon");
    
    if (e.key === " "){
        player1Angle += 10
	    player1.style.transform = `rotate(${player1Angle}deg)`;
        player1Weapon.style.transform = `rotate(-${player1Angle}deg)`
    }else if(e.key === "ArrowRight"){
        movePlayer1Right()
        }
    }
);

    function movePlayer1Right() {
        let leftNumbers = player1.style.left.replace("px", "");
        let left = parseInt(leftNumbers, 10);
        
        if (left < 1000) {
        player1.style.left = `${left + 10}px`;
        }}