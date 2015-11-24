window.setInterval(function(){
  $("div:contains('test text')").closest('[id^=blah_]').remove();
}, 5000);
