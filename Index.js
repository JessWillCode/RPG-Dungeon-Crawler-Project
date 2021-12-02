// creating mute button for music functionality
function mute(){
    const music = document.getElementById('background_music');
    document.getElementById('mute_option').innerHTML = music.muted ? 'mute' : 'unmute';
    music.muted = !music.muted;
}

// attaching range slider to audio volume on site

// let audio = document.getElementById('background_music');
// let givenvolume = document.querySelector("#volume-control");
// audio.volume = 

// const volumeSlider = document.getElementById('volume-control');
// const outputContainer = document.getElementById('volume-output');
// const music = document.getElementById('background_music');
// audio.volume = 0.2;

// volumeSlider.addEventListener('input', (e) => {
//   const value = e.target.value;

//   outputContainer.textContent = value;
//   music.volume = value / 100;
// });


function startGame(e){
    this.classList.remove("hide");
}

//Enter game Intro Screen
const start= document.querySelector(".start");
const text= document.querySelector("#charInput");
const audio= document.querySelector("#background_music")

start.addEventListener('click',startGame);

function startGame(e){
    audio.play();
    this.classList.add("fade-out");
    this.addEventListener('animationend',()=>{
        start.remove();
    })
    text.classList.toggle("reveal")
    nextButton.classList.toggle("reveal")
    nextButton.classList.add("quick-in")
    setTimeout(gameStart, 3700);
    }


var JSON = JSON || {};

class Room {
    constructor(roomAtt){
        this.roomId = roomAtt.roomId
        this.option1Text = roomAtt.option1Text
        this.option2Text = roomAtt.option2Text
        this.option3Text = roomAtt.option3Text
        this.option4Text = roomAtt.option4Text
        this.roomNorth = roomAtt.roomNorth
        this.roomEast = roomAtt.roomEast
        this.roomWest = roomAtt.roomWest
        this.roomSouth = roomAtt.roomSouth
        this.treasurePresent = roomAtt.treasurePresent
        this.explored = false
        this.enemyPresent = roomAtt.enemyPresent
        this.mapId = roomAtt.mapId
        this.nextFloor = roomAtt.nextFloor
        this.previousFloor = roomAtt.previousFloor
        this.floor = roomAtt.floor
    }
    
    optionOne(){
       if(this.roomNorth != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
           player.room = this.roomNorth
           roomText()
        }
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        this.explored = true
        if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
    }
    optionTwo(){
        if(this.roomSouth != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomSouth
        roomText()
        }
         this.explored = true
         document.getElementById("roomIdTester").innerHTML = `${player.room}`
         if(roomArr[player.room].enemyPresent != null){
            combatStart()
       }
     }
     
     
     optionThree(){
        if(this.roomEast != null){
        document.getElementById(roomArr[player.room].mapId).style.border = null
        player.room = this.roomEast
        roomText()
        } 
        this.explored = true
        document.getElementById("roomIdTester").innerHTML = `${player.room}`
        if(roomArr[player.room].enemyPresent != null){
           combatStart()
      }
    }
    optionFour(){
        if(this.roomWest != null){
            document.getElementById(roomArr[player.room].mapId).style.border = null
            player.room = this.roomWest
            roomText()
            }
             this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
             if(roomArr[player.room].enemyPresent != null){
                combatStart()
           }
    } 
    roomInteract(){
        if(this.treasurePresent != null){
            itemArr[this.treasurePresent].loot()
            this.treasurePresent = null
            roomText()
        } else if(this.nextFloor != null){
            player.room = this.nextFloor
            nextFloor()
            roomText()
            this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
        }  else if(this.previousFloor != null){
            player.room = this.previousFloor
            nextFloor()
            roomText()
            this.explored = true
             document.getElementById("roomIdTester").innerHTML = `${player.room}`
        }     
    }
}
function nextFloor(){
    roomArr.forEach((room)=>{
            document.getElementById(room.mapId).style.backgroundColor = ''
            document.getElementById(room.mapId).style.border = ''
        });
        roomArr.forEach((room)=>{
        if(room.explored === true && room.floor === roomArr[player.room].floor){
                document.getElementById(room.mapId).style.backgroundColor = 'black'
                document.getElementById(room.mapId).style.border = ''
            }
    });
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    }


