let arena = document.getElementById("arena")
let welcome = document.getElementById("welcome-screen");
let gladForm = document.getElementById("gladiator")
let gladSelect = document.getElementById('glad-select')
let choose1 = document.getElementById('choosePlayer1')
let choose2 = document.getElementById('choosePlayer2')
let begin = document.getElementById('begin')
let create = document.getElementById("create-gladiator")
let startFight = document.getElementById("start-fight")
let instructions = document.getElementById("instructions")
let reset = document.getElementById("logout")
let congrats = document.getElementById("win-screen")

document.addEventListener("DOMContentLoaded", () => {
fetchKills();
fetchGladiators();})

function updateVisuals() {
    let oneKill = document.getElementsByClassName("oneKill")
    while (oneKill.length > 0) oneKill[0].remove()
    let oneGlad = document.getElementsByClassName("oneGlad")
    while (oneGlad.length > 0) oneGlad[0].remove()
    let cards = document.getElementsByClassName("cards")
    while (cards.length > 0) cards[0].remove()
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
    oneGlad.textContent = `${glad.name} has ${glad.kills.length} kills and ${glad.souls} souls`;
    leaderboards.appendChild(oneGlad)
    const gladCard = document.createElement('div')
    chooseGlad.appendChild(gladCard)
    gladCard.className = "cards"
    const gladHonor = document.createElement('h2')
    const gladMotto = document.createElement('h2')
    const gladReason = document.createElement('h2')
    const gladName = document.createElement('h2')
    const chooseMe = document.createElement('BUTTON')
    chooseMe.setAttribute('id',`chooser${glad.id}`)
    chooseMe.setAttribute('class', 'choose')
    gladCard.appendChild(gladName)
    gladCard.appendChild(gladHonor)
    gladCard.appendChild(gladMotto)
    gladCard.appendChild(gladReason)
    gladCard.appendChild(chooseMe)
    gladName.textContent = `Gladiator Name: ${glad.name}`
    gladHonor.textContent = `Honor: ${glad.honor}`
    gladMotto.textContent = `Motto: "${glad.motto}"`
    gladReason.textContent = `Reason: ${glad.reason}`
    chooseMe.textContent = `Select ${glad.name}`
    chooseMe.addEventListener("click", function(e){
        fetch(`http://localhost:3000/gladiators/${glad.id}`)
        .then(resp => resp.json())
        .then(json => setPlayers(json))

    })
}}
let player1;
let player2;

function setPlayers(data) {
    if (!player1) {
        player1 = data
        document.getElementById(`chooser${player1.id}`).style.display = "none"
        choose1.style.display = "none"
        create.style.display = "none"
        alert("Player 2 Chooses Next")
    } else {
        player2 = data
        document.getElementById(`chooser${player2.id}`).style.display = "none"
        begin.style.display = "block"
        create.style.display = "none"
    }
};

choose1.addEventListener("click", function(e){
    welcome.style.display = "none"
    gladForm.style.display = "none"
    gladSelect.style.display = "block"
})

reset.addEventListener("click", function(e){
    player1 = null;
    player2 = null;
    create.style.display ="block"
    choose1.style.display = "block"
    begin.style.display = "none"
    let buttons = document.querySelectorAll(".choose")
    for (let x = 0; x< buttons.length; x++)
    buttons[x].style.display="block"
})

create.addEventListener("click", function(e){
    welcome.style.display = "none"
    gladForm.style.display = "block"
    gladSelect.style.display = "none"
})

const createGlad = document.querySelector("#submit-glad")
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

begin.addEventListener("click", function(e){
    arena.style.display = "block";
    gladSelect.style.display = "none"
    begin.style.display ="none"
    reset.style.display = "none"
})


const spar = {
    "fighting": false
}
startFight.addEventListener("click", function(e){
    instructions.style.display = "none";
    spar.fighting = !spar.fighting
})


let fight = {
    "player1": {
        "tag": document.getElementById('player1'),
        "weapon": document.getElementById('player1Weapon'),
        "x": 200,
        "y": 180,
        "wx": 100,
        "wy" : 200,
        "controls": {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "wup": false,
            "wdown": false,
            "wleft": false,
            "wright": false,

        }

    },
    "player2": {
        "tag": document.getElementById('player2'),
        "weapon": document.getElementById('player2Weapon'),
        "x": 1400,
        "y": 180,
        "wx": 1500,
        "wy" : 200,
        "controls": {
            "up": false,
            "down": false,
            "left": false,
            "right": false,
            "wup": false,
            "wdown": false,
            "wleft": false,
            "wright": false,
        }
    }
}


