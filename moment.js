var currentDay = $('#currentDay');

function checkHours(){

    var theHour = moment().format('H')

    $('.form-control').each(function(){
       var theId =  $(this).attr('id');
       var newId = parseInt(theId)
       console.log(theHour);

       if(theHour > newId){
           $(this).addClass('past');
       } else if( theHour == newId){
           $(this).addClass('present');
       } else if(theHour < newId){
           $(this).addClass('future');
       }
    })
}


function timeUpdate(){
setInterval(() => {
        var now = moment();
        var formatting = now.format('MMMM Do YYYY, h:mm:ss a');
        currentDay.text(formatting);
    }, 1000);
    
}





$(document).ready(function(){
    timeUpdate();
    
checkHours()

 });

