$(document).ready(function () {

    $("#calcBAC").click(calcBAC);

    function calcBAC() {
        var beer = $("#beer").val() * .54;
        var wine = $("#wine").val() * .6;
        var shot = $("#shot").val() * .6;
        var BAC = beer + wine + shot;
        var hour = $("#hour").val();
        var weight = $("#weight").val();

        BAC = 7.5 * BAC;
        BAC = BAC / weight;
        BAC = BAC - (0.015 * hour)
        BAC = (BAC).toFixed(3);

        $("#BAC").text(BAC);
    }

});