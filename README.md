# Airline Arrival Delay Prediction

### Author

Bharat, Gokul and Ritesh @UCB @2019

App deployed through Heroku in 
![under-construction](static/images/under-construction.gif)

![airlines_project](static/images/flights.PNG)

## Introduction

The Airline-Delay Predictor App gives you the ability to predict the probability of arrival delay to your destination. 
The probability of finding the delay prediction is based on one whole year flight statistics from “LINK” and using the Logistic Regression Model.
We used python flask app to create an app where user selects the desired route (Origin and Destination airports), airline, date of travel and departure time.
Our model predicts the arrival delay % and also gives the user the delay prediction for +/- 3 days from the entered date and for that same date the delay prediction in percentage of other airlines if travelled on the same date and time.

## Approach summary

The dataset is cleaned using Pandas and imported to CSV, JSON files and converted into a dashboard showing different visualizations and data using HTML, CSS, and JavaScript.

## Arrival Delay Prediction
Our App enables you to find the flight that’s most likely get delayed. To do this, the user selects origin airport, destination airport, airline, date and departure hour of travel. Using historical data, we use machine learning (Logistic Regression Model) to predict the % of the flight getting delayed to arrival destination. 


![workflow](static/images/workflow.PNG)

## Model Creation
### Data cleaning Process
* Read the data source [Airlines data](http://datasets.flowingdata.com/tuts/maparcs/flights.csv)
* In Jupyter Notebook perform all ETL.
* **Extraction**
  * Read the CSV and load into a pandas DataFrame.
  * The data points used is above 5 million
  * The data points distribution for on arrival vs delayed flights is as below (image of data distribution):

Read the CSV and load into a pandas DataFrame.

* **Transform**
  * Copy only the columns needed into a new DataFrame.
  * Create dummy columns for input values
* **Model Training and Testing**
  * Split the data for train and test purpose
  * Fit the model using the train data
  * Predict the output with test data
  * Calculate the accuracy of the model
* **Model Testing with user data**
  * Create same format of input as train and test data for 1 input 
  * Load the model and use this user input to get the prediction of delay in percentage


* **Visualizations**
Insert the images


* **Built With**
  * Python
  * Pandas
  * Flask
  * Scikit-learn (LogisticRegression)
  * Scikit-learn (LogisticRegression)
  * HTML, CSS, Bootstrap CSS, Javascript
 
• Part 1: Data_Cleaning.ipynb - Clean and prepare the dataset
• Part 2: ML_logistic.ipynb – Create, train, test, save Logistic regression model
• Part 3: Delay_Predict.ipynb – Test user input
• Part 4: airline.py – Flask, get user input, load model, predict the arrival delay percentage
• Part 5: gauge.js – plot arrival delay percentage in gauge form
• Part 6: analytics.js – plot the route map
• Part 7: barchart.js – plot the bar chart comparison of arrival prediction delay for all airlines
• Part 8: .js – plot the +/- 3 days arrival delay prediction for the user input airline

Append DataFrames to tables. Be sure to use the index set earlier.
* Confirm successful **Load** by querying database.
* Read the data from the mysql database and convert into a json file and csv file
	* [airlines_grouped csv file](static/data/airlines_grouped.csv) - used as input for the first visualization
	* [flights_data json file](static/data/flights_data.json) - used as input for the second visualization

## Description of Files in Github repository

Detailed description on how the project was built:

- Main Data Sources
	- [Airlines data](http://datasets.flowingdata.com/tuts/maparcs/flights.csv)
	- [Airport details](https://gist.github.com/tdreyno/4278655#file-airports-json)
	- [# of Flights over time](https://think.cs.vt.edu/corgis/json/airlines/airlines.json?forcedownload=1)

- Back-end
    - [app.py](https://github.com/contactgokul/airports-flights-analysis/app.py) is a Flask app that creates API endpoints accessible to JavaScript and can render content onto the template
		- @app.route(‘/’) for Main Index File
		- @app.route("/Airportlogicindex") for Airport locations
		- @app.route("/curvedpathindex") for Route Maps
		- @app.route("/barracechartindex") for Bar Race Chart
    - [Flights_Project.ipynb.ipynb](https://github.com/contactgokul/airports-flights-analysis/Flights_Project.ipynb), [Flights_Bar_Race_Chart_Data_Cleaning.ipynb](https://github.com/contactgokul/airports-flights-analysis/Flights_Bar_Race_Chart_Data_Cleaning.ipynb) and [Data_Cleaning.ipynb](https://github.com/contactgokul/airports-flights-analysis/Data_Cleaning.ipynb) for data cleaning and exporting into a database
    -[mysql queries](Queries.sql) is the MySQL database used in this project
    
- Front-end
    - templates/[index.html](https://github.com/contactgokul/airports-flights-analysis/tree/master/templates/index.html) is the dashboard and the template containing text and graphs
    - static/css/[style.css](https://github.com/contactgokul/airports-flights-analysis/tree/master/static/css/style.css) contains formatting specifications
    - static/js/[Airportlogic.js](https://github.com/contactgokul/airports-flights-analysis/tree/master/static/css/Airportlogic.js) is the main logic for the Airports locations visual
	- static/js/[curvedpathlogic.js](https://github.com/contactgokul/airports-flights-analysis/tree/master/static/css/curvedpathlogic.js) is the main logic for the Airport routes visual
    - static/js/[barracechartlogic.js](https://github.com/contactgokul/airports-flights-analysis/tree/master/static/css/barracechartlogic.js) is the main logic for the Bar Race chart visual
	- [leaflet.curve.js](https://elfalem.github.io/Leaflet.curve/src/leaflet.curve.js) is a new java script which has been used to draw a curved path/line between two sets of coordinates
    - static/js/`config.js` contains the API key for mapbox

Final App deployed through Heroku in https://airports-flights-analysis.herokuapp.com/

## Output and Analysis

The landing page of the application has three buttons which direct to three individual dashboards.

* Airport visualization:
The result shows location of airports for each state in an aggregated form. User can Zoom in to find the info/details of each individual airport, # of outbound fights.

![Airport Locations](static/images/airport_locations.gif)

* Airport To Airport Route:
The result shows routes from one airport to connecting airports along with the origin airport details.

![Airport Routes](static/images/airport_routes.gif)

* Airlines Bar Race Chart:
The result indicated that Delta Airlines (DL) had flown maximum flights

![Bar Race Chart](static/images/bar_race_Chart.gif)
