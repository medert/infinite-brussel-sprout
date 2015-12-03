// YOUR CODE GOES HERE
var page = 1;

// $("#more-sprouts").click(function(event) {
//   event.preventDefault();
//   page = page + 1;
//   var request = $.ajax({
//     method: "GET",
//     url: "/tweets.json?page=" + page
//   });
//   request.done(function(data) {
//     data.forEach(function(tweet) {
//       $(".tweets").append("<li class='tweet'> <div class='body'>" + tweet.text + "</div> <div class='user'>" + tweet.username + "</div> </li>");
//     });
//   });
// });

$(document).ready(function(){
  function lastAddedLiveFunc(){
    var request = $.ajax({
      method: "GET",
      url: "/tweets.json?page=" + page
    });
    request.done(function(data){
      data.forEach(function(tweet){
        $(".tweets").append("<li class='tweet'> <div class='body'>" + tweet.text + "</div> <div class='user'>" + tweet.username + "</div> </li>");
      });
    });
  };

  if ($(document).height() == $(window).height()){
    page = page + 1;
    lastAddedLiveFunc();
  }

  $(window).scroll(function(){
    var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
    var  scrolltrigger = .95;

    if  ((wintop/(docheight-winheight)) > scrolltrigger){
     //console.log('scroll bottom');
       page = page + 1;
       console.log(page);
       lastAddedLiveFunc();
    }
  });
});
