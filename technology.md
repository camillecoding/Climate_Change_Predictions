# Technologies Used

## Data Cleaning and Analysis

Pandas was primarily used to clean the 'CO2_emissions.csv' dataset. The main columns in the dataset are "country", "date, "total" (for total CO2 value in metric tons, "years", and then a breakdown of various CO2 metrics by industry. These columns were dropped so we can hone in on the total CO2 emissions value. The DataFrame.set_index also from Pandas is used to eliminate the default index and to convert it to 'Year'. The function was applied for ease of data mining for our exploratory analysis. Pandas' to_datetime function was implemented to convert the year index from simply a year to a year-month-day format to make it clear to the audience that our dataset tracks CO2 emissions starting from the first of January and ending the following year. The tools used for data cleaning altogether are Jupyter Notebook and Python in conjuction with Pandas library. 

An initial data visualization was performed using plotly.express and plotly.graph_objects within Jupyter. Features such as a button with a drop-down menu were implemented into the plotly to allow users to select country. The plot itself displays the evolution of CO2 emission over the course of 1990-2018. By creating this plot prior to beginning the machine learning portion of the project, we can grasp trends among the data that would otherwise be hard to interpret with just tabular data.

## Database Storage

Postgres is utilized in this analysis to store our database within the pgAdmin client server. These tools fundamental to creating a platform for our database to exist. QuickDBD platform is utilized beforehand to create an entity relationship diagram. This diagram provided a visual starting point for database design that can also be used to help determine information system requirements throughout an organization. SQL language is used within our Postgres server to create our table from the CO2 emissions data and import it successfully. 

## Machine Learning

An ARIMA model is used as our machine learning model. It is designed to take in data from our database and then output labels for the input data. For this predictive analysis, the ARIMA model, which is also an auto-regression model, was chosen because it is best-suited for time-series forecasting (in this scenario, CO2 emissons vs time). Statsmodels library was used to display autocorrelation and partial autocorrelation plots for the next series of visualizations. This library was also used to import ARIMA. This model will help answer users questions regarding current and predicted CO2 emissions trends among 7 countries: China, USA, India, Russia, Japan, Iran, and Germany.

## Dashboard

The interactive dashboard of chose for our project is a website. Our website, "Where Do We Stand?" was developed with the help of BootstrapMade, a platform that provides templates for HTML, CSS & JavaScript frameworks. This step was key to providing a foundation for our website while allowing us to be creative with integrating user-friendly features. We especially want the CO2 emissions data, maps, and models to be easily-interpretable and navigable amongst all demographics. 


## Tools:

###Languages

* SQL
* R
* Python
* HTML/CSS
* Javascript

### Databases/Notebooks

* pgAdmin/SQLite (data storage)
* Jupyter Notebook (code-development)
* Visual Studio Code (code-development)

### Versions

* Pandas: 1.3.4
* Plotly: 5.7.0
* Numpy: 1.20.3
* Statsmodels: 0.12.2
* Scikit-Learn: 0.24.2
* Matplotlib: 3.4.3
