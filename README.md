# Mtl Stationnement

How to visualize Montreal Stationnement signs while the project isn't completed?

1. Download the Montreal Stationnement signs data file "signalisation_stationnement.geojson" from [mtl open data](https://donnees.montreal.ca/dataset/stationnement-sur-rue-signalisation-courant).

2. Upload it to http://geojson.tools/ for visualizing it.


PROJECT SCOPE: 
1. Code map viewer app. 

2. Crunch "signalisation_stationnement.geojson" data and place it into a postgresql db (postGIS).

3. Make an API to fetch data using postGIS queries.