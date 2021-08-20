# VisionTS-Technical-Exercise-JDS
This serves as the repository into which I will commit my answers to the technical excercises provided for my job assesment. I hope everything is found to be satisfactory.

I will be adding more information to this ReadMe as the need arises and as I start completing the excercises.

The code will be divided into 3 major modules with their own script outlined as follows:

## 1. City Module
Will allow a user to pass a City name as an argument and will return that city's latitude, longitude, and current temperature.

<i>This script is meant to complete exercise 1.</i>

## 2. File Module
Will allow the user to specify the name of a file which will be "echoed" or diplayed back to the user. 
If no absolute path is suplied, the module will look relative to it's current directory. If no such file exists, the user will be notified and the program will exit gracefully.

<i>This script is meant to complete exercise 2.</i>

## 3. User Storage Module
The most complex of the 3 modules. It will allow the user to post data, and to query data from a database. 
If the user chooses to post data, they may supply a JSON file to be stored in the database, or they may enter an interactive mode in which they will be prompted for the information.

<i>This serves to complete exercise 3.</i>

If the user chooses to query the data, they must supply a valid user ID as a script argument. The information of that specific user id will be displayed. If userId cannot be found in the database, user will be notified.

<i>This is meant to complete exercise 4.</i>
