var currentDay = $("#currentDay");
var hour = 9;
var todaysDate = moment().toDate();
var currentTime = moment().toDate().getTime();
var taskId = 0;
var tasksOfTheDay = [];

var tasksOfTheDayObj = {
    task: "",
    reference: "",
    id: ""
}

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

$("textArea").change(function() {
    var taskEdit = $(this).attr("id");

    for (var i = 0; i < tasksOfTheDay.length; i++) {
        if (tasksOfTheDay[i].reference === taskEdit) {
            tasksOfTheDay.splice(i, 1);
        }
    }
})

$(".saveBtn").click(function() {

    var userTask = $(this).parent().find("textarea").val();

    // Doesn't allow the saving of empty task strings
    if (userTask === "") {
        return;
    }

    // Saving the task to an object that contains a reference and an unique Id
    tasksOfTheDayObj = {
            task: userTask,
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


// Function that loads the previously saved tasks onto the scheduler
$(document).ready(function() {
    // Retrieving local storage and saving them in a local variable
    var savedTasks = localStorage.getItem("work-tasks");

    // Checking to see if there was anything in local storage
    if (savedTasks === null) {
        return false;
    }
    // Parsing the JSON object back to an array
    savedTasks = JSON.parse(savedTasks);

    // Looping through the array the holds the objects
    for (var i = 0; i < savedTasks.length; i++) {
        var taskRef = savedTasks[i].reference;

        tasksOfTheDayObj = {
            task: savedTasks[i].task,
            reference: savedTasks[i].reference,
            id: savedTasks[i].id
        }

        tasksOfTheDay.push(tasksOfTheDayObj);

        // Adding a # to the Id
        taskRef = "#" + taskRef;
        // Placing the saved tasks onto the work scheduler
        $(".row").find(taskRef).text(savedTasks[i].task);

        // Adjusting the taskId to reflect the saved tasks
        taskId = savedTasks[i].id;

    }

})