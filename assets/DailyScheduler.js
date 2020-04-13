
//display current date
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var toDoItems = [];

//Adding time to timeblocks

function initializeSchedule(){
    $(".time-block").each(function(){
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        var todoObj = {
      //set related todo hour to same as data-hour
        hour: thisBlockHr,
      //get text ready to accept string input
        text: "",
    }
    //add this todo object to todoitems array
        toDoItems.push(todoObj);
  });
}

// event listener on save button 


