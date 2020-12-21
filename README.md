# Javascript Challenge

![UFO PHOTO](https://storage.googleapis.com/kaggle-datasets-images/455/925/944efec6f9c143560a4a8f5ff8efbf59/dataset-cover.jpg)


# Project Scope

* For the scope of this task, data collected on UFO sightings is placed in an easy to use table that allows the user to filter the data and find specified dates and the information for each sighting.  This project used:
    - Visual Studio Code
    - HTML
    - JavaScript
    - CSS
    
    


# Process
1. Task One

After recieving provided dataset, an an HTML and CSS page were created.  Within the CSS page, Arrow functions, D3 are used to allow the website to easily access the needed information with a button click and a specified date.  A function is created to call the specified infomration and then another function is utilized to display the infomration in the table embedded on the web page.  

2. Task Two

Once loaded into the SQL database another notebook called analysis.ipynb was used to perform the analysis. We used sqlalchemy to perform querys of the database and create two tables using pandas to compare the total deaths of gun violence due to officer involved shootings, mass shootings, and accidents, and we did the same to compare all of those that caused injuries as well. We then created two horizonal bar graphs using sqlalchemy, pandas, and matplotlib that compared overall gun injuries and overall gun killings by state. Last, We created line graphs using all the previous libararies to compare total gun injuries and total gun deaths per month throughout the year.


# Results

![Filtered Table PHOTO](https://storage.googleapis.com/kaggle-datasets-images/455/925/944efec6f9c143560a4a8f5ff8efbf59/dataset-cover.jpg)





# Limitations

The limitations of this dataset is that is collected from media, law enforcement, government and commercial sources which are not neccessarily completely reliable. It is also collected over a time span of only 3 years (2014-2016) therefore is not up to date. 
