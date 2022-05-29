
install.packages("htmlwidgets")
install.packages("plotly")

#load library
library(dplyr)
library(plotly)
library(ggplot2)
library(htmlwidgets)

#load data 
df <- read.csv("CO2_emissions.csv")

df
plot.new
#create map 
p <- plot_geo(df, locationmode = 'world') %>%
  add_trace( z = ~df$co2, locations = df$iso_code, frame=~df$year, color = ~df$co2)

title(main = "Global Carbon Emissions over Time", sub = "Millions of Metric Tons (1850 - Present)",
      col.main = "black", col.sub = "black"
      )
#check the map
p

#export as html file
htmlwidgets::saveWidget(p, file = "R-Map-CO2-with-title.html")