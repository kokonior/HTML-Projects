window.onload = function(){
    var tens = 00;
    var seconds = 00;
    var minutes = 00;
    var updateTens = document.getElementById('tens');
    var updateSeconds = document.getElementById('seconds');
    var updateMinutes = document.getElementById('minute');
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

   buttonStart.onclick = function(){
       clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       console.log("start");
   }

   buttonStop.onclick = function(){
       clearInterval(Interval);
   }

   buttonReset.onclick = function(){
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       minutes = "00";
       updateTens.innerHTML = tens;
       updateSeconds.innerHTML = seconds;
       updateMinutes.innerHTML = minutes;
   }

   function startTimer(){
       tens++;

       if (tens <= 9){
           updateTens.innerHTML = "0" + tens;
       }

       if (tens > 9){
           updateTens.innerHTML = tens;
       }

       if (tens > 99){
           seconds++;
           updateSeconds.innerHTML = "0" + seconds;
           tens = 0;
           updateTens.innerHTML = "0" + tens;
       }

       if (seconds > 9){
           updateSeconds.innerHTML = seconds;
       }

       if (seconds > 60){
           minutes++;
           updateMinutes.innerHTML = "0" + minutes;
           seconds = 0;
           updateSeconds.innerHTML = "0" + seconds;
       }

       if (minutes > 9){
           updateMinutes.innerHTML = minutes;
       }
   }



    
}