document.addEventListener('keydown', function(e) {
    if(spar.fighting == true){
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
    if (e.key === "y"){
        fight.player1.controls.wup = true
    }
    if (e.key === "h"){
        fight.player1.controls.wdown = true
    }
    if (e.key === "g"){
        fight.player1.controls.wleft = true
    }
    if (e.key === "j"){
        fight.player1.controls.wright = true
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
    if (e.key === "8"){
        fight.player2.controls.wup = true
    }
    if (e.key === "5"){
        fight.player2.controls.wdown = true
    }
    if (e.key === "4"){
        fight.player2.controls.wleft = true
    }
    if (e.key === "6"){
        fight.player2.controls.wright = true
    }
    }}
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
    if (e.key === "y"){
        fight.player1.controls.wup = false
    }
    if (e.key === "h"){
        fight.player1.controls.wdown = false
    }
    if (e.key === "g"){
        fight.player1.controls.wleft = false
    }
    if (e.key === "j"){
        fight.player1.controls.wright = false
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
    if (e.key === "8"){
        fight.player2.controls.wup = false
    }
    if (e.key === "5"){
        fight.player2.controls.wdown = false
    }
    if (e.key === "4"){
        fight.player2.controls.wleft = false
    }
    if (e.key === "6"){
        fight.player2.controls.wright = false
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
    if (fight.player1.controls.wup == true){
        fight.player1.wy = Math.min(fight.player1.wy + 3, 550)
    }
    if (fight.player1.controls.wdown == true){
        fight.player1.wy = Math.max(fight.player1.wy - 3, 20)
    }
    if (fight.player1.controls.wleft == true){
        fight.player1.wx = Math.max(fight.player1.wx - 3, 20)
    }
    if (fight.player1.controls.wright == true){
        fight.player1.wx = Math.min(fight.player1.wx + 3, 1555)
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
    if (fight.player2.controls.wup == true){
        fight.player2.wy = Math.min(fight.player2.wy + 3, 550)
    }
    if (fight.player2.controls.wdown == true){
        fight.player2.wy = Math.max(fight.player2.wy - 3, 20)
    }
    if (fight.player2.controls.wleft == true){
        fight.player2.wx = Math.max(fight.player2.wx - 3, 20)
    }
    if (fight.player2.controls.wright == true){
        fight.player2.wx = Math.min(fight.player2.wx + 3, 1555)
    }
    

    fight.player1.tag.style.bottom = fight.player1.y+'px'
    fight.player1.tag.style.left = fight.player1.x+'px'
    fight.player1.weapon.style.bottom = fight.player1.wy+'px'
    fight.player1.weapon.style.left = fight.player1.wx+'px'
    fight.player2.tag.style.bottom = fight.player2.y+'px'
    fight.player2.tag.style.left = fight.player2.x+'px'
    fight.player2.weapon.style.bottom = fight.player2.wy+'px'
    fight.player2.weapon.style.left = fight.player2.wx+'px'
    window.requestAnimationFrame(loop)
    whoWins()
}
window.requestAnimationFrame(loop)

function whoWins() {
let dx = parseInt(getComputedStyle(fight.player1.weapon).left) - parseInt(getComputedStyle(fight.player2.tag).left);
let dy = parseInt(getComputedStyle(fight.player1.weapon).bottom) - parseInt(getComputedStyle(fight.player2.tag).bottom);
let distance = Math.sqrt(dx * dx + dy * dy);
let adx = parseInt(getComputedStyle(fight.player2.weapon).left) - parseInt(getComputedStyle(fight.player1.tag).left);
let ady = parseInt(getComputedStyle(fight.player2.weapon).bottom) - parseInt(getComputedStyle(fight.player1.tag).bottom);
let adistance = Math.sqrt(adx * adx + ady * ady);
let radiiSum = 17


if (distance < radiiSum || adistance < radiiSum)   {
    fight.player1.y=180
    fight.player1.x=200
    fight.player1.wy=200
    fight.player1.wx=100
    fight.player2.y=180
    fight.player2.x=1400
    fight.player2.wy=200
    fight.player2.wx=1500
    arena.style.display = "none"
    spar.fighting = !spar.fighting
}
if (distance < radiiSum){
    victory(player1, player2)
} else if (adistance < radiiSum){
    victory(player2, player1)
}
}

function victory(winner, loser){
    fetch(`http://localhost:3000/gladiators/${winner.id}}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          "souls": winner.souls += 1
        })
          })
          .then(resp => resp.json())
          .then(json => console.log(json));
    fetch(`http://localhost:3000/gladiators/${loser.id}}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          "souls": loser.souls -= 1
        })
          })
          .then(resp => resp.json())
          .then(json => console.log(json))
          congrats.style.display = "block"
        }
        
        