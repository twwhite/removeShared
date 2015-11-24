window.setInterval(function(){
  $("div:contains(' shared ')").closest('[id^=hyperfeed_story_id_]').remove();
}, 1000);
