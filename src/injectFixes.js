var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.type = 'text/css';
link.href = chrome.runtime.getURL('web_accessible/styleFixes.css');
document.body.appendChild(link);

var script = document.createElement('script');
script.type = 'text/javascript';
script.setAttribute('src', chrome.runtime.getURL('web_accessible/fixRemainingHoliday.js'));
document.body.appendChild(script);