function roomText(){
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    if(roomArr[player.room].roomNorth != null){
        document.getElementById("roomOption1").innerHTML = `Go North!`
     } else {
         document.getElementById("roomOption1").innerHTML = ''
     }
     if(roomArr[player.room].roomSouth != null){
         document.getElementById("roomOption2").innerHTML = `Go South!`
      } else {
         document.getElementById("roomOption2").innerHTML = ''
     }
      if(roomArr[player.room].roomEast != null){
         document.getElementById("roomOption3").innerHTML = `Go East!`
      } else {
         document.getElementById("roomOption3").innerHTML = ''
     }
      if(roomArr[player.room].roomWest != null){
         document.getElementById("roomOption4").innerHTML = `Go West!`
      } else {
         document.getElementById("roomOption4").innerHTML = ''
     }
    if(roomArr[player.room].treasurePresent != null){
        document.getElementById("roomOption5").innerHTML = 'Loot the Chest!'
    }else if(roomArr[player.room].nextFloor != null){
        document.getElementById("roomOption5").innerHTML = 'Advance to the next floor!'
    }else if(roomArr[player.room].previousFloor != null){
        document.getElementById("roomOption5").innerHTML = 'Return to the last floor!'
    }else {
        document.getElementById("roomOption5").innerHTML = ''
  }
}
startingRoom = new Room({
    roomId: 0,
    roomNorth: 1, 
    roomWest: null,
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm68',
    nextFloor: null,
    floor: 1,
})
startingRoom.explored = true
let room1 = new Room({
    roomId: 1, 
    roomNorth: 2, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 0,
    treasurePresent: 0,
    enemyPresent: 0,
    mapId: 'rm58',
    nextFloor: null,
    floor: 1,
})
let room2 = new Room({
    roomId: 2, 
    roomNorth: 3, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 1,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48',
    nextFloor: null,
    floor: 1,
})
let room3 = new Room({
    roomId:3,  
    roomNorth: null, 
    roomWest: 4,
    roomEast: null, 
    roomSouth: 2,
    treasurePresent: 0,
    enemyPresent: null,
    mapId: 'rm38',
    nextFloor: 10,
    floor: 1,
})
let room4 = new Room({
    roomId: 4,  
    roomNorth: null, 
    roomWest: 5, 
    roomEast: 3, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: 1,
    mapId: 'rm37',
    nextFloor: null,
    floor: 1,
})
let room5 = new Room({
    roomId: 5, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 4, 
    roomSouth: 6,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36',
    nextFloor: null,
    floor: 1,
})
let room6 = new Room({
    roomId: 6, 
    roomNorth: 5, 
    roomWest: 7, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46',
    nextFloor: null,
    floor: 1,
})
let room7 = new Room({
    roomId: 7, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 6, 
    roomSouth: 8,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    nextFloor: null,
    floor: 1,
})
let room8 = new Room({
    roomId: 8, 
    roomNorth: 7, 
    roomWest: 9, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: null,
    floor: 1,
})
let room9 = new Room({
    roomId: 9, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 8, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54',
    nextFloor: 10,
    floor: 1,
})
let room10 = new Room({
    roomId: 10, 
    roomNorth: 11, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 9,
    floor: 2,
})
let room11 = new Room({
    roomId: 11, 
    roomNorth: 12, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 10,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    nextFloor: 25,
    floor: 2,
})
let room12 = new Room({
    roomId: 12, 
    roomNorth: null, 
    roomWest: 19, 
    roomEast: 13, 
    roomSouth: 11,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    floor: 2,
})
let room13 = new Room({
    roomId: 13, 
    roomNorth: null, 
    roomWest: 12, 
    roomEast: 14, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm46',
    floor: 2,
})
let room14 = new Room({
    roomId: 14, 
    roomNorth: null, 
    roomWest: 13, 
    roomEast: 15, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47',
    floor: 2,
})
let room15 = new Room({
    roomId: 15, 
    roomNorth: 16, 
    roomWest: 14, 
    roomEast: null, 
    roomSouth: 18,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm48',
    floor: 2,
})
let room16 = new Room({
    roomId: 16, 
    roomNorth: 17, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 15,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm38',
    floor: 2,
})
let room17 = new Room({
    roomId: 17, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 16,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm28',
    nextFloor: 25,
    floor: 2,
})
let room18 = new Room({
    roomId: 18, 
    roomNorth: 15, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm58',
    floor: 2,
})
let room19 = new Room({
    roomId: 19, 
    roomNorth: 20, 
    roomWest: null, 
    roomEast: 12, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm44',
    floor: 2,
})
let room20 = new Room({
    roomId: 20, 
    roomNorth: 21, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 19,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34',
    floor: 2,
})
let room21 = new Room({
    roomId: 21, 
    roomNorth: 22, 
    roomWest: 23, 
    roomEast: 24, 
    roomSouth: 20,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm24',
    floor: 2,
})
let room22 = new Room({
    roomId: 22, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 21,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm14',
    floor: 2,
})
let room23 = new Room({
    roomId: 23, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 21, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm23',
    floor: 2,
})
let room24 = new Room({
    roomId: 24, 
    roomNorth: null, 
    roomWest: 21, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25',
    floor: 2,
})
let room25 = new Room({
    roomId: 25, 
    roomNorth: 26, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm65',
    previousFloor: 17, 
    floor: 3,
})
let room26 = new Room({
    roomId: 26, 
    roomNorth: 27, 
    roomWest: 30, 
    roomEast: 35, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm55',
    floor: 3,
})
let room27 = new Room({
    roomId: 27, 
    roomNorth: 28, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 26,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm45',
    floor: 3,
})
let room28 = new Room({
    roomId: 28, 
    roomNorth: 29, 
    roomWest: 34, 
    roomEast: 39, 
    roomSouth: 27,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm35',
    floor: 3,
})
let room29 = new Room({
    roomId: 29, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 28,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm25',
    floor: 3,
})
let room30 = new Room({
    roomId: 30, 
    roomNorth: null, 
    roomWest: 31, 
    roomEast: 26, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm54',
    floor: 3,
})
let room31 = new Room({
    roomId: 31, 
    roomNorth: 32, 
    roomWest: null, 
    roomEast: 30, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm53',
    floor: 3,
})
let room32 = new Room({
    roomId: 32, 
    roomNorth: 33, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 31,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm43',
    floor: 3,
})
let room33 = new Room({
    roomId: 33, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 34, 
    roomSouth: 32,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm33',
    floor: 3,
})
let room34 = new Room({
    roomId: 34, 
    roomNorth: null, 
    roomWest: 33, 
    roomEast: 28, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm34',
    floor: 3,
})
let room35 = new Room({
    roomId: 35, 
    roomNorth: null, 
    roomWest: 26, 
    roomEast: 36, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm56',
    floor: 3,
})
let room36 = new Room({
    roomId: 36, 
    roomNorth: 37, 
    roomWest: 35, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm57',
    floor: 3,
})
let room37 = new Room({
    roomId: 37, 
    roomNorth: 38, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 36,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm47',
    floor: 3,
})
let room38 = new Room({
    roomId: 38, 
    roomNorth: 40, 
    roomWest: 39, 
    roomEast: null, 
    roomSouth: 37,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm37',
    floor: 3,
})
let room39 = new Room({
    roomId: 39, 
    roomNorth: null, 
    roomWest: 28, 
    roomEast: 38, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm36',
    floor: 3,
})
let room40 = new Room({
    roomId: 40, 
    roomNorth: 41, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 38,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm27',
    floor: 3,
})
let room41 = new Room({
    roomId: 41, 
    roomNorth: 42, 
    roomWest: null, 
    roomEast: null, 
    roomSouth: 40,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm17',
    floor: 3,
})
let room42 = new Room({
    roomId: 42, 
    roomNorth: null, 
    roomWest: null, 
    roomEast: 43, 
    roomSouth: 41,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm7',
    floor: 3,
})
let room43 = new Room({
    roomId: 43, 
    roomNorth: null, 
    roomWest: 42, 
    roomEast: 44, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm8',
    floor: 3,
})
let room44 = new Room({
    roomId: 44, 
    roomNorth: null, 
    roomWest: 43, 
    roomEast: null, 
    roomSouth: null,
    treasurePresent: 1,
    enemyPresent: null,
    mapId: 'rm9',
    floor: 3,
})
roomArr= [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24,room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44]
// roomArr= [startingRoom]
// for(let i = 0; i<24; i++){
//     roomArr.push(room`${i}`)
// }
//             Item class code
class Item{
    constructor(att){
        this.itemId = att.itemId
        this.imgSrc = att.imgSrc
    }
    loot(){
        let invSpot = `item${player.inventory.length +1}`;
        player.inventory.push(this)
        document.getElementById(invSpot).src = this.imgSrc
        roomArr[player.room].treasurePresent = null
    }
}
class Potion extends Item{
    constructor(att){
        super(att);
    }
    useItem(slot){
        player.hpCurrent = player.hpTotal
        player.inventory.splice(slot, 1)
        document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        for(let i = 1; i<6; i++){
            document.getElementById(`item${i}`).src = ''
        }
        player.inventory.forEach((item, index) => {
            let invSpot = `item${index +1}`;
            document.getElementById(invSpot).src = item.imgSrc
        })
    }
}
function itemButton(slot){
    player.inventory[slot].useItem(slot)
}
let key = new Item({
    itemId: 0,
    imgSrc: 'assets/Key.png'
})
let potion = new Potion({
    itemId: 1,
    imgSrc: 'assets/Potion.png'

})
let itemArr = [key, potion]

