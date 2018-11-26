var link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.type = 'text/css';
link.href = chrome.runtime.getURL('web_accessible/styleFixes.css');
document.body.appendChild(link);

var script = document.createElement('script');
script.type = 'text/javascript';
script.setAttribute('src', chrome.runtime.getURL('web_accessible/addEmployeeId.js'));
document.body.appendChild(script);

$(document).ready(function() {
    var elements = $('.TimeOffWidget__type-available');

    if(elements.length > 0) {
        waitForWindowCommon();
    }
});

function waitForWindowCommon() {
    var employeeId = document.getElementById('FixesEmployeeId');
    if(employeeId !== null) {
        fetchRemainingTimeOff();
    }
    else{
        setTimeout(waitForWindowCommon, 250);
    }
}

function fetchRemainingTimeOff() {
    var elements = $('.TimeOffWidget__type-available');
    let timeOffElement = elements.first();

    var employeeId = $('#FixesEmployeeId').text();

    console.log(employeeId);

    let current = new Date();
    let year = current.getFullYear();
    var data = {
        endDate: '31/12/' + year,
        timeOffType: '1',
        employeeId: employeeId
    };
    
    $.ajax({
        type: "GET",
        data: data,
        url: "/time_off/calculator/calculate",
        dataType: 'json',
        success: function(values) {
            var holidayHtml = '<div id="FixedTime">' + values.total + '</div>'

            timeOffElement.html(holidayHtml);
        }
    });
}