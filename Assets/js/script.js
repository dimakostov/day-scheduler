var saveEvent = document.getElementsByClassName("save");
var currentHour = moment().format("HH");
console.log(currentHour);


var eventInput = function() {

        var text = $(this)
        .text()
        .trim();
        
        var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);
      
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
      
}

$(".events").on("click", "p", function () {
    var text = $(this)
    .text()
    .trim();
    
    var textInput = $("<textarea>")
    .addClass("form-control")
    .attr("id", $(this).attr("id"))
    .val(text);
  
    $(this).replaceWith(textInput);
    textInput.trigger("focus");

    console.log(textInput.attr("id"));
  })

//   $(".save").on("click", "div", function () {

//     }
//   })

var saveFunction = function(){

    var selectedSave = $(this).attr("id");
    switch(selectedSave){
        case "save-9AM":
            id = $("#9AM").attr("id");
            text = $("#9AM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#9AM").replaceWith(p);

            break;
        case "save-10AM":
            id = $("#10AM").attr("id");
            text = $("#10AM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#10AM").replaceWith(p);
            break;
        case "save-11AM":
            id = $("#11AM").attr("id");
            text = $("#11AM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#11AM").replaceWith(p);
            break;
        case "save-12PM":
            id = $("#12PM").attr("id");
            text = $("#12PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#12PM").replaceWith(p);
                break;
        case "save-1PM":
            id = $("#1PM").attr("id");
            text = $("#1PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#1PM").replaceWith(p);
            break;
        case "save-2PM":
            id = $("#2PM").attr("id");
            text = $("#2PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#2PM").replaceWith(p);
            break;
        case "save-3PM":
            id = $("#13M").attr("id");
            text = $("#3PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#3PM").replaceWith(p);
            break;
        case "save-4PM":
            id = $("#4PM").attr("id");
            text = $("#4PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#4PM").replaceWith(p);
            break;
        case "save-5PM":
            id = $("#5PM").attr("id");
            text = $("#5PM").val();

            var p = $("<p>")
            .attr("id", id)
            .text(text);

            $("#5PM").replaceWith(p);
            break;
    }
}

var currentEvent = function(){
    switch (currentHour) {
        case "9":
            
            $("#event-9").css("background-color", "lightcoral");
            for(i = 10; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "10":
            $("#event-10").css("background-color", "lightcoral");
            for(i = 11; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "11":
            $("#event-11").css("background-color", "lightcoral");
            for(i = 12; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "12":
            $("#event-12").css("background-color", "lightcoral");
            for(i = 13; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "13":
            $("#event-13").css("background-color", "lightcoral");
            for(i = 14; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "14":
            $("#event-14").css("background-color", "lightcoral");
            for(i = 15; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "15":
            $("#event-15").css("background-color", "lightcoral");
            for(i = 16; i < 18; i++){
                var event = "#event-" + i;
                $(event).css("background-color", "lightgreen");
            }
            break;
        case "16":
            $("#event-16").css("background-color", "lightcoral");
            
            $("#event-17").css("background-color", "lightgreen");
            
            break;
        case "17":
            $("#event-17").css("background-color", "lightcoral");
            break;
    
    }
}

for(var i = 0; i < saveEvent.length; i++){

    saveEvent[i].addEventListener("click", saveFunction);
}

currentEvent();