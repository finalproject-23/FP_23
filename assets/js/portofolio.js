// Get the container element
var btnContainer = document.getElementById("mypage");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
/* for (var i = 0; i <= btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    console.log(current);
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} */

$(document).ready(function(){
    $("#mypage").ready(function(){
        $("button").click(function(){
            $(".active").removeClass("active");
            $(this).addClass("active");
            $(this).mouseleave(function(){
                alert("next");
                $(".notNumber").removeClass("active");
            });
            console.log(this);
        });
    });
}); 
