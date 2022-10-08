
var clicks=0;
$(document).ready(function(){
    $("#blue-mode").click(
        function(){
            if (clicks == 0){        
               $("#theme_style").attr("href", "blue.css")
               clicks++;
            }else{ 
        
            $("#theme_style").attr("href", "default.css")  
        clicks--;
    }

   
});
});
