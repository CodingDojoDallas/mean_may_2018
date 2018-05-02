$(document).ready(function(){
    $('button').click(function (){
        $.get("https://api.github.com/users/storrence88", function (res){
            var html_str = ""
            html_str += "<p>" + res.login + "</p>"
            $('body').append(html_str);
        }, "json");
    });
    

});