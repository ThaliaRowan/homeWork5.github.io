var currentDay = $('#currentDay');

function timeUpdate(){
setInterval(() => {
        var now = moment();
        var formatting = now.format('MMMM Do YYYY, h:mm:ss a');
        currentDay.text(formatting);
    }, 1000);
    
}



$(document).ready(function(){
    timeUpdate();
 });

