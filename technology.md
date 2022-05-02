# Technologies Used

## Data Cleaning and Analysis

Pandas is used to clean the 'CO2_emission_1990_2018.csv' dataset. The main columns in the dataset are "Country", "Data source", "Sector", "Gas", "Unit", and the following years: 1990-2018. The following columns were dropped using the pandas' drop() function to remove any insignificant information and to condense our dataset to a readable format: "Data source", "Sector", "Gas", "Unit". The DataFrame.set_index also from Pandas is used to eliminate the default index and to convert it to 'Year'. The function was applied for ease of data mining. Pandas' to_datetime function was implemented to convert the year index from simply a year to a year-month-day format to make it clear to the audience that our dataset tracks CO2 emissions start from the first of January and ending the following year. 

Pandas is  used to clean the data and perform an exploratory analysis. Further analysis will be completed using Python.

## Database Storage

Postgres is utilized in this analysis to store our database within the pgAdmin client server.  

## Machine Learning

SciKitLearn is the ML library we'll be using to create a classifier. Our training and testing setup is ___. Extra ML verbiage here.

## Dashboard

In addition to using a Flask template, we will also integrate D3.js for a fully functioning and interactive dashboard. It will be hosted on ___.

Consider these questions: 

Which tools are the best fit for your project? 

What will be used for each section?

For example, data cleaning and data storage will be completed using two different tools. 

How will the dashboard be built? 
All of these different components play a large part in project efficacy, so knowing them beforehand helps smooth the workflow.

