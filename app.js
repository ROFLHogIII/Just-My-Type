
$("#keyboard-upper-container").hide();
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let a = 0;
$(`<p>${sentences[a]}</p>`).appendTo("#sentence")
let clock = 0;
let yellowBox = $("#yellow-block")
function ready() {
alert("Ready?")
set()
}
function set(){
    alert("Go!")
}
ready();
setInterval(function(){clock++}, 1000);
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
let displayLet = [...(sentences[a])[index]]
$(`<p id="letter">${displayLet}<p>`).appendTo("#target-letter")
let mistake = 0;

$(document).keypress(function (e) {
    let char = sentences[a].charCodeAt(index)
    if (e.which === char) {
        $(`<span id="remove" style="color:green">√</span>`).appendTo("#feedback")
        index++
        displayChar = sentences[a].charCodeAt(index)
        yellowShift = yellowShift + 17;
        $(yellowBox).css("margin-left", yellowShift + "px")
        if (isNaN(displayChar)) {
            $("p").remove();
            $("span#remove").remove();
            index = 0
            a++
            $(yellowBox).css("margin-left", "0px")
            yellowShift = 0

            if (a == 5) {
                clearInterval(clock)
                let WpM = (54/(clock/60)) - (2 * mistake)
                alert(`You did the thing!`)
                alert(`Your Words per Minute was ${WpM}`)
                alert(`WpM = 54/(${clock}/60) - (2 * ${mistake})`)
                alert(`To play agin, refresh the page!`)
            } else {
                $(`<p> ${sentences[a]} </p>`).appendTo("#sentence")
                displayChar = sentences[a].charCodeAt(index)
                displayLet = [...(sentences[a])[index]]
                $("#letter").remove();
                $(`<p id="letter">${displayLet}<p>`).appendTo("#target-letter")
                $("#remove").empty();
            }
        } else {
            displayLet = [...(sentences[a])[index]]
            $("#letter").remove();
            $(`<p id="letter">${displayLet}<p>`).appendTo("#target-letter")
        }
    } else {
        $(`<span id="remove" style="color:red">X</span>`).appendTo("#feedback")
        mistake++
    }
})