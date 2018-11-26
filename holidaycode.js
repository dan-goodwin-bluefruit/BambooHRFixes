
	function calculate() {
		$('#total').html('<img width="33px" style="vertical-align: middle; margin-top: -5px;" src="/images/loading-large.gif"/>');
		$('#accrualList').html('<tr><td colspan="5" class="center"><img width="25px" style="vertical-align: middle;" src="/images/loading-large.gif"/></td></tr>');
		var data = {
			endDate: $('#endDate').val(),
			timeOffType: $('#timeOffTypeCalc').val(),
			employeeId: '5'
		};
		$.ajax({
			type: "GET",
			data: data,
			url: "/time_off/calculator/calculate",
			dataType: 'json',
			success: function(values) {
				var html = '';
				for(var i = 0; i < values['allItems'].length; i++) {
					var value = values['allItems'][i];

					if (value.hours === null || value.hours === '') {
						html = '<tr class="Grey__text--999"><td>' + value.ymd + '</td><td colspan="3"><div class="truncate"><i>'
							+ BambooHR.Utils.htmlentities(value.desc) + '</i></div></td></tr>' + html;
					} else {
						html = '<tr><td>' + value.ymd + '</td><td class="description"><div class="truncate">'
							+ BambooHR.Utils.htmlentities(value.desc) + '</div></td><td class="txtRight numberFormat">'
							+ value.hours + '</td><td class="txtRight numberFormat">' + value.total + '</td></tr>' + html;
					}
				}
				$('#accrualList').html(html);
				$('#total').html(values['total']);
				$("#accrualDetails > .tableScroll").scrollTables();
				SimpleModal.setPosition();
			}
		});
	}