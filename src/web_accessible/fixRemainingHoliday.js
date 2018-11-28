$(document).ready(function() {
    var elements = $('.TimeOffWidget__type-available');
    let timeOffElement = elements.first();

    let current = new Date();
    let year = current.getFullYear();
    var data = {
        endDate: '31/12/' + year,
        timeOffType: '1',
        employeeId: window.common.employeeId
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
});
