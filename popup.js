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

function confirmButtonOnClick() {
	//Check if the user name and partner username are not empty
	/*if(document.getElementById('username').value != "" && document.getElementById('partner-name').value != ""){
		//If not empty, set them in local storage, and go to next page.
		chrome.storage.sync.set({username: document.getElementById('username').value}, () => {
			console.log('Username in storage set to: ' + document.getElementById('username').value);
		});
		chrome.storage.sync.set({partner_name: document.getElementById('partner-name').value}, () => {
			console.log('Partner name in storage set to: ' + document.getElementById('partner-name').value);
		});
		togglePage();
	}
	else{
		console.log('Empty fields');
		//If they are empty, send notification saying the username and partner username must be filled out.
		chrome.runtime.sendMessage('', {
			type: 'notification',
			options: {
			  title: 'Just wanted to notify you',
			  message: 'How great it is!',
			  iconUrl: './image.jpeg',
			  type: 'basic'
			}
		  });
		console.log('done sending message');
		}
*/

	
}

document.getElementById('submit-button').addEventListener('click', () => {
	chrome.runtime.sendMessage('', {
	type: 'notification',
	options: {
		title: 'Just wanted to notify you',
		message: 'How great it is!',
		iconUrl: '/icon.png',
		type: 'basic'
	}
	});
});
function sendThoughts() {}
function verifySetup() {
	chrome.storage.sync.get('partner-username', function(obj) {
		if (obj['partner-username'] && obj['username']) {
			console.log('usernames set');
			//Switch to Main page
			togglePage();
		} else {
			console.log('object doesnt exist');
			//force them to stay on setup page
		}
	});
}


document.getElementById('submit-button').addEventListener('click', confirmButtonOnClick);
document.getElementById('thinking-button').addEventListener('click', togglePage);
verifySetup();
