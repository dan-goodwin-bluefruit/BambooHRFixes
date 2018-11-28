$(document).ready(function() {
    const elements = $('.TimeOffWidget__type-available');
    if(elements.length > 0) {
        const timeOffElement = elements.first();

        const current = new Date();
        const year = current.getFullYear();
        const data = {
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
                const holidayHtml = '<div id="FixedTime">' + values.total + '</div>'

                timeOffElement.html(holidayHtml);
            }
        });
    }
});
