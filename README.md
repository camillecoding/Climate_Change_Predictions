# Time-Series Predictive Modeling on Climate Change Data

![](Mapping_World/static/images/Website-Screenshot.png)

### :triangular_ruler: Project Outline: 

This team project aims to use past CO2 emissions data up until 2018 to predict future (2019 and 2020) emissions - then uses a machine learning model to test our hypothesis. The team is comprised of Brandon, Kat, Steven, and Camille. We believe that our prediction will be accurate in 2019 and inaccurate in 2020, since 2020 was a novel year. We will also use our model to forecast emissions data until 2050, since this is a benchmark year for reducing emissions targets. Our database of choice for this project will be pgadmin/SQL. An entity-relationship diagram was made beforehand to distinguish relationships within our data. Interactive maps will then be created to allow users to visualize the data for various characteristics such as time and region. Ultimately, we will combine all of these pieces to our project on a public website. 

### :mag_right: Background

We selected this topic because we wanted to work on a salient issue - and we also wanted to measure the accuracy of our machine learning model against actual data. Since there is so much research on emissions and environmental impact, this topic aligned with our goals. 

Our team selected world emissions data from [Our World in Data's Github page](https://github.com/owid/co2-data). Our World in Data is an open source website dedicated to monitoring greenhouse gas emissions by country. They compile data from a variety of national and international sources on their website. We also used data from [Berkeley Earth](https://www.kaggle.com/datasets/berkeleyearth/climate-change-earth-surface-temperature-data?select=GlobalLandTemperaturesByState.csv) that provides Earth surface temperature data and data from [Natural Earth](https://github.com/datasets/geo-countries/blob/master/data/countries.geojson) for each country's GeoJSON data.

### :bulb: Hypothesis 

We have several questions we expect that this data will answer. The main questions for our project are:
* Can our machine learning model accurately predict emissions data from now until 2050?
* How do changes in global surface temperatures affect emissions data, or vice versa?

### :memo: Team Communication Protocols 

We've decided to work asynchronously as much as possible, providing updates to each other in a group Slack. We meet on Mondays and Wednesdays via Zoom, where we think through any challenges we're facing and create a plan to address them. We each have our own branch in this repo where we push updates and may create separate repositories on our own accounts to create first drafts of code.

### :computer: Database Development (pre-requisite to data exploration phase of the project)

Due to the structured nature of our data, we chose PostgreSQL to house our database. We used SQL to clean our emissions, surface temperatures, and country datasets, sorting each type of data into its own table and ensuring each country has its own row. We then exported each dataset as its own CSV and read those cleaned CSVs into Pandas for ETL. 

During our ETL process in pandas, we transformed our two dataframes (carbon emissions and surface temperatures) so that the countries serve as primary keys with each unique country only appearing in one row. To accomplish this, we had to pivot the years column to instead have a column for each of the 250 years. This pivot yielded very wide tables, but it was the best way to ensure the integrity of our database. We uploaded the two cleaned tables to PostgreSQL using SQLAlchemy, then executed an inner join to create a century summary table that displays the total emissions and average temperature for each country since the year 2000.

### :chart_with_upwards_trend: ARIMA Model (data exploration phase of the project)

For our time series data and forecasting model we chose to use an ARIMA model from ```statsmodels.tsa.arima.model```. An ARIMA model uses time series data to identify its trends. Since we're looking at emissions over time, this was the best way to indicate the data's trends. First, we created a difference order for this ARIMA model in a function, then created two functions to find the optimal amount of autoregressive terms and moving average terms. Finally, we created an ARIMA test model to determine how well our model could predict the next value in our dataset. This effort improved the model's performance. Once we tested our model, we created one final function to forecast future emissions. 

Unfortunately, at this time there still needs to be work done to automate the analysis of CO2 corresponding to different countries. Each time series varies by the parameters ```ARIMA(p,d,q)``` where they need to be chosen carefully (overdifferencing can result in increased error when trying to establish stationarity). Below is a rolling ARIMA trained at each step to fine tune it's ability to forecast x amount of years into the future. Below is a comparison of the ARIMA model vs the test values along with a forecast of the model up until the year 2040 for China. There is still a way to immprove the model by forecasting our residual error to account for potential errors when forecasting, but this is yet to be implemented. As a baseline, this model seems to work rather well. 

![ARIMA_train](https://github.com/camillecoding/project/blob/main/Resources/ARIMA_train.PNG)

![ARIMA_forecast](https://github.com/camillecoding/project/blob/main/Resources/ARIMA_forecast.PNG)


### :earth_americas: Interactive Maps (analysis phase of the project - currently produced by visualizations)

Questions users may ask might be:

* How does one country compare to another with regards to CO2 emissions released?
* When did CO2 emissions begin to exponentially increase?

CO2 emissions data relies on the time variable. Undoubtedly, CO2 emissions have been increasing as time goes on. Thus, it's important to determine interactive maps and plots to display this data.

We created a map with a time slider using Plotly in R to display CO2 emissions data globally as reported over time with the click of a button, "Play". This subtle interactivity provides users with an easy understanding of CO2 emissions changes over time and helps to answer broad questions users may have regarding regional or time differences.

![](Mapping_World/static/images/R-Map-Screenshot.png)

Another interactive map is in the works that uses HTML/JavaScript. The goal of this map is to create an event listener that allows users to select a year from a drop-down menu, then be able to click on each country and it's CO2 value is displayed along with the country's name. This map is similar to the previous map, however it requires more user interactivity. It allows the user to focus on one particular year and be able to click on any country and its corresponding data is returned. 

- Thus far, we are able to display the country name when it is selected on the map. The next step is to integrate CO2 values by integrating an event-listener for year.

### :gear: Website Development

The website "Where Do We Stand" is still in progress and not published yet. However, development of our website began on nicepage, a website builder software. We chose this platform because of its clean designs and it allows us to be creative yet efficient with our time and resources.

### :gear: Google Slides Presentation

[Visit the Website Here](https://docs.google.com/presentation/d/1SZ6sEi_g2hc6ig5XFP1Tz_J80sFcxkxLEiBYQe4vods/edit?usp=sharing)

### :gear: Google Slides Dashboard

[Visit the Website Here](https://docs.google.com/presentation/d/1aYsOOY9v--lcTgFCp-6uXjAY5jcdNZep7P2AtG0mdTs/edit?usp=sharing)

### :link: Meet Our Developers:

#### Brandon DeGraw

* Github: [@brand0j](https://github.com/brand0j)

#### Kat Marcinkowski

* Github: [@katmarcin](https://github.com/katmarcin)

#### Steven Woodring

* Github: [@Steven-Woodring](https://github.com/Steven-Woodring)

#### Camille May

* Github: [@camillecoding](https://github.com/camillecoding)



