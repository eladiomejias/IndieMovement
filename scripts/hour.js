(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        var subToday = today.toDateString();
        document.getElementById('fecha').innerHTML = checkday(today.getDay()) + " - " + subToday.substr(subToday.indexOf(' ')+1);
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
    
    function checkday(numberDay){
        var day;
    	switch(numberDay){
     case 0:
        day = "Dom";
        break;
    case 1:
        day = "Lu";
        break;
    case 2:
        day = "Mar";
        break;
    case 3:
        day = "Mier";
        break;
    case 4:
        day = "Jue";
        break;
    case 5:
        day = "Vier";
        break;
    case 6:
        day = "Sabs"; 
      }
    
    	return day;
    }
})();