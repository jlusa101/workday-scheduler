var currentDay = $("#currentDay");
var hour = 9;
var todaysDate = moment().toDate();
var currentTime = moment().toDate().getTime();


// Setting the current day to be shown to user while in browser
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));



// $(document).ready(function() {
//     setInterval(updateTime, 1000);
// })