$(document).ready(function(){

    $("#1 p").click(function(){

        $.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple", function (res) {

            var html_str = "";
            html_str += "<p>" + res.results[0].question  + "</p>"
            html_str += "<input type='radio' value=" + res.results[0].correct_answer + ">" + res.results[0].correct_answer + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[0] + ">" + res.results[0].incorrect_answers[0] + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[1] + ">" + res.results[0].incorrect_answers[1] + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[2] + ">" + res.results[0].incorrect_answers[2] + "";
            $("#1").html(html_str);
            console.log(res.results[0].question)
        }, "json");
    });

    $("#2 p").click(function () {

        $.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=medium&type=multiple", function (res) {

            var html_str = "";
            html_str += "<p>" + res.results[0].question + "</p>"
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[2] + ">" + res.results[0].incorrect_answers[2] + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[1] + ">" + res.results[0].incorrect_answers[1] + "";
            html_str += "<input type='radio' value=" + res.results[0].correct_answer + ">" + res.results[0].correct_answer + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[0] + ">" + res.results[0].incorrect_answers[0] + "";
            $("#2").html(html_str);
            console.log(res.results[0].question)
        }, "json");
    });

    $("#3 p").click(function () {

        $.get("https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple", function (res) {

            var html_str = "";
            html_str += "<p>" + res.results[0].question + "</p>"
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[1] + ">" + res.results[0].incorrect_answers[1] + "";
            html_str += "<input type='radio' value=" + res.results[0].correct_answer + ">" + res.results[0].correct_answer + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[2] + ">" + res.results[0].incorrect_answers[2] + "";
            html_str += "<input type='radio' value=" + res.results[0].incorrect_answers[0] + ">" + res.results[0].incorrect_answers[0] + "";
            $("#3").html(html_str);
            console.log(res.results[0].question)
        }, "json");
    });
    

});