//          Enemy class init
class Enemy{
    constructor(att){
        this.enemyId = att.enemyId
        this.name = att.name
        this.hpCurrent = att.hp
        this.hpTotal = att.hp
        this.dmg = att.dmg
        this.armor = att.armor
        this.enemyImg = att.enemyImg
        this.strength = att.strength
        this.dexterity = att.dexterity
        this.constitution = att.constitution
        this.tempArmor = 0
    }

    
}
let slime = new Enemy({
   enemyId: 0,
   name: 'Slime',
   strength: 2,
   dexterity: 3,
   constitution: 5,
   hp: 14,
   dmg: 2,
   armor: 12,
   enemyImg: 'assets/purple_blob.png'
})

let goblin = new Enemy({
    enemyId: 1,
    name: 'Goblin',
    strength: 2,
    dexterity: 4,
    constitution: 1,
    hp: 8,
    dmg: 4,
    armor: 14,
    enemyImg: 'assets/goblin.png'
 })
const enemyArr = [slime, goblin]

//          Combat Functions
let turnCount = 0
let combat = false
function combatStart(){
    let newEnemy = JSON.parse(JSON.stringify(enemyArr[roomArr[player.room].enemyPresent]))
    enemy.push(newEnemy)
    document.getElementById("fightScreen").style.display = ''
    document.getElementById("roomOption1").onclick = attack
    document.getElementById("roomOption1").innerHTML = `Attack!`
    document.getElementById("roomOption2").onclick = defend
    document.getElementById("roomOption2").innerHTML = `Build Power!`
    document.getElementById("roomOption3").onclick = ''
    document.getElementById("roomOption3").innerHTML = `Power Attack!`
    document.getElementById("roomOption3").style.color = 'grey'
    document.getElementById("roomOption4").onclick = ''
    document.getElementById("roomOption4").innerHTML = ``
    document.getElementById("roomOption5").onclick = ''
    document.getElementById("roomOption5").innerHTML = ``
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor}`
    document.getElementById("enemyAttack").innerHTML = `${enemy[0].dmg}`
    document.getElementById("enemyName").innerHTML = `${enemy[0].name}`
    document.getElementById('enemyImg').src = `${enemy[0].enemyImg}`
    document.getElementById('enemyHealthImg').src = "assets/heart pixel art.png"
    document.getElementById('enemyDefenseImg').src = 'assets/Shield1.png'
    document.getElementById('enemyAttackImg').src = 'assets/sword_small (1).png'
    combat = true
}
function combatEnd(){
    roomText()
    enemy = []
    turnCount = 0;
    document.getElementById("fightScreen").style.display = 'none'
     document.getElementById("combatLog").innerHTML = ''
     document.getElementById("playerLog").innerHTML = ''
     document.getElementById('enemyImg').src = ''
     document.getElementById("enemyHealth").innerHTML = ''
     document.getElementById("enemyDefense").innerHTML = ''
     document.getElementById("enemyAttack").innerHTML = ''
     document.getElementById("enemyName").innerHTML = ''
     document.getElementById('enemyHealthImg').src = ''
     roomArr[player.room].enemyPresent = null;
     document.getElementById("roomOption1").onclick = option1
     document.getElementById("roomOption2").onclick = option2
     document.getElementById("roomOption3").onclick = option3
     document.getElementById("roomOption4").onclick = option4
     document.getElementById("roomOption5").onclick = option5
     document.getElementById("roomOption3").style.color = 'black'
     document.getElementById('enemyHealthImg').src = ''
     document.getElementById('enemyDefenseImg').src = ''
     document.getElementById('enemyAttackImg').src = ''
    player.tempArmor = 0 ;
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    combat = false;

}
function attack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You hit, dealing ${hit} damage!`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed!`
    }
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
   
}
function defend(){
    if(player.tempArmor<4){
    player.tempArmor += 1
    document.getElementById("playerLog").innerHTML = `You build up power!`
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else if(player.tempArmor === 4){
        player.tempArmor += 1
        document.getElementById("playerLog").innerHTML = `You've built up as much power as you can!`
        document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    } else{
        document.getElementById("playerLog").innerHTML = `You try to build up more power, but fail!`
    }
    document.getElementById("roomOption3").onclick = powerAttack
    document.getElementById("roomOption3").style.color = 'black'
    turnCount++
    enemyTurn()
    
}
function powerAttack(){
    let roll = Math.floor(Math.random()* 21)+player.dexterity
    if(roll >= enemy[0].armor){
        let hit =  Math.floor(Math.random()* player.dmg)+player.strength+player.tempArmor
        enemy[0].hpCurrent -= hit
        document.getElementById("playerLog").innerHTML = `You unleash your power, dealing ${hit} damage!`
        document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal}`
    }else {
        document.getElementById("playerLog").innerHTML = `You missed, expending your stored power harmlessly!`
    }
    player.tempArmor = 0
    document.getElementById("cSheetArmor").innerHTML = `${player.armor+player.tempArmor}`
    document.getElementById("enemyHealth").innerHTML = `${enemy[0].hpCurrent}/${enemy[0].hpTotal} `
    if(enemy[0].hpCurrent <= 0){
        combatEnd()
    }else{
        turnCount++
        enemyTurn()
    }
}
let enemy = []
function enemyTurn(){
    let action = Math.floor(Math.random()* 3)
    if(action === 0){
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }else if(action === 1 && enemy[0].tempArmor<5){
        if(enemy[0].tempArmor<4){
            enemy[0].tempArmor += 1
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} builds up power!`
            document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            } else if(enemy[0].tempArmor === 4){
                player.tempArmor += 1
                document.getElementById("combatLog").innerHTML = `${enemy[0].name} has built up as much power as they can!`
                document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
            }
    }else if(action === 2 && enemy[0].tempArmor>0){
    let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
    if(roll >= player.armor){
        let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength+enemy[0].tempArmor
        player.hpCurrent -= hit
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} unleashes its power, dealing ${hit} damage!`
    }else {
        document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed, expending its stored power harmlessly!`
    }
    enemy[0].tempArmor = 0
    document.getElementById("enemyDefense").innerHTML = `${enemy[0].armor+enemy[0].tempArmor}`
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal} `
    } else{
        let roll = Math.floor(Math.random()* 21)+enemy[0].dexterity
        if(roll >= player.armor){
            let hit =  Math.floor(Math.random()* enemy[0].dmg)+enemy[0].strength
            player.hpCurrent -= hit
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} hit, dealing ${hit} damage!`
            document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`
        }else {
            document.getElementById("combatLog").innerHTML = `${enemy[0].name} missed!`
        }
    }
}
//          Player init
let player = {
    name: nameInput,
    strength: 5,
    dexterity: 4,
    constitution: 3,
    hpCurrent: 10,
    hpTotal: 10,
    armor: 15,
    tempArmor: 0,
    dmg: 4,
    room: 0,
    inventory: []
}


// Button Functionality
function option1(){
    roomArr[player.room].optionOne()
}
function option2(){
    roomArr[player.room].optionTwo()
}
function option3(){
    roomArr[player.room].optionThree()
}
function option4(){
    roomArr[player.room].optionFour()
}
function option5(){
    roomArr[player.room].roomInteract()
}
function saveGame(){
    localStorage.setItem('user', JSON.stringify(player))
    let exploredRooms = []
    let combatRooms = []
    let lootedRooms = []
    let inventory = []
    player.inventory.forEach((item) =>{
        inventory.push(item.itemId)
    })
    roomArr.forEach((room) => {
        if(room.explored === true){
            exploredRooms.push(room.roomId)
            combatRooms.push(room.roomId)
            if(room.treasurePresent === null){
            lootedRooms.push(room.roomId)
            }
        } 
    });
    localStorage.setItem('exploredRooms', exploredRooms.toString(','))
    localStorage.setItem('combatRooms', combatRooms.toString(','))
    localStorage.setItem('lootedRooms', lootedRooms.toString(','))
    localStorage.setItem('items', inventory.toString(','))
}
function loadGame(){
    document.getElementById(roomArr[player.room].mapId).style.border = null
    player = JSON.parse(localStorage.getItem('user'))
    let exploredRooms = localStorage.getItem('exploredRooms').split(',')
    let combatRooms = localStorage.getItem('combatRooms').split(',')
    let lootedRooms = localStorage.getItem('lootedRooms').split(',')
    let items = localStorage.getItem('items').split(',')
    roomText()
    document.getElementById("cSheetHealth").innerHTML = `${player.hpCurrent}/${player.hpTotal}`;
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white';
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black';
    document.getElementById("cSheetStatField1").innerHTML = `${player.strength}`;
    document.getElementById("cSheetStatField2").innerHTML = `${player.dexterity}`;
    document.getElementById("cSheetStatField3").innerHTML = `${player.constitution}`;
    document.getElementById("cSheetArmor").innerHTML = `${player.armor}`;
    document.getElementById("cSheetWeapon").innerHTML = `${player.dmg}`;
    document.getElementById("playerName").innerHTML = `${player.playerName}`;
    document.getElementById("roomIdTester").innerHTML = `${player.room}`
    roomArr[player.room].enemyPresent = null
    exploredRooms.forEach((id) => {
            document.getElementById(roomArr[id].mapId).style.backgroundColor = 'black'
            roomArr[id].explored = true
    });
    combatRooms.forEach((id) => {
        roomArr[id].enemyPresent = null
    });
    lootedRooms.forEach((id) => {
        roomArr[id].treasurePresent = null
    });
    player.inventory = []
    items.forEach((item) =>{
        itemArr[item].loot()
    });

        
}
        
function Button () {
    nextFloor()
        // document.querySelectorAll("video, audio").forEach( elem => muteMe(elem) );

    // document.getElementById("roomOption2").onclick = stat1Increment
    // document.getElementById("combatLog").innerHTML = `${enemy[0].name} Attacks!}`
    combatEnd()
//     gameStart();
    // printStory(printLetterByLetter());
    // printLetterByLetter("storyTest", gameIntro);
    // nextFloor()
    // let img = slime.enemyImg
    // document.getElementById('enemyImg').src = `${img}`
    // itemArr[0].loot()
    // itemArr[0].loot()
    // let one = 1
    // let test = `item${one}`
    // document.getElementById(test).src = itemArr[0].imgSrc
//     if(toggle === false){
//     document.getElementById("tester").innerHTML = "New text!";
//     toggle = true
// } else {
//     document.getElementById("tester").innerHTML = null;
//     toggle = false
// }
// document.getElementById("testTest").innerHTML = toggle;
}
//  console.log('test')


//Story Section Starts here



storyArray= ['As a simple farm hand in the land of Lambastia, your daily life is full of heavy chores and physical labour. You know there must be more to life. You crave adventure, admiration and most of all...riches!', 
            
        'Once in a blue moon in the lands of Lambastia, there is a competition to determine a new leader. It is a matter of learning agility determined through a battle of wills. Every eligible person is welcome to the Ternary Estate to compete.',

        'Today is your turn to compete! You walk into the Estate to find a standalone building with a door. Nervous, but ready to prevail, you enter the first room. You see a table with a single candle in the darkness...a note that reads “who are you?”',

        // Name form appears, player enters name, presses next to continue story.
        , ]





const gameIntro = 'As a simple farm hand in the land of Lambastia, your daily life is full of heavy chores and physical labour. You know there must be more to life. You crave adventure, admiration and most of all...riches!';

const gameIntro2 = 'Once in a blue moon in the lands of Lambastia, there is a competition to determine a new leader. It is a matter of learning agility determined through a battle of wills. Every eligible person is welcome to the Ternary Estate to compete.';

//end of Intro

const room1Intro = 'Today is your turn to compete! You walk into the Estate to find a standalone building with a door. Nervous, but ready to prevail, you enter the first room. You see a table with a single candle in the darkness...a note that reads “who are you?”';

const room1Outro = 'After you finished writing on the note, the flame grew to show a door in the rear of the room. You continue onward.';

//end of room 1

const room2Intro = 'As you enter into the dimly lit room you notice an enemy spawns! They raise their sword high and begin running towards you!';

const room2Dialogue = '“You dare enter the home of Isa Capital! If you attempt to continue this journey she will destroy you!!” You brace yourself to begin your first battle. “Let me do you a kindness and end your journey before it starts!”';

const room2HeroDialogue = '“I will let nothing keep me from accolades for my valour! … move or... DIE!”';

const room2Outro = 'You did it! After fighting such a courageous battle, you notice a chest towards the back of the room by the next door. Do you dare look inside?';

//end of room 2

const room3Intro = 'You enter the next room to find another monster emerging from the darkness! “I cannot let you pass, she will kill you.. It is best to submit now”';

const room3HeroDialogue = 'Riding the high from your previous victory, you start to run towards the monster. “I do not believe in submission!”';

const room3Outro = 'These monsters are no match for you! It is almost like you were BORN for this!';

//end of room 3

const room4Intro = 'You walk into the next room and see a frail woman packaging goods from a large sack. “Only a few will survive, but you seem keen on not giving up. I have some goods to help assist you through your journey.”';

const room4Outro = '“Ah it is nice to have a moment of goodwill, thank you friend.” After a refreshing moment, you walk through the next door.';

//end of room 4

const room5Intro = 'As you walk through the room, you notice a monster spotting you while it is munching on what looks like a human arm... “Another snack! How I do love when your country sends me its finest desserts.”';

const room5HeroDialogue = '“I cannot let such a vile creature exist, how dare you dine on the flesh of the living?!”';

const room5Outro = 'You take a moment of silence for the eaten comrade and keep pushing onward.';

//end of room 5

const room6Intro = 'You notice that this room is darker than normal...and too quiet...you stop in the middle of the room to feel the hairs on your neck standing straight up. Something is breathing down your neck! A monster gut punches you from behind and you let you a shallow gasp.';

const room6Outro = 'You barely make it out alive, but you are able to continue exploring. The dungeon is more tricky than you originally thought, but you remember that your willpower is stronger than anything that the dungeon could throw at you! You continue onward.';

//end of room 6

const room7Intro = 'While entering the next room, you hear something crying hysterically. You find a monster rocking back and forth in a fetal position...how strange... “Isa? Is that you? May I leave now? … YOU’RE NOT ISA, JUST FINALLY LET ME OUT!!”';

const room7Outro = '“I do not know what you speak of, let me pass or meet my blade!” The monster runs to a dark corner and lets you pass to the next room.';

//end of room 7

const room8Intro = 'You enter this room to find the same kind soul that assisted you earlier pouring water from a gourd this time. You see blankets and a bed of hay. “Here, here have some well water and take a rest my friend.”';

const room8Outro = '“I have grown weary...” You fall into a deep slumber. Dreams of the farm you call home dance through your head. You wonder if you made a mistake going into the dungeon, but then your dream shifts to a castle with you as the leader of Lambastia! You awake invigorated and thank the kind woman for her help. You are ready to dive deeper into the dungeon.';

//end of room 8

const room9Intro = 'You enter this room itching for a battle. You scan the room and see a chest shining under a torch. As you move towards the chest, you see something out of the corner of your eye...“I have seen the likes of you far too many times.. What makes you worthy?”';

const room9HeroCry = '“I WILL NEVER GIVE UP!”';

//Enemy re-spawns larger than before

const room9AfterCombat = 'You wipe the sweat from your brow and throw your fist toward the ceiling in victory. As you walk towards the chest to finally see what is inside, you hear a rumble behind you. “I said WHAT MAKES YOU WORTTTHHYYY!”';

const room9BeforeCombat2 = '“Oh, my” … You steady your hands and inhale. Are you ready for round 2?';

const room9AfterCombat2 = 'What a battle! You are feeling stronger than ever as you loot the shining chest. It’s a KEY! You notice that you hear something in the distance as you walk towards the next door.';

//end of room 9

const room10Intro = 'You open the door slowly and notice the silhouettes of other adventurers in the dark corners of the room. You hear an absolutely sinister laugh growing louder and louder while the silhouettes are sobbing. What in the world have you gotten yourself into?';

const room10HeroDialogue = '“What have you done?!”';

//Re-spawns 2 times with larger health each time and the background sounds increases with each life bar.

const room10Outro = 'Once the beast has been defeated, you notice a light growing stronger in the room. You feel your strength growing even more! You help the other adventurers escape through the door you came in, and then you scan the room. You see a rather large chest beside a staircase leading deeper into the dungeon...will you go to the next level? What will await you there?';

//end of room 10 and floor 1

//Story Functions

// function gameStart(){
// // document.getElementById("storyTest").innerHTML = `${gameIntro} <br> ${gameIntro2}`;
// printLetterByLetter("charInput", gameIntro);
// }

let nextButton=document.getElementById("nextButton");

function printLetterByLetter(destination, message){ //message = variable
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, 70);
}

function storyStart(){
    text.innerHTML = null;
    printLetterByLetter("charInput", storyArray[0]);
    storyArray.shift();
};


nextButton.addEventListener("click", storyStart);

const nameInput = document.querySelector('pName');

function getName(){
    document.write(`Hello ${player.name}! What class are you?`);
    classChoice();
}

function classChoice(e){
const warriorClass = document.querySelector("button.warrior");
const rangerClass = document.querySelector("button.ranger");
const rogueClass = document.querySelector("button.rogue");

if(e.target === warriorClass){
    warrior();
} else if (e.target === rangerClass){
    ranger();
} else if (e.target === rogueClass){
    rogue();
}
}

function warrior(){

return 'Ah yes! You are a warrior bound by your brute strength and will to succeed. Welcome.';
}

function ranger(){
return 'Ah yes! You are a ranger tied to the forest with your trusty shortbow at your side. Welcome.';
}

function rogue(){
return 'Ah yes! You are a rogue, an assassin of the night, with your small blade to destroy anything in your path. Welcome.';
}
