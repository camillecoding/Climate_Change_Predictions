# Technologies Used

## Data Cleaning and Analysis

Pandas is used to clean the 'CO2_emission_1990_2018.csv' dataset. The main columns in the dataset are "Country", "Data source", "Sector", "Gas", "Unit", and the following years: 1990-2018. The following columns were dropped using the Pandas' drop() function to remove any insignificant information and to condense our dataset to a readable format: "Data source", "Sector", "Gas", "Unit". The DataFrame.set_index also from Pandas is used to eliminate the default index and to convert it to 'Year'. The function was applied for ease of data mining for our exploratory analysis. Pandas' to_datetime function was implemented to convert the year index from simply a year to a year-month-day format to make it clear to the audience that our dataset tracks CO2 emissions starting from the first of January and ending the following year. The tools used for data cleaning altogether are Jupyter Notebook and Python in conjuction with Pandas library. 

An initial data visualization was performed using plotly.express and plotly.graph_objects within Jupyter. Features such as a button with a drop-down menu were implemented into the plotly to allow users to select country. The plot itself displays the evolution of CO2 emission over the course of 1990-2018. By creating this plot prior to beginning the machine learning portion of the project, we can grasp trends among the data that would otherwise be hard to interpret with just tabular data.

## Database Storage

Postgres is utilized in this analysis to store our database within the pgAdmin client server. These tools fundamental to creating a platform for our database to exist. QuickDBD platform is utilized beforehand to create an entity relationship diagram. This diagram provided a visual starting point for database design that can also be used to help determine information system requirements throughout an organization. SQL language is used within our Postgres server to create our table from the CO2 emissions data and import it successfully. 

## Machine Learning

An ARIMA model is being used as our provisional machine learning model. It will be designed to take in data from our provisional database and is able to output labels for the input data. For this predictive analysis, the ARIMA model, which is also an auto-regression model, was chosen because it is best-suited for time-series forecasting (in this scenario, CO2 emissons vs time). Statsmodels library was used to display autocorrelation and partial autocorrelation plots for the next series of visualizations. This library was also used to import ARIMA. This model will continue to be revised in an attempt to better understanding our machine learning model as we progress further into the project.

## Dashboard

An interactive dashboard will be created further into the project's evolution by considering Tableau as the platform of chose for our audience. Because of it's user-friendly features, Tableau will likely be used for the dashboard. We want CO2 emission data to be easily-interpretable amongst all type of demographics. 

## Tools

pgAdmin, Postgres, Jupyter Notebook, QuickDBD, Slack.

## Languages

Python, SQL

## Libraries

plotly, pandas, numpy, matplotlib, statsmodels, sklearn


