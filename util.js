var paragrapgh = document.getElementById("paragraph");
var words = paragrapgh.innerText.split("​"); // here I am spliting words by space i.e tokenizing it
var colors = ["#A08888","#ACC1B3","#F4D9A5","#B5CED6", "#CAD77E", "cornflowerblue", "floralwhite"];
var spans = [];

for(var x = 0; x < words.length; x++){
    var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
    var span = "<span style='background-color: " + color + ";'>" + words[x] + "</span>"
    
    spans.push(span);
}

// setting colored spans as paragraph HTML
paragrapgh.innerHTML = spans.join(" ");