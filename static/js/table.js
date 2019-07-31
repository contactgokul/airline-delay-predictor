//Read the Json file containing input values selected by the User
//var TABLE = document.getElementById("table");
//d3.json("static/data/day_delay_prediction.json", function(response) {
//	console.log(response);
//	for (var i = 0; i < response.length; i++)
//	{
//	console.log(response[i].dep_days);
//	console.log(response[i].prob_delay);
//    //TABLE.appendChild(div);
//	}
//});

			d3.json("static/data/day_delay_prediction.json", function(response) {
				console.log(response);
				appendData(response);
			});

        function appendData(response) {
            var mainContainer = document.getElementById("table");
			var HTML = "<div class=\"row\"><div class=\"col-md-12\"><h4><b>Delay Predictor upto -/+ 3 days</b></h4><div class=\"tg-wrap\"><table style=\"border-collapse: collapse; border: 1px solid; width: 100%;\"><tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Description<center></b></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>-3 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>-2 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>-1 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Current Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+1 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+2 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+3 Day</b></center></td></tr>"
			HTML += "<tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Departure Dates</b></center></td>"
            for (var i = 0; i < 7; i++) {
				//console.log(response[i].dep_days);
				if (i == 3)
				{
					HTML += "<td style=\"border: 2px solid; background-color: orange;\"><center><i>"+response[i].dep_days+"</i></center></td>";
				}
				else
				{
					HTML += "<td style=\"border: 2px solid;\"><center><i>"+response[i].dep_days+"</i></center></td>";
				}
		    }
			
			HTML += "</tr><tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Delay Probability</b></center></td>"
            for (var i = 0; i < 7; i++) {
                if (i == 3)
				{
					HTML += "<td style=\"border: 2px solid; background-color: orange;\"><center><i><span>"+response[i].prob_delay+"&#37;</span></i></center></td>";
				}
				else
				{
					HTML += "<td style=\"border: 2px solid;\"><center><i><span>"+response[i].prob_delay+"&#37;</span></i></center></td>";
				}
            }
			HTML += "</tr></table></div></div></div>";
			document.getElementById("table").innerHTML = HTML;
        }

/* d3.json("static/data/airline_delay_prediction.json", function(response) {
 //console.log(response[5].airline_code);
	for (var i = 0; i < response.length; i++)
	{
		
		
<div class="tg-wrap"><table>
  <tr>
    <td>Description</td>
    <td>-3 Day</td>
    <td>-2 Day</td>
    <td>-1 Day</td>
    <td>Current Day</td>
    <td>+1 Day</td>
    <td>+2 Day</td>
    <td>+3 Day</td>
  </tr>
  <tr>
    <td>dep_days</td>
    <td>27</td>
    <td>28</td>
    <td>29</td>
    <td>30</td>
    <td>31</td>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>prob_delay</td>
    <td>37.32</td>
    <td>39.97</td>
    <td>43.03</td>
    <td>41.11</td>
    <td>41.41</td>
    <td>41.57</td>
    <td>39.9</td>
  </tr>
</table></div>

*/