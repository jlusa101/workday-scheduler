var currentDay = $("#currentDay");
var hour = 9;
var todaysDate = moment().toDate();
var currentTime = moment().toDate().getTime();
var taskId = 0;
var tasksOfTheDay = [];

// Setting the current day to be shown to user while in browser
currentDay.text(moment(todaysDate).format("dddd, MMMM Do YYYY"));

// Function that checks time and changes the background color of past, current, 
// and future time blocks
$(".container").find("textarea").each(function() {

    // getting the current time
    currentTime = moment().toDate().getTime();
    // Formatting current time to 24 hour clock
    currentTime = moment(currentTime).format("H");
    // Converting the string time to an integer time
    currentTime = parseInt(currentTime);

    // Adjusting background colors on each time block to reflect what's past, 
    // current, and future
    if (hour < currentTime) {
        $(this).css("background-color", "#C0C0C0");
    } else if (hour === currentTime) {
        $(this).css("background-color", "#FF0000");
    } else if (hour > currentTime) {
        $(this).css("background-color", "#00FF00");
    }

    // Incrementing the hour to traverse time blocks in the calendar
    hour++;
})

$(".saveBtn").click(function() {

    // Saving the task to an object that contains a reference and an unique Id
    var tasksOfTheDayObj = {
        task: $(this).parent().find("textarea").val(),
        reference: $(this).parent().find("textarea").attr("id"),
        id: taskId
    }

    // Incrementing the task Id
    taskId++;

    // Pushing the task object to the task array
    tasksOfTheDay.push(tasksOfTheDayObj);

    // Saving the task array in local storage
    localStorage.setItem("work-tasks", JSON.stringify(tasksOfTheDay));

})




// $(document).ready(function() {
//     setInterval(updateTime, 1000);
// })