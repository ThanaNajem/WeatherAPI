$(function () {

	$('#forecast-result').addClass("d-none").removeClass("d-block");
	$("form").validate({
		// errorMessagePosition : 'top', // Instead of 'inline' which is default
		rules: {
			zipCode: {
				zipCodeValidation: true,
				required: true
			} // hook in custom zip code validation
		},

		submitHandler: function (form) {
			console.log($(form).serialize());
			$.ajax({

				url: "weatherReportSearchByZipCode.php",
				type: "POST",
				data: $(form).serialize(),
				dataType:'JSON',
				success: function (results) {
					
					//return;
					//var myJSON = JSON.stringify(results.futureWeatherReport);
					//var results = JSON.parse(results);  
					console.log(results);
					var items = [];
					console.log(results.currentWeatherReport);
					console.log(results.futureWeatherReport);
					console.log(results.futureWeatherReport[0]);
					var currentWeatherReportObj = results.currentWeatherReport;
					var pathOfWeatherIcon = 'https://www.weatherbit.io/static/img/icons/' + currentWeatherReportObj.weather.icon + '.png';
					$('#currentForecastNotFound').removeClass("d-block").addClass("d-none");
					$('#forecast-result').removeClass("d-none").addClass("d-block");
					$("#pathOfImageFromProvidedAPI").attr("src", pathOfWeatherIcon);
					$("#SummeryWeatherReport").text(currentWeatherReportObj.weather.description);
					$("#windSpeed").text(currentWeatherReportObj.wind_spd + " m/s");
					$("#humidity").text(currentWeatherReportObj.clouds + " %");
					$('#TemperatureWeatherReport').text(currentWeatherReportObj.temp + "℃");

					$.each(results.futureWeatherReport, function (i, item) { 

							var currentTime = new Date(item.ts);
							items.push('<li><p class="lead m-0">' + currentTime.toLocaleTimeString('en-US') + '</p></li>');
							items.push('<li><p class="lead m-0">' + item.temp + "℃" + '</p></li>');

					 
 
					}); // close each()
					$('#future_forecast').empty();
					$('#future_forecast').append(items.join(''));

				},
				error: function (jqxhr, status, exception)


				{
					console.log(status);
					$('#forecast-result').addClass("d-none").removeClass("d-block");
					$('#currentForecastNotFound').text('This location not found'); 
					$('#currentForecastNotFound').removeClass("d-none").addClass("d-block");

				}
				// error:function(jqxhr, status, exception) {
				// 	// console.log(status); 
				// 	console.log(status) 
				//      }

			}); 
		}
	});

	$.validator.addMethod("zipCodeValidation", function () {
		var zipCode = $('input#zipCode').val();
		// var reg = /^0+/gi;
		// if (zipCode.match(reg)) {
		// 	zipCode = zipCode.replace(reg, '');
		// 	$('input#zipCode').val(zipCode)
		// }

		return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(zipCode); // returns boolean
		/*
		OR
		// American Postal Code from http://html5pattern.com/Postal_Codes
	 
		*/
	}, "Please enter a valid US zip code (use a hyphen if 9 digits).");


});