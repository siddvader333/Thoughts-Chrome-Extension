let color = '#3aa757';
console.log('in background script');

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((data) => {
	//Fields not Filled error
	if (data.type == 'error') {
		console.log('error found');
		chrome.notifications.create('', data.options, () => {
			console.log('created!');
		});
	}
});

chrome.runtime.onMessage.addListener((data) => {
	if (data.type === 'notification') {
		chrome.notifications.create('', data.options);
	}
});
