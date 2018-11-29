var script = document.createElement('script');
script.type = 'text/javascript';
script.setAttribute('src', chrome.runtime.getURL('web_accessible/navigationChanges.js'));
document.body.appendChild(script);
