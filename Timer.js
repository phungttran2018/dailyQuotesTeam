//var clockNow = document.querySelector("#Clock-Now");

function startTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    hour = checkTime(hour);
    minute = checkTime(minute);
    second = checkTime(second);
   //clockNow.innerHTML =  hour + ":" + minute + ":" + second;
   // document.getElementById("Clock-Now").innerHTML = hour + ":" + minute + ":" + second;
   var combineTime = hour + ":" + minute + ":" + second;
   if (combineTime === "23:59:59"){
       var firebaseRef = firebase.database().ref();
       firebaseRef.child("User").remove();
   }
    var t = setTimeout(startTime, 500);

}

function checkTime(timeInput){
    if (timeInput < 10){
        timeInput = "0" + timeInput;
        
    }
    return timeInput;
}