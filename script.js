var currentDay = $('#currentDay');
var SaveBtn = $('.saveBtn');
var timeBlock = $('.time-block');
var time = $('.hour')


var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
function displayTime() {
  currentDay.text(rightNow);

};
  // Get hour from right now variable to compare to time variable
  function getNow(){
    dayjs().get('hh');
    console.log(hour);
  }

function saveTasks(){

      $('.saveBtn'). on ('click', function(){

      
        var text = $(this).siblings('.description').val(); 
        var time = $(this).parent().attr('id'); 


//Puts items in local storage.
localStorage.setItem(time, text)

  //Look for the time and change the class to match if the time-block is in the past, present, or future
  if ( time > hour) {
    $('time-block past').addClass("past");
    $('time-block past').removeClass("future");
    $('time-block past').removeClass("present");
}
else if ( time === hour) {
    $('time-block past').removeClass("past");
    $('time-block past').addClass("present");
    $('time-block past').removeClass("future");
}else {
    $('time-block past').removeClass("present");
    $('time-block past').removeClass("past");
    $('time-block past').addClass("future");
}

})


  //Get data from Local Storage for each hour.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"))



};

saveTasks();
displayTime();


