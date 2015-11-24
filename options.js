
function save_options() {
  var killShared = document.getElementById('sharedbox').checked;
  var killLiked = document.getElementById('likedbox').checked;
  var killVia = document.getElementById('viabox').checked;
	chrome.storage.sync.set({
    shared: killShared,
	liked: killLiked,
	via: killVia
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
// Restores checkbox states using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({		// Set default values to false
    shared: false,
	liked: false,
	via: false,
  }, function(items) {
    document.getElementById('sharedbox').checked = items.shared;
	document.getElementById('likedbox').checked = items.liked;
	document.getElementById('viabox').checked = items.via;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	
