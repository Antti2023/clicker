let resourceCount = 0;
let cursorCount = 0;
let cursorCost = 10; 
let grandmaCount = 0;
let grandmaCost = 100;
let farmCount = 0;
let farmCost = 10000;
let gameInterval; 

function handleClick() {
    resourceCount++;
    updateDisplay();
}

function buyCursor() {
    if (resourceCount >= cursorCost) { 
        cursorCount++; 
        resourceCount -= cursorCost; 
        cursorCost = Math.ceil(cursorCost * 1.1); 
        updateDisplay();
        startCursor(); 
    } else {
        alert("Not enough resources to buy cursor!");
    }
    
}

function startCursor() {
    setInterval(function() {
        resourceCount += cursorCount; 
        updateDisplay();
    }, 10000); 
}
function buyGrandma() {
    if (resourceCount >= grandmaCost) { 
        grandmaCount++; 
        resourceCount -= grandmaCost; 
        grandmaCost = Math.ceil(grandmaCost * 1.1); 
        updateDisplay();
        startGrandma(); 
    } else {
        alert("Not enough resources to buy grandma!");
    }
}

function startGrandma() {
    setInterval(function() {
        resourceCount += grandmaCount; 
        updateDisplay();
    }, 1000); 
}
function buyFarm() {
    if (resourceCount >= farmCost) {
        farmCount++;
        resourceCount -= farmCost; 
        farmCost = Math.ceil(farmCost * 1.1);
        updateDisplay(); 
        startFarm();
    } else {
        alert("Not enough resources to buy farm!")
    }
}
function startFarm() {
    setInterval(function() {
        resourceCount += farmCount; 
        updateDisplay();
    }, 500); 

}
function saveGame() {
    let gameData = {
        resourceCount: resourceCount,
        cursorCount: cursorCount,
        cursorCost: cursorCost,
        grandmaCount: grandmaCount,
        grandmaCost: grandmaCost,
        farmCount: farmCount,
        farmCost: farmCost
    };

    localStorage.setItem('clickerGameData', JSON.stringify(gameData));
    alert("Game saved successfully!");
}
function loadGame() {
    let savedData = localStorage.getItem('clickerGameData');
    if (savedData) {
        let parsedData = JSON.parse(savedData);
        resourceCount = parsedData.resourceCount;
        cursorCount = parsedData.cursorCount;
        cursorCost = parsedData.cursorCost;
        grandmaCount = parsedData.grandmaCount;
        grandmaCost = parsedData.grandmaCost;
        farmCount = parsedData.farmCount;
        farmCost = parsedData.farmCost;
        updateDisplay();
        alert("Game loaded successfully!");

        
        startCursor();
        startGrandma();
        startFarm();
    } else {
        alert("No saved game found!");
    }
}

function stopGame() {
    clearInterval(gameInterval); 
    resourceCount = 0; 
    cursorCount = 0; 
    cursorCost = 10; 
    grandmaCount = 0; 
    grandmaCost = 100; 
    farmCount = 0;
    farmCost = 10000; 
    updateDisplay(); 
}

function updateDisplay() {
    let resourceCountElement = document.getElementById("resource-count");
    let cursorCountElement = document.getElementById("cursor-count");
    let cursorCostElement = document.getElementById("cursor-cost");
    let grandmaCountElement = document.getElementById("grandma-count");
    let grandmaCostElement = document.getElementById("grandma-cost");
    let farmCountElement = document.getElementById("farm-count");
    let farmCostElement = document.getElementById("farm-cost");

    resourceCountElement.textContent = resourceCount;
    cursorCountElement.textContent = cursorCount;
    cursorCostElement.textContent = cursorCost;
    grandmaCountElement.textContent = grandmaCount;
    grandmaCostElement.textContent = grandmaCost;
    farmCountElement.textContent = farmCount;
    farmCostElement.textContent = farmCost;
}

updateDisplay();