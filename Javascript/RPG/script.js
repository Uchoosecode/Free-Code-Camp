xp = 0;
 health = 100;
 gold = 50;
 currentWeapon = 0;
 fighting = 0;
 monsterHealth = 0;
 inventory = ["stick"];

 button1 = document.querySelector("#button1");
 button2 = document.querySelector("#button2");
 button3 = document.querySelector("#button3");
 text = document.querySelector("#text");
 xpText = document.querySelector("#xpText");
 healthText = document.querySelector("#healthText");
 goldText = document.querySelector("#goldText");
 monsterStats = document.querySelector("#monsterStats");
 monsterName = document.querySelector("#monsterName");
 monsterHealthText = document.querySelector("#monsterHealthText");


//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goStore() {
    console.log("Going to the store");
}

function goCave() {
    console.log("Going to the cave");
}

function fightDragon() {
    console.log("Fighting the dragon");
}