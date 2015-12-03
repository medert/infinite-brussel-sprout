// YOUR CODE GOES HERE
var clicks = 1;

$("#more-sprouts").click(function(event) {
  event.preventDefault();
  clicks = clicks + 1;
  var request = $.ajax({
    method: "GET",
    url: "/tweets.json?page=" + clicks
  });
  request.done(function(data) {
    data.forEach(function(tweet) {
      $(".tweets").append("<li class='tweet'> <div class='body'>" + tweet.text + "</div> <div class='user'>" + tweet.username + "</div> </li>");
    });
  });
});
