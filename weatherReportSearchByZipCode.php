<?php 

if (isset($_POST['zipCode'])) 
{
	  header('Content-Type: application/json');
	$zipCode = $_POST['zipCode'];
	/* Start reading of currently forecast */
	$current_weather_api_url = 'https://api.weatherbit.io/v2.0/current?key=49e3bbbcae444cebb1f498e66f1b32e6&postal_code='.$zipCode;
	/*
	file_get_contents — Reads entire file into a string
	json_decode — Decodes a JSON string
	PHP's json_decode function takes a JSON string and converts it into a PHP variable. Typically, the JSON data will represent a JavaScript array or object literal which json_decode will convert into a PHP array or object
	*/
	$current_weather_report = json_decode(file_get_contents($current_weather_api_url));
	// // For testing results:
	// // echo '<pre>';
	// // print_r($current_weather_report); 

/* End reading of currently forecast */

/* Start reading of future forecast */
	$future_weather_api_url = 'https://api.weatherbit.io/v2.0/forecast/daily?key=49e3bbbcae444cebb1f498e66f1b32e6&postal_code='.$zipCode; 

	$future_weather_report = json_decode(file_get_contents($future_weather_api_url));
	// For testing results:
	// echo '<pre>';
	// print_r($future_weather_report);
	// echo '</pre>';  

  
$weather_report = array('futureWeatherReport' => $future_weather_report->data , 'currentWeatherReport' => $current_weather_report->data[0]);
/* End reading of future forecast */ 
// json_encode — Returns the JSON representation of a value
echo json_encode($weather_report ); 
 
	
}
 
?>