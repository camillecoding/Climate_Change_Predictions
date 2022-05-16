SELECT c.country,
	(c."2000" + c."2001" + c."2002" + c."2003" + c."2004" + c."2005" + c."2006" + c."2007" + c."2008" + c."2009" +
	 c."2010" + c."2011" + c."2012" + c."2013" + c."2014" + c."2015" + c."2016" + c."2017" + c."2018" + c."2019" +
	 c."2020") AS century_emissions,
	(s."2000" + s."2001" + s."2002" + s."2003" + s."2004" + s."2005" + s."2006" + s."2007" + s."2008" + s."2009" +
	 s."2010" + s."2011" + s."2012" + s."2013")/14 AS century_avg_temp
INTO current_century_stats
FROM carbon_emissions AS c
INNER JOIN surface_temperatures AS s
ON (c.country = s.country);