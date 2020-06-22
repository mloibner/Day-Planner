//Displays todays date in correct format in jumbotron
const todaysDate = $('#currentDay');
todaysDate.append(moment().format('dddd, MMMM Do'));
console.log(todaysDate)

//Variables for time created
let hourTime = $(".input-group-text");
console.log(hourTime);
let realTime = moment().format("hA");
console.log(realTime);

//Variables for background of text color and save button and text
let textBackground = $('.form-control');
let saveBtn = $('.saveBtn');
let inputText = [];

//To change background color of text input
function colorChanger() {
    for (let i = 0; i < hourTime.length; i++) {
        let timeMatch = parseInt($(hourTime[i]).text());
        if (realTime === timeMatch) {
            $(textBackground[i]).addClass("present");
        } else if (realTime > timeMatch) {
            $(textBackground[i]).addClass("past");
        } else {
            $(textBackground[i]).addClass("future");
        }
    }
}

//To save the text to local storage when save clicked and retrieve on refresh. 
let textText = JSON.parse(localStorage.getItem('inputText'));
if (!textText) {
    textText = [];
}

saveBtn.on("click", function (event) {
    event.preventDefault();
    inputText.push({
        value: inputText[this.id].value,
        id: this.id
    })
    localStorage.setItem("timeBlockNotes", JSON.stringify(inputText));

    for (let i = 0; i < inputText.length; i++){
        let savedInfo = inputText[i].savedInfo;
    }
})

colorChanger();
