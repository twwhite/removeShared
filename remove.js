// This javascript function parses through the HTML code on Facebook and matches the string " shared ", then deletes the associated
// parent node for the uppermost div of the post. It does this every second. If that speed becomes cumbersome, increase it.
window.setInterval(function(){
	chrome.storage.sync.get('shared', function (result) {
		if(result.shared===true){
			$("div:contains(' shared ')").closest('[id^=hyperfeed_story_id_]').remove();
		} 
	});
	chrome.storage.sync.get('via', function (result) {
		if(result.via===true){
			$("div:contains('via')").closest('[id^=hyperfeed_story_id_]').remove();
		}
	});
	chrome.storage.sync.get('liked', function(result){
		if(result.liked===true){
			$("div:contains('liked this')").closest('[id^=hyperfeed_story_id_]').remove();
		}
	});
	}, 1000);	
	
