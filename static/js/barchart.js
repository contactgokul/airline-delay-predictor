//Read the Json file containing input values selected by the User
var BARCHART = document.getElementById("barchart");
var a = [];
var b = [];

d3.json("static/data/airline_delay_prediction.json", function(response) {
	response.forEach(function(d) {
        d.airline_code = d.airline_code;
        d.prob_delay = d.prob_delay;
		a.push(d.airline_code);
		b.push(d.prob_delay);
	});

	//console.log(a);
	//console.log(b);

	var data = [{
	  x: a,
	  y: b,
	  type: 'bar'
	}];

	Plotly.newPlot('barchart', data, {}, {showSendToCloud:true});
});