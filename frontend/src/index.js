document.addEventListener("DOMContentLoaded", () => {
fetchKills();
fetchGladiators();})

function updateVisuals() {
    let oneKill = document.getElementsByClassName("oneKill")
    while (oneKill.length > 0) oneKill[0].remove()
    let oneGlad = document.getElementsByClassName("oneGlad")
    while (oneGlad.length > 0) oneGlad[0].remove()
    fetchKills();
    fetchGladiators()
}

function fetchKills() {
    return fetch("http://localhost:3000/kills")
    .then(resp => resp.json())
    .then(results => renderKills(results.sort(function(a,b){
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    })))
}

function renderKills(allKills){
    const killFeed = document.querySelector('#killfeed');
    const arrayKills = allKills
    for (const kill of arrayKills){
        const oneKill = document.createElement('p');
        oneKill.className = "oneKill";
        oneKill.textContent = `${kill.gladiator.name} shouts ${kill.message}!`;
        killFeed.appendChild(oneKill)
    }
}

function fetchGladiators() {
    fetch("http://localhost:3000/gladiators")
    .then(resp => resp.json())
    .then(json => renderGladiators(json.sort(function(a,b){
        return b.kills.length - a.kills.length
    })))
}

function renderGladiators(allGladiators){
    const leaderboards = document.querySelector('#leaderboards');
    const chooseGlad = document.querySelector('#glad-select')
    for (const glad of allGladiators){
    const oneGlad = document.createElement('li');
    oneGlad.className = "oneGlad";
    oneGlad.textContent = `${glad.name} has ${glad.kills.length} kills and ${glad.souls.length} souls`;
    leaderboards.appendChild(oneGlad)
    const gladCard = document.createElement('div')
    chooseGlad.appendChild(gladCard)
    gladCard.className = "cards"
    const gladHonor = document.createElement('h2')
    const gladMotto = document.createElement('h2')
    const gladReason = document.createElement('h2')
    const gladName = document.createElement('h2')
    const chooseMe = document.createElement('BUTTON')
    gladCard.appendChild(gladName)
    gladCard.appendChild(gladHonor)
    gladCard.appendChild(gladMotto)
    gladCard.appendChild(gladReason)
    gladCard.appendChild(chooseMe)
    gladName.textContent = glad.name
    gladHonor.textContent = `${glad.honor}`
    gladMotto.textContent = `${glad.motto}`
    gladReason.textContent = `${glad.reason}`
}}

let arena = document.getElementById("arena")
arena.style.display = "none"
let fighting = false
let welcome = document.getElementById("welcome-screen")
let gladForm = document.getElementById("gladiator")

document.getElementById("create-gladiator").addEventListener("click", function(e){
    welcome.style.display = "none"
    gladForm.style.display = "block"
})

const createGlad = document.querySelector(".submit")
createGlad.addEventListener("click", function(e){
    e.preventDefault();
    fetch("http://localhost:3000/gladiators", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            "name": document.querySelector('form.new-gladiator input[name="name"]').value,
            "motto": document.querySelector('form.new-gladiator input[name="motto"]').value,
            "reason": document.querySelector('form.new-gladiator input[name="reason"]').value,
            "honor": document.querySelector('form.new-gladiator input[name="honor"]').value,
        })
    })
    .then(response => response.json())
    .then(result => alert(`You have successfully made ${result.name}`));
    updateVisuals();
    welcome.style.display = "block";
    gladForm.style.display = "none";}
    
    )

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

while (fighting == true) {
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
    detect()
}
window.requestAnimationFrame(loop)

function detect() {
let dx = parseInt(getComputedStyle(fight.player1.tag).left) - parseInt(getComputedStyle(fight.player2.tag).left);
let dy = parseInt(getComputedStyle(fight.player1.tag).bottom) - parseInt(getComputedStyle(fight.player2.tag).bottom);
let distance = Math.sqrt(dx * dx + dy * dy);
let radiiSum = 24


if (distance < radiiSum)   {
    document.getElementById("player1").style.left = "";
    document.getElementById("player1").style.bottom = "";
    document.getElementById("player2").style.left = "";
    document.getElementById("player2").style.bottom = "";
}}
}