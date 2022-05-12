# Project: Forecast of CO2 emissions

This team project aims to use past CO2 emissions data up until 2018 to predict future (2019 and 2020) emissions - then uses a machine learning model to test our hypothesis. The team is comprised of Brandon, Kat, Steven, and Camille. We believe that our prediction will be accurate in 2019 and inaccurate in 2020, since 2020 was a novel year. We will also use our model to forecast emissions data until 2050, since this is a benchmark year for reducing emissions targets.

### Background ###

We selected this topic because we wanted to work on a salient issue - and we also wanted to measure the accuracy of our machine learning model against actual data. Since there is so much research on emissions and environmental impact, this topic aligned with our goals. 

Our team selected world emissions data from [Our World in Data's Github page](https://github.com/owid/co2-data). CAIT is an open source website dedicated to monitoring greenhouse gas emissions by country. They compile data from a variety of national and international sources on their website. 

### Hypothesis ###
We have several questions we expect that this data will answer. The main questions for our project are:
* Can our machine learning model accurately predict 2019 emissions data?
* Will our machine learning model inaccurately predict 2020 data, since the onset of coronavirus and subsequent quarantine orders greatly reduced emissions?



### Team Communication Protocols ###
We've decided to work asynchronously as much as possible, providing updates to each other in a group Slack. We meet on Mondays and Wednesdays via Zoom, where we think through any challenges we're facing and create a plan to address them. We each have our own branch in this repo where we push updates and may create separate repositories on our own accounts to create first drafts of code.

### ARIMA model

For our time series data and forecasting model we chose to use an ARIMA model from ```statsmodels.tsa.arima.model```. Unfortunately, at this time there still needs to be work done to automate the analysis of CO2 corresponding to different countries. Each time series varies by the parameters ```ARIMA(p,d,q)``` where they need to be chosen carefully (overdifferencing can result in increased error when trying to establish stationarity). Below is a rolling ARIMA trained at each step to fine tune it's ability to forecast x amount of years into the future. Below is a comparison of the ARIMA model vs the test values along with a forecast of the model up until the year 2040 for China. There is still a way to immprove the model by forecasting our residual error to account for potential errors when forecasting, but this is yet to be implemented. As a baseline, this model seems to work rather well. 

![ARIMA_train](https://github.com/camillecoding/project/blob/main/Resources/ARIMA_train.PNG)

![ARIMA_forecast](https://github.com/camillecoding/project/blob/main/Resources/ARIMA_forecast.PNG)
