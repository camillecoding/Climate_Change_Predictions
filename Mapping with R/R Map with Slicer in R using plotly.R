#load library
library(dplyr)
library(plotly)
library(htmlwidgets)


#load data
df <- read.csv("CO2_emissions.csv")


#create map
p <- plot_geo(df, locationmode = 'world') %>%
  add_trace(    z = ~df$co2, locations = df$iso_code, frame=~df$year,
                color = ~df$co2)

p
#export as html file
htmlwidgets::saveWidget(p, file = "R-Map-CO2.html")