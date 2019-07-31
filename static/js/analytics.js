// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var map = L.map("map").setView([39.8283, -98.5795], 3.2);
// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
   maxZoom: 18,
   id: "mapbox.streets",
   accessToken: API_KEY
 }).addTo(map);

//Read the Json file containing input values selected by the User
d3.json("static/data/main_page_input.json", function(userinp) {
	origin = userinp[0].origin;
	destination = userinp[0].destination;
});

//Read the Json file containing Airport code and coordinates
d3.json("static/data/usAirports.json", function(response) {
	for (var i = 0; i < response.length; i++) 
	{
		if (response[i].code == origin) 
		{
			origin_lat = response[i].lat;
			origin_lon = response[i].lon;
			var lat = response[i].lat;
			var long = response[i].lon;
						
			var marker = L.marker([lat,long], {
						}).addTo(map)
						  .bindPopup(response[i].code, {autoClose:false}).openPopup();
			
			}
		
		if (response[i].code == destination)
		{
			dest_lat = response[i].lat;
			dest_lon = response[i].lon;
			var lat = response[i].lat;
			var long = response[i].lon;

			var marker = L.marker([lat,long], {
						}).addTo(map)
						  .bindPopup(response[i].code, {autoClose:false}).openPopup();
		}
	}
		
		var x1y1 = [parseFloat(origin_lat), parseFloat(origin_lon)];
		var x2y2 = [parseFloat(dest_lat), parseFloat(dest_lon)];
		
		//var x1y1 = [40.712776, -74.005974];
		//var x2y2 = [43.653225, -79.383186];
								
	//---Code for curved line
		var latlngs = [];
	
		var latlng1 = x1y1,
		  latlng2 = x2y2;

		var offsetX = latlng2[1] - latlng1[1],
		  offsetY = latlng2[0] - latlng1[0];

		var r = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2)),
		  theta = Math.atan2(offsetY, offsetX);

		var thetaOffset = (3.14 / 10);

		var r2 = (r / 2) / (Math.cos(thetaOffset)),
		  theta2 = theta + thetaOffset;

		var midpointX = (r2 * Math.cos(theta2)) + latlng1[1],
		  midpointY = (r2 * Math.sin(theta2)) + latlng1[0];

		var midpointLatLng = [midpointY, midpointX];

		latlngs.push(latlng1, midpointLatLng, latlng2);

		var pathOptions = {
		color: '#111111',
		weight: 2
		}
		
		var curvedPath = L.curve(
		  [
			'M', latlng1,
			'Q', midpointLatLng,
			latlng2
		  ], pathOptions).addTo(map);
});