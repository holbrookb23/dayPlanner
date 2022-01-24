
//functions
//saves tasks to local storage
function saveTask() {
    console.log($(this).parent());
    
    const hourTime = $(this).parent().attr("id");
    const hourTask = $(this).siblings("textarea").val();
    
    localStorage.setItem(hourTime, hourTask);
}
//sets the future, past and present time block colors
function setColors() {
    let currentHour = moment().hour();
   
    $(".js-row").children("textarea").each(function() {
        const row = $(this);
        const divHour = row.parent().data("hour");
        if (divHour < currentHour) {
            $(this).addClass("past");
        } else if (divHour === currentHour) {
            $(this).addClass("present");           
        } else {
            $(this).addClass("future");
        }
    }) 
}

//show current date
window.setInterval(function() {
    $('#currentDay').text(moment().format("hh:mm:ss MMMM Do, YYYY"));
}, 1000);
//grab tasks from local storage
$("#h9 .js-task").val(localStorage.getItem("h9"));
$("#h10 .js-task").val(localStorage.getItem("h10"));
$("#h11 .js-task").val(localStorage.getItem("h11"));
$("#h12 .js-task").val(localStorage.getItem("h12"));
$("#h13 .js-task").val(localStorage.getItem("h13"));
$("#h14 .js-task").val(localStorage.getItem("h14"));
$("#h15 .js-task").val(localStorage.getItem("h15"));
$("#h16 .js-task").val(localStorage.getItem("h16"));
$("#h17 .js-task").val(localStorage.getItem("h17"));
//save task
$('.js-saveBtn').on("click", saveTask);
//runs the function to display time block colors
setColors();