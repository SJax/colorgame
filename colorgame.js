var hardRow = true;
var colorButton1Obj = { isTheOne: false };
var colorButton2Obj = { isTheOne: false };
var colorButton3Obj = { isTheOne: false };
var colorButton4Obj = { isTheOne: false };
var colorButton5Obj = { isTheOne: false };
var colorButton6Obj = { isTheOne: false }; 
var randomPick = 0;
var colorButton1 = document.querySelector("#colorButton1");
var colorButton2 = document.querySelector("#colorButton2");
var colorButton3 = document.querySelector("#colorButton3");
var colorButton4 = document.querySelector("#colorButton4");
var colorButton5 = document.querySelector("#colorButton5");
var colorButton6 = document.querySelector("#colorButton6");
var colorButtons = [colorButton1, colorButton2, colorButton3, colorButton4, colorButton5, colorButton6];
var newColorsButton = document.querySelector("#newColorsButton");
var majorHeader = document.querySelector("#majorHeader");
var successOrNot = document.querySelector("#successOrNot");
var gameHeader = document.querySelector("#gameHeader");
var diffHardSelection = document.querySelector("#hardDiff");
var diffEasySelection = document.querySelector("#easyDiff");
diffHardSelection.addEventListener("click", handleHardDiffSelection);
diffEasySelection.addEventListener("click", handleEasyDiffSelection);
colorButton1.addEventListener("click", function(){checkIfCorrectColorButton(colorButton1Obj.isTheOne, colorButton1)});
colorButton2.addEventListener("click", function(){checkIfCorrectColorButton(colorButton2Obj.isTheOne, colorButton2)});
colorButton3.addEventListener("click", function(){checkIfCorrectColorButton(colorButton3Obj.isTheOne, colorButton3)});
colorButton4.addEventListener("click", function(){checkIfCorrectColorButton(colorButton4Obj.isTheOne, colorButton4)});
colorButton5.addEventListener("click", function(){checkIfCorrectColorButton(colorButton5Obj.isTheOne, colorButton5)});
colorButton6.addEventListener("click", function(){checkIfCorrectColorButton(colorButton6Obj.isTheOne, colorButton6)});
newColorsButton.addEventListener("click", init);

function getRandomColors() {
    return Math.floor(Math.random() * 256);
}

function assignRandomColor(colorButtonObj, colorButton) {
    colorButtonObj.red = getRandomColors();
    colorButtonObj.green = getRandomColors();
    colorButtonObj.blue = getRandomColors();
    colorButtonObj.isTheOne = false;
    colorButton.style.backgroundColor = "rgb(" + colorButtonObj.red + ", " + colorButtonObj.green + ", " + colorButtonObj.blue +")";
}

function changeButtonColor(red, green, blue, colorButton) {
    colorButton.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
}

function getRandomPick() {
    //if hardRow then pick random number 1 through 6
    //otherwise pick random number 1 through 3
    // and assign it to randomPick
    if (hardRow) {
        randomPick = Math.floor(Math.random() * 6);
    } else {
        randomPick = Math.floor(Math.random() * 3);
    }
}

function checkIfCorrectColorButton(isThisTheOne, colorButton) {
    // set successOrNot text depending on whether correct guess was made or not
    if (isThisTheOne) {
        // set the text to You win
        successOrNot.textContent = "You Win!";
        winnerPickedChangeColors();
        newColorsButton.textContent = "Play Again!";
        disableGameButtons();
    } else {
        // set the text to try again
        successOrNot.textContent = "Try Again!";
        colorButton.disabled = true;
        colorButton.style.backgroundColor = "black";
        colorButton.style.border = "none";
    }
}

function handleHardDiffSelection() {
    if (!hardRow) {
        colorButton4.style.display = "inline";
        colorButton5.style.display = "inline";
        colorButton6.style.display = "inline";
        hardRow = true;
        diffHardSelection.classList.add("selected");
        diffEasySelection.classList.remove("selected");
        init();
    }
}

function handleEasyDiffSelection() {
    if (hardRow) {
        colorButton4.style.display = "none";
        colorButton5.style.display = "none";
        colorButton6.style.display = "none";
        hardRow = false;
        diffEasySelection.classList.add("selected");
        diffHardSelection.classList.remove("selected");
        init();
    }
}

