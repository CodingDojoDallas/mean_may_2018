$(document).ready(function () {
    function difficulty(diff) {
        if (diff == "easy") {
            return "<p>100</p>"
        }
        else if (diff = "medium") {
            return "<p>200</p>"
        }
        else {
            return "<p>300</p>"
        }
    }

    $.get("https://opentdb.com/api.php?amount=3&category=21&type=multiple", function (res) {
        var questions = res.results
        for (let i = 0; i < questions.length; i++) {
            html = "<div class='question' style='width: 200px; height: 200px;'>"
            html += difficulty(questions[i].difficulty)
            html += "<p style='display:none;'>" + questions[i].question + "</p>"
            var answers = questions[i].incorrect_answers
            answers.push(questions[i].correct_answer)
            for (let x = 0; x < answers.length; x++) {
                html += `<label style='display:none'>${answers[x]}<input style='display:none;' type='radio' name=q${i} value=${answers[x]}></label>`
            }
            html += "</div>"
            $("#first").append(html);

            $(".question").on("click", function () {
                $(this).children().toggle();
                console.log("Hello!");

            });
        }

    }, "json");


});