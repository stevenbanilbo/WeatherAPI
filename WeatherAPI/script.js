var weather = '';
if(weather=='') document.getElementById('temp');

function cityFinder( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=642a9dd1df7e18cb609ca70449ce6167' + weather)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		console.log("Cannot retrieve data");
	});
}

function drawWeather(compute) {
  var celcius = Math.round(parseFloat(compute.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(compute.main.temp)-273.15)*1.8)+32);
  var description = compute.weather[0].description; 
	

document.getElementById('description').innerHTML = description;
document.getElementById('temp').innerHTML = celcius + '&deg;';
document.getElementById('location').innerHTML = compute.name;

}
window.onload = function() {
	cityFinder( 1701667);
    
}