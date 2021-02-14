let current_page = 'signup';
console.log(current_page);
var opt = {
	type: 'basic',
	title: 'Primary Title',
	message: 'Primary message to display',
	iconUrl: 'url_to_small_icon'
};

function togglePage() {
	if (current_page == 'signup') {
		console.log('in signup page');
		document.getElementById('main').style.display = 'block';
		document.getElementById('signup').style.display = 'none';
		current_page = 'main';
	} else if (current_page == 'main') {
		document.getElementById('main').style.display = 'none';
		document.getElementById('signup').style.display = 'block';
		current_page = 'signup';
	}
}

function confirmButtonOnClick() {}
function sendThoughts() {}
function verifySetup() {
	chrome.storage.sync.get('partner-username', function(obj) {
		if (obj['partner-username'] && obj['username']) {
			console.log('usernames set');
		} else {
			console.log('object doesnt exist');
		}
	});
}

verifySetup();
document.getElementById('submit-button').addEventListener('click', togglePage);
document.getElementById('thinking-button').addEventListener('click', togglePage);
