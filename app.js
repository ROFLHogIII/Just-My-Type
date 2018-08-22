
$("#keyboard-upper-container").hide();
let sentences = ['ten', 'Too', 'oat', 'itant', 'nee'];
let a = 0;
$("<p>" + sentences[a] + "</p>").appendTo("#sentence")
// a++;
// console.log(a)
// $("<p>" + sentences[a] + "</p>").appendTo("#sentence")

$(document).keydown(function (d) {
    if (d.keyCode == 16) {
        $("#keyboard-lower-container").hide();
        $("#keyboard-upper-container").show();
    };
    $(document).keyup(function (u) {
        if (u.keyCode == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        };
    });
});
$(document).keypress(function (e) {
    console.log("Ascii : " + e.which);
});
$(document).keypress(function (k) {
    let key = k.which
    $("#" + key).css("background-color", "yellow")
    $(document).keyup(function () {
        $("#" + key).css("background-color", "#F5F5F5")
    });
});
let sentences = ['ten', 'Too', 'oat', 'itant', 'nee'];
let a = 0;
let index = 0;
let displayChar = sentences[a].charCodeAt(index)
console.log(displayChar)
$(document).keypress(function(e){
    let char = sentences[a].charCodeAt(index)
    if (e.which === char) {
        console.log("The keys match!")
        index++
        let displayChar = sentences[a].charCodeAt(index)
        console.log(displayChar)
        if (isNaN(displayChar)) {
            $("p").remove();
            let index = 0
            a++
            $("<p>" + sentences[a] + "</p>").appendTo("#sentence")
            let displayChar = sentences[a].charCodeAt(index)
            console.log("displayChar changed to " + displayChar,)
            console.log("index changed to " + index)
            console.log("a changed to " + a)
        }
    } else {
        console.log("WRONG KEY, DOOFUS!!")
        console.log("displayChar is " + displayChar)
        console.log("index is " + index)
        console.log("a is " + a)
    }
})

//$("").click(function () {
    //$("#rand").css("color", "red");
//    let colorR = Math.floor((Math.random() * 256));
//    let colorG = Math.floor((Math.random() * 256));
//    let colorB = Math.floor((Math.random() * 256));
//    $("#rand").css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
//});
