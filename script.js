//Displays todays date in correct format in jumbotron
const todaysDate = $('#currentDay');
todaysDate.append(moment().format('dddd, MMMM Do'));
console.log(todaysDate)

//Variables for time created
let hourTime = $(".input-group-text");
console.log(hourTime);
let realTime = moment().hours();
console.log(realTime);

//Variables for background of text color and save button and text
let textBackground = $('.form-control');
let saveBtn = $('.saveBtn');
let textInput = $(".textInput")

//To change background color of text input

$('.textInput').each(function(){
    let dataAttVal = +$(this).attr('data-time')
         
    if (realTime === dataAttVal) {
        console.log(realTime);
        console.log(dataAttVal);
        $(this).addClass("present");
    }
    if (realTime < dataAttVal){
        $(this).addClass("future");
    }
    if (realTime > dataAttVal){
        $(this).addClass("past")
    }
})

//To save the text to local storage when save clicked and retrieve on refresh. 

//This code is working and has been tested in the console
saveBtn.on("click", function (event) {
    console.log('click')

    event.preventDefault();
    const current = $(this).attr("data-time");
    console.log(current)

    localStorage.setItem(current, $("#" + current).val());
})
//This code is also tested and working
$('.textInput').each(function(){

    const viewInput = $(this).attr('id');
    const partTwo = localStorage.getItem(viewInput);
    
    $(this).val(partTwo)
})


