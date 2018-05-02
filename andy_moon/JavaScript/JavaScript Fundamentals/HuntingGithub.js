$(document).ready(function () {
  $("input").click(function () {  
    $.get("https://api.github.com/users/mooner70", displayName)
    function displayName(data) {
      console.log(data);
      console.log(data.name);
      $("p").append(data.name);
      $("img").attr("src", data.avatar_url);
    };
  });
});
