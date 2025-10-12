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
weapons = [{ name: "stick", power: 5 },
           { name: "dagger", power: 30 },
           { name: "claw hammer", power: 50 },
           { name: "sword", power: 100 }];
monsters = [{name: "dragon", level: 20, health: 300},];
locations = [
    {
        name: "town square",
        "button text": ["Go to store", "Go to cave", "Fight dragon"],
        "button functions": [goStore, goCave, fightDragon],
        text: "You are in the town square. You see a sign that says \"Store\"."
    },
    {
        name: "store","button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"], "button functions": [buyHealth, buyWeapon, goTown], text: "You enter the store."
    },
    {
        name: "cave",
        "button text": ["Fight dragon", "Fight dragon", "Go to town square"],
        "button functions": [fightDragon, fightDragon, goTown],
        text: "You enter the cave. You see some monsters."
    },

]

//initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText =location["button text"][1];
    button3.innerText =location["button text"][2];
    button1.onclick =location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
   update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function fightDragon() {
    console.log("Fighting the dragon");
}

function buyHealth() {
    console.log("Buying health");
}

function buyWeapon() {
    console.log("Buying weapon");
}

