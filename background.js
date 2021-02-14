let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ color });
	console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.runtime.onMessage.addListener((data) => {
	console.log('hello');
	if (data.type === 'notification') {
		chrome.notifications.create('id', data.options, function(id) {});
	}
});
