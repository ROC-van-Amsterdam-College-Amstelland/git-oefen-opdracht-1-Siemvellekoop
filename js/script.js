window.onload = setInterval(clock,1000);
    function clock()
    {
        var d = new Date();
        var date = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth();
        var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
        month = monthArr[month];
        document.getElementById("date").innerHTML=date+" "+month+", "+year;
    }

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

  function openCity(evt, cityName) {
   
    var i, tabcontent, tablinks;
  
   
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
   
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }