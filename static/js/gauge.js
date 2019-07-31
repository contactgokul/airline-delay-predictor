//Read the Json file containing input values selected by the User
d3.json("static/data/main_page_input.json", function(userinp) {
	airline = userinp[0].airline;
//	console.log(airline+'first');
});

d3.json("static/data/airline_delay_prediction.json", function(response) {
 //console.log(response[5].airline_code);
	for (var i = 0; i < response.length; i++)
	{
		//console.log(response[i].airline_code)
		if (response[i].airline_code == airline)
		{
		    prob_delay = response[i].prob_delay;
			//console.log(airline);
			//console.log(prob_delay);
			wfreq = prob_delay * 0.09;
			var level = parseFloat(wfreq) * 20;

			// Trig to calc meter point
			var degrees = 180 - level;
			var radius = 0.5;
			var radians = (degrees * Math.PI) / 180;
			var x = radius * Math.cos(radians);
			var y = radius * Math.sin(radians);

			// Path: may have to change to create a better triangle
			var mainPath = "M -.0 -0.025 L .0 0.025 L ";
			var pathX = String(x);
			var space = " ";
			var pathY = String(y);
			var pathEnd = " Z";
			var path = mainPath.concat(pathX, space, pathY, pathEnd);

			var data = [
				{
					type: "scatter",
					x: [0],
					y: [0],
					marker: { size: 12, color: "850000" },
					showlegend: false,
					name: "Delayed",
					text: prob_delay+'%',
					hoverinfo: "text+name"
				},
				{
					values: [50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50 / 9, 50],
					rotation: 90,
					text: ["90%", "80%", "70%", "60%", "50%", "40%", "30%", "20%", "10%", ""],
					textinfo: "text",
					textposition: "inside",
					marker: {
						colors: [
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(0, 105, 11, .5)",
							"rgba(255, 255, 255, 0)"
						]
					},
					labels: ["80-90", "70-80", "60-70", "50-60", "40-50", "30-40", "20-30", "10-20", "0-10", ""],
					hoverinfo: "label",
					hole: 0.5,
					type: "pie",
					showlegend: false
				}
			];

			var layout = {
				shapes: [
					{
						type: "path",
						path: path,
						fillcolor: "850000",
						line: {
							color: "850000"
						}
					}
				],
				title: response[i].airline_code+ ': '+ prob_delay+'%',
				height: 500,
				width: 500,
				xaxis: {
					zeroline: false,
					showticklabels: false,
					showgrid: false,
					range: [-1, 1]
				},
				yaxis: {
					zeroline: false,
					showticklabels: false,
					showgrid: false,
					range: [-1, 1]
				}
			};

			var GAUGE = document.getElementById("gauge");
			Plotly.newPlot(GAUGE, data, layout);
		}
	}
});