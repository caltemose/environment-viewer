# environment-viewer

A simple web app showing environmental data collected by a Tessel on my porch.

## Data Collection and Visualization

Environmental data is collected by a Tessel with a climate module (temperature and humidity) and an ambient module (light and sound levels). It resides on my porch (zip code 30307) and it pushes data to Firebase.

The visualizations shown in this repo consume the data from Firebase and use [Plotly's Javascript library](https://plot.ly/javascript/) to display the visualizations. This is a single-page web app built using React.
