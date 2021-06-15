// Function to change the content of t2
var count = 1;
    function setColor(btn, color) {
        var property = document.getElementById(btn);
        if (count == 0) {
            property.style.backgroundColor = "#00FFFF"
            count = 1;        
        }
        else {
            property.style.backgroundColor = "#FFA500"
            count = 0;
        }
    }
