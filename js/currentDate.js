var currentDate = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var	weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var date = document.getElementById("date");
var time = document.getElementById("time");

function getDate() {
    date.innerHTML = weekday[currentDate.getDay()]+" "+monthNames[currentDate.getMonth()] + " " + currentDate.getDate() + ", " + currentDate.getFullYear() ;
}

function timer() {
    setTimeout(timer, 1000);
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours <= 11 ? 'am' : 'pm';
    var strTime = [hours % 12,
                  (minutes < 10 ? "0" + minutes : minutes)
                  ].join(':') + ampm;
    time.innerHTML = strTime;
    setTimeout(timer, 1000);
}

getDate();