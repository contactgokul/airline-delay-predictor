//Read the Json file containing input values selected by the User
var BARCHART = document.getElementById("barchart");
//d3.json("static/data/airline_delay_prediction.json", function(response) {
//	response.forEach(function(d) {
//        d.airline_code = d.airline_code;
//        d.prob_delay = d.prob_delay;
	//console.log(response);
	//for (var i = 0; i < response.length; i++)
	//{
	//console.log(response[i].airline_code);
	//console.log(response[i].prob_delay);
    //}
	// Create variable for the SVG
//});
//});

// set the dimensions of the canvas
var margin = {top: 20, right: 20, bottom: 40, left: 40},
    width = 600 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;


// set the ranges
var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);

var y = d3.scale.linear().range([height, 0]);

// define the axis
var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")


var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);


// add the SVG element
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");


// load the data
d3.json("static/data/airline_delay_prediction.json", function(error, data) {

    data.forEach(function(d) {
        d.airline_code = d.airline_code;
        d.prob_delay = d.prob_delay;
		//console.log(typeof d.airline_code);
		//console.log(typeof d.prob_delay);
    });
	
  // scale the range of the data
  x.domain(data.map(function(d) { return d.airline_code; }));
  y.domain([0, d3.max(data, function(d) { return d.prob_delay; })]);

  // add axis
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.55em")
      .attr("transform", "rotate(-90)" );

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 5)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("% Delay");


  // Add bar chart
  svg.selectAll("bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.airline_code); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.prob_delay); })
      .attr("height", function(d) { return height - y(d.prob_delay); });

});