//wrap all functions in a call to the DOM
$(document).ready(function(){

//Setting reference variables for our save button, text area for the calendar slot,
//for our time block, and setting variable for the current date, and the current hour.
var saveButtons = $('.saveBtn');
var timeRowEL =   $('.time-block');
var today = dayjs();
var hour = dayjs('H');

 // Added code to display the current date in the header of the page.
 var currentDate = today.format('dddd, MMMM D');
 $('#currentDay').text(currentDate);


//Added an event listener for the save button that will utilize 'this' reference
//in a jQuery call and access its text to save into local storage.
saveButtons.on('click', function (event) {
  
  event.stopPropagation();
  //using this keyword we can access element in container and access it's sibling
  //'textarea' and parent 'id' in a JQuery call to get the text that the user inputs and the hour id.
  var textArea = $(this).siblings('.description').val();
  console.log(textArea);
  var timeId = $(this).parent().attr('id');
  console.log(timeId);

  //Storing variables in local storage (JSON)
  localStorage.setItem(timeId, textArea);
  });

  //console.log(localStorage);
 
  // Added code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  
  function applyClass(){
    //access current hour from dayjs and store it.
    var currentHour = dayjs().hour();

    //add a for each loop to run through our container, through each time blocks.
    $('.time-block').each(function(){

      //grabbing time block hour id and storing into a comparison variable for our ifs.
      var hour = parseInt($(this).attr('id').split('-')[1]);
6
      //conditionals to check current hour to apply class to timeblocks
      //relative to the hour of the timeblock, checks current hour to
      //see if it is in the past, present, or future, then will add that 
      //class to time block.
        if (hour < currentHour) {
          $(this).addClass('past');
        } else if(hour > currentHour){
          $(this).addClass('future');
        } else {
          $(this).addClass('present');
        }

    });
  }

    //We function call our applyclass and this applies colors and
    //classes to our timeblocks.
    applyClass();

  // Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. Individually get item from
  // local storage from each time block by using Id.
  
  
    $("#hour-9 .description").val(localStorage.getItem('hour-9'));
    $("#hour-10 .description").val(localStorage.getItem('hour-10'));
    $("#hour-11 .description").val(localStorage.getItem('hour-11'));
    $("#hour-12 .description").val(localStorage.getItem('hour-12'));
    $("#hour-13 .description").val(localStorage.getItem('hour-13'));
    $("#hour-14 .description").val(localStorage.getItem('hour-14'));
    $("#hour-15 .description").val(localStorage.getItem('hour-15'));
    $("#hour-16 .description").val(localStorage.getItem('hour-16'));
    $("#hour-17 .description").val(localStorage.getItem('hour-17'));
});
