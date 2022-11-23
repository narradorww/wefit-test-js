
let nav = document.getElementsByClassName('btn-group-vertical')[0];
nav.style.display= "flex"
nav.style.flexDirection= "row"
nav.style.justifyContent= "space-evenly"
nav.style.alignItems= "center"
nav.style.width= "70%"
nav.style.height= "100%"



let buttons = document.getElementsByClassName('btn btn-secondary');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.padding= "0"
    buttons[i].style.display= "flex"
    buttons[i].style.flexDirection= "column"
    buttons[i].style.justifyContent= "center"
    buttons[i].style.alignItems= "center"
    buttons[i].style.width= "100%"
    buttons[i].style.fontSize= "1em"
    buttons[i].style.margin= "12px"
    
}

let header = document.getElementsByClassName("jumbotron")[0];
header.style.color = "white"
header.style.background = "#343a40"
header.style.display = "flex"
header.style.flexDirection = "column"
header.style.alignItems = "flex-end"

let headerLine = document.getElementsByClassName("my-4")[0];
headerLine.style.color = "white"
headerLine.style.background = "white"
headerLine.style.width = "100%"
headerLine.style.height = "1px"


let headerText = document.getElementsByClassName("lead")[0];
headerText.style.display = "flex"
headerText.style.flexDirection = "column"
headerText.style.justifyContent = "flex-end"

let button = document.getElementsByClassName("btn btn-primary btn-lg")[0];
button.style.background = "#28a745"
button.style.border = "none"
button.style.width = "200px"

let cards = document.getElementsByClassName("col-lg-3");
let card1 = cards[0];
let card2 = cards[1];
let card3 = cards[2];
let card4 = cards[3];
card1.style.order = "2"
card2.style.order = "3"
card3.style.order = "4"
card4.style.order = "1"

letList = document.getElementsByClassName("list-group-item");
letList[2].insertAdjacentHTML('afterend', '<li class="list-group-item">Quarto Item</li>');
letList[3].insertAdjacentHTML('afterend', '<li class="list-group-item">Quinto Item</li>');