function changeButtonColorsTo(colorBtnObj, caseNum) {
    var red = colorBtnObj.red;
    var green = colorBtnObj.green;
    var blue = colorBtnObj.blue;
    for (let i = 0; i < colorButtons.length; i++) {
        if (i != caseNum && i < 3) {
            changeButtonColor(red, green, blue, colorButtons[i]);
        } else if (i != caseNum && hardRow) {
            changeButtonColor(red, green, blue, colorButtons[i]);
        }
    }
    gameHeader.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function winnerPickedChangeColors() {
    switch(randomPick) {
        case 0:
            changeButtonColorsTo(colorButton1Obj, 0);
            break;
        case 1:
            changeButtonColorsTo(colorButton2Obj, 1);
            break;
        case 2:
            changeButtonColorsTo(colorButton3Obj, 2);
            break;
        case 3:
            changeButtonColorsTo(colorButton4Obj, 3);
            break;
        case 4:
            changeButtonColorsTo(colorButton5Obj, 4);
            break;
        case 5:
            changeButtonColorsTo(colorButton6Obj, 5);
            break;
    }
}

function disableGameButtons() {
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].disabled = true;
        colorButtons[i].style.border = "outset";
        colorButtons[i].style.borderWidth = "2px";
    }
}

function enableGameButtons() {
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].disabled = false;
        colorButtons[i].style.border = "outset";
        colorButtons[i].style.borderWidth = "2px";
    }
}
    
function assignRandomColors() {
    assignRandomColor(colorButton1Obj, colorButton1);
    assignRandomColor(colorButton2Obj, colorButton2);
    assignRandomColor(colorButton3Obj, colorButton3);
    if (hardRow) {
        assignRandomColor(colorButton4Obj, colorButton4);
        assignRandomColor(colorButton5Obj, colorButton5);
        assignRandomColor(colorButton6Obj, colorButton6);
    } 
}

function writeWinningColorToGameHeader() {
    switch(randomPick) {
        case 0:
            // get RGB color coords from colorButton1 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton1Obj.red + ", " + colorButton1Obj.green + ", " + colorButton1Obj.blue + ")";
            colorButton1Obj.isTheOne = true;
            break;
        case 1:
            // get RGB color coords from colorButton2 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton2Obj.red + ", " + colorButton2Obj.green + ", " + colorButton2Obj.blue + ")";
            colorButton2Obj.isTheOne = true;
            break;
        case 2:
            // get RGB color coords from colorButton3 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton3Obj.red + ", " + colorButton3Obj.green + ", " + colorButton3Obj.blue + ")";
            colorButton3Obj.isTheOne = true;
            break;
        case 3:
            // get RGB color coords from colorButton4 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton4Obj.red + ", " + colorButton4Obj.green + ", " + colorButton4Obj.blue + ")";
            colorButton4Obj.isTheOne = true;
            break;
        case 4:
            // get RGB color coords from colorButton5 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton5Obj.red + ", " + colorButton5Obj.green + ", " + colorButton5Obj.blue + ")";
            colorButton5Obj.isTheOne = true;
            break;
        case 5:
            // get RGB color coords from colorButton6 and write it to #majorHeader
            majorHeader.textContent = "RGB(" + colorButton6Obj.red + ", " + colorButton6Obj.green + ", " + colorButton6Obj.blue + ")";
            colorButton6Obj.isTheOne = true;
            break;
    }
}

function init() {
    // if easy random pick of colorButton1,2, or 3 for the color to post the rgb coordinates to the text on game header board
    // if hard then random pick of colorButton1,2,3,4,5, or 6
    getRandomPick();

    assignRandomColors();

    writeWinningColorToGameHeader();
    //reset the bacground color of the gameHeader to cornflower blue
    gameHeader.style.backgroundColor = "#6495ED";
    
    successOrNot.textContent = "Guess the Color!";
    newColorsButton.textContent = "New Colors";
    // make sure all the color guess game buttons are enabled
    enableGameButtons();
}

init();

