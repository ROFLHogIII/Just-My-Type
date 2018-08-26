
$("#keyboard-upper-container").hide();
let sentences = ['ten', 'Too', 'oat', 'itant', 'nee'];
let a = 0;
$(`<p> ${sentences[a]} </p>`).appendTo("#sentence")
// a++;
// console.log(a)
// $("<p>" + sentences[a] + "</p>").appendTo("#sentence")
let yellowBox = $("#yellow-block")

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
    console.log(`Ascii : ${e.which}`);
});
$(document).keypress(function (k) {
    let key = k.which
    $(`#${key}`).css("background-color", "yellow")
    $(document).keyup(function () {
        $(`#${key}`).css("background-color", "#F5F5F5")
    });
});
let index = 0;
let displayChar = sentences[a].charCodeAt(index);
let yellowShift = 0;
console.log(displayChar)
$(document).keypress(function(e){
    let char = sentences[a].charCodeAt(index)
    if (e.which === char) {
        console.log("The keys match!")
        index++
        displayChar = sentences[a].charCodeAt(index)
        console.log(displayChar)
        yellowShift = yellowShift + 10;
        $(yellowBox).css("margin-left", yellowShift + "px")
        console.log(yellowShift)
        if (isNaN(displayChar)) {
            $("p").remove();
            index = 0
            a++
            $(yellowBox).css("margin-left", "0px")
            yellowShift = 0
            console.log(yellowShift)
            if (a == 5) {
                window.alert("you did it!")
            } else {
            $(`<p> ${sentences[a]} </p>`).appendTo("#sentence")
            displayChar = sentences[a].charCodeAt(index)
            console.log(`displayChar changed to ${displayChar}`)
            console.log(`index changed to ${index}`)
            console.log(`a changed to ${a}`)}
        }
    } else {
        console.log("WRONG KEY, DOOFUS!!")
        console.log(`displayChar is + ${displayChar}`)
        console.log(`index is ${index}`)
        console.log(`a is + ${a}`)
    }
})


//$("").click(function () {
    //$("#rand").css("color", "red");
//    let colorR = Math.floor((Math.random() * 256));
//    let colorG = Math.floor((Math.random() * 256));
//    let colorB = Math.floor((Math.random() * 256));
//    $("#rand").css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")")
//});
