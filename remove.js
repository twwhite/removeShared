// This javascript function parses through the HTML code on Facebook and matches the string " shared ", then deletes the associated
// parent node for the uppermost div of the post. It does this every second. If that speed becomes cumbersome, increase it.
window.setInterval(function(){
  $("div:contains(' shared ')").closest('[id^=hyperfeed_story_id_]').remove();
}, 1000);	
