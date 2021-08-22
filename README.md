# VisionTS-Technical-Exercise-JDS
This serves as the repository into which I will commit my answers to the technical excercises provided for my job assesment. I hope everything is found to be satisfactory.

There's 2 considerations to be had:

First, this app assumes your machine is running MongoDB on port 27017.

Second, this repository is missing 1 file which is the "keys.js" file. This file simply holds the private key used to access the weather API. If you wish to clone this repo to run it on your own you can recreate this file by registering at https://openweathermap.org/ and creating a file called __keys.js__ in the root folder and adding the following:
```
const weather = "{Your Private Key Here}";

module.exports = {
    weather
};
```
Where you substitute {Your Private Key Here} with your actual key token.

The code will be divided into 3 major modules with their own url outlined as follows:

# API Reference

## 1. City Module

<i>This script is meant to complete exercise 1.</i>

### Basic usage.

<b>http://{DomainAddress}:3000/weather?city={NameOfCity}</b>

In which case you have the following:

1. <b><i>{DomainAddress}</b></i> : the IP or associated Domain Name of the machine running the process. If testing from same machine this is "localhost".
2. <b><i>{NameOfCity}</b></i> : the name of the city whose weather you want to query. If the city is composed of multiple words, add a '%20' to replace any spaces. For instance, 'New York' would become 'New%20York'.

### <i> RETURNS </i>

JSON formatted response. With longitude, latitude, and current temperature in Farenheit. 
Example template:

```
  {
    "lon" : "00"
    "lat" : "00"
    "temp" : "00"
  }
```

## 2. File Module

<i>This script is meant to complete exercise 2.</i>

### Basic usage.

<b>http://{DomainAddress}:3000/file?name={FileName}</b>

In which case you have the following:

1. <b><i>{DomainAddress}</b></i> : the IP or associated Domain Name of the machine running the process. If testing from same machine this is "localhost".
2. <b><i>{FileName}</b></i> : The name of 4 possible text files to query:

FILE NAME | FILE CONTETS
----------|--------------------
Hamlet    | Shakespear's famous Hamlet Soliloquy "To be, or not to be"
Quixote   | The first chapter of Miguel de Cervantes's famous novella Don Quixote
Pi        | Many digits of pi. How many? Don't know, but it's a lot.
Lorem     | A bulk of "lorem ipsum" generated code.
  
### <i> RETURNS </i>

Plain text response with the contents of the file as specified above.

## 3. User Storage Module
The most complex of the 3 modules. It will allows the user to post data, and to query data from a database.

**It assumes MongoDB is running on port 27017**

### Basic usage. POST Request

<i>This serves to complete exercise 3.</i>

<b>http://{DomainAddress}:3000/users</b>

In which case you have the following:

1. <b><i>{DomainAddress}</b></i> : the IP or associated Domain Name of the machine running the process. If testing from same machine this is "localhost".

You must send a JSON formatted POST request to be stored in the database. (Content-Type must be application/json).
The post request body must have the following structure.

```
  {
    "userId" : 000
    "name" : "John"
    "lastName" : "Doe"
  }
 ```
  
 In this case, userId must be a unique number to identify the user. If a userId that already exists in the database is sent, server will return an error response.
 
 "Name" and "lastName" can be any variable length string.

### Basic usage. GET Request

<i>This is meant to complete exercise 4.</i>

<b>http://{DomainAddress}:3000/users?uid={userId}</b>

In which case you have the following:

1. <b><i>{DomainAddress}</b></i> : the IP or associated Domain Name of the machine running the process. If testing from same machine this is "localhost".
2. <b><i>{userId}</b></i> : The number representing the "userId" field of a user document in the database.

### <i> RETURNS </i>

JSON formatted response containing the specific user document. Formatted as follows: 
  
```
  {
    "userId" : 000
    "name" : "John"
    "lastName" : "Doe"
  }
 ```
  
If "userId" does not exist in the database, the service will return an error response.
