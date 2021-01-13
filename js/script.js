// DOM EVENTS - Event Listeners
// Careful when using actions on arrays, make sure to specify which element

var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function() {
button.addEventListener("mouseenter", function () {
    console.log("Clicked!!")
})

// Chache-ing so that it is saved for further use, instead of recalling
var input = document.getElementById("user-input"); // Input grabbed before enter button
var enter = document.getElementById("enter"); // Enter button
var ul = document.querySelector("ul"); // Selects first ul found and saves it as a var
// var deleteButton = document.getElementsByClassName("button");
var li = document.getElementsByTagName("li");

// COURSE EXERCISES
// Function that measures element length (purpose: to block blanks from being added)
function inputLength() {
    return input.value.length;
}

// Function that adds input values as a list item
function createListElement() {
    console.log(input.value); // Displays the input fields value in console
    var li = document.createElement("li"); // creates a var for a list item
    li.appendChild(document.createTextNode(input.value)); // saves the input value to the li defined before
    ul.appendChild(li); // saves the li (with new value) as another child under the ul var defined before
    input.value = ""; // Clears the input

    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li.appendChild(btn);
    btn.onclick = removeParent;
}

// Function that combines above functions and improves readability (adds with click)
function addListAfterClick() {
    if (inputLength() > 0) {  // Blocks blanks from being added
        createListElement();
    }
}

// Function that combines above functions and improves readability (adds with enter)
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

// Event listeners that adds inputs
//Callback function - they do not have addListAfter_(), because the function will only be called if the event occurs,
//then the ()'s are added automatically.
enter.addEventListener("click",addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)

// COURSE CHALLENGE
//------------------------------------------------------------------------------
ul.onclick=function(event){
    var target=event.target;
    target.classList.toggle("done");
}

function listLength(){
    return li.length;
}

function deleteButton(){
    var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("Delete!"));
    li[i].appendChild(btn);
    btn.onclick=removeParent;
}

for(i=0;i<listLength();i++){

    deleteButton();
}

function removeParent(evt){
    evt.target.parentNode.remove();
}