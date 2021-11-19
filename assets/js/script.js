var currentDay = $("#currentDay");
var hour = 9;
var todaysDate = moment().toDate();
var currentTime = moment().toDate().getTime();


// Setting the current day to be shown to user while in browser
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

// Function that checks time and changes the background color of past, current, and future hours
$(".container").find("textarea").each(function() {
    currentTime = moment().toDate().getTime();
    currentTime = moment(currentTime).format("H");
    currentTime = parseInt(currentTime);

    if (hour < currentTime) {
        $(this).css("background-color", "#C0C0C0");
    } else if (hour === currentTime) {
        console.log("INSIDE HOUR === CURRENTIME");
        $(this).css("background-color", "#FF0000");
    } else if (hour > currentTime) {
        $(this).css("background-color", "#00FF00");
    }

    hour++;
})

// $(document).ready(function() {
//     setInterval(updateTime, 1000);
// })