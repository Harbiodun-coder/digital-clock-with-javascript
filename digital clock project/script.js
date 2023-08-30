function showTIme(){
    var date = new Date();
    var hour = date.getHours();
    var mins = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM"

    if(hour==0){
        hour = 12;
    }
    if (hour > 12){
        hour = hour - 12;
        session = "PM";
    }

    if (hour   < 10) {hour   = "0"+hours;}
    if (mins < 10) {mins = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}


    var time = hour + ":" + mins + ":" + seconds + " " + session;

    document.querySelector("#MyClockDisplay").innerHTML = time;

        setTimeout(showTIme, 1000);
}

showTIme();