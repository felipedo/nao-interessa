setInterval(timeToFive,1000);

function timeToFive(){
    var targetHour = 17;
    var currentTime = new Date();
    var targetTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), targetHour, 0, 0);
    
    //If reach targetHour then get the target for the next day
    if(currentTime.getHours() >= targetHour){
        targetTime.setDate(targetTime.getDate() + 1);
    }

    //Calculate the difference between current time and target time
    diffH = Math.floor((targetTime.getTime() - currentTime.getTime()) / 3600000);
    diffM = Math.floor((targetTime.getTime() - currentTime.getTime()) / 60000) - (diffH * 60);
    diffS = Math.floor((targetTime.getTime() - currentTime.getTime()) / 1000) - (((diffH * 60) + diffM) * 60);

    final = diffH.toString().padStart(2,'0') + ':' + diffM.toString().padStart(2,'0') + ':' + diffS.toString().padStart(2,'0');
    $("#countdown").html(final);
}