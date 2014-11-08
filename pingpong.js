$(document).ready(function() {
 var counter = 0;
 var countTo = prompt("Welcome to the Ping-Pong Game! Please enter a number:", "");
    countTo = parseInt(countTo);
    if(isNaN(countTo)) {
      $("#fail").show();
    } else {
      $("p").show();
    };
   
    while (counter < countTo) {
     counter = counter +1
      if (counter%15===0) {
        answer = "Ping-Pong";
      } else if (counter%3===0) {
        answer = "Ping";
      } else if (counter%5===0) {
        answer = "Pong";
      } else {
       answer = counter;
      };
     $("ul").append("<li>"+answer+"</li>");
    };  

});
