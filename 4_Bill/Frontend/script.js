$(document).ready(function() {
    $("#calculateBtn").click(function() {
        var units = parseInt($("#units").val());

        if (isNaN(units) || units <= 0) {
            alert("Please enter a valid number of units.");
            return;
        }

        $.get("http://localhost:8080/calculate/" + units, function(data) {
            $("#result").text(data);
            $("#result").removeClass("d-none").addClass("d-block");
        });
    });
});
