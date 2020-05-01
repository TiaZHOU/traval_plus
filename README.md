# Task scheduling API
* Serves all HTTP requests and responds with 'dummy' data from JSON file (Under "/travel-tasks" route)
* The functionalities should be tested with an API testing tool
* Mock-up front end for homepage

## REST API details:
* See all tasks
```
/travel-tasks/
```
* Create new tasks
```
/travel-tasks/?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/
```
* Find a specific task
```
/travel-tasks/1/
```
* Modify/update tasks
```
/travel-tasks/1?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/
```
* Delete tasks
```
/travel-tasks/2/
```

# link: 
https://info30005travelplus.herokuapp.com/travel-tasks


# Discussion Forum API
A forum app that allows users to discuss travel tips and experiences. This will allow first-time travellers to receive personal advice from experienced travellers

## Features
-Create posts

-Update posts

-Comment on posts

## Comments
At this stage I have chosen to use arrays as my models as the current deliverable does not require actual use of databases.

# links:
https://info30005travelplus.herokuapp.com/user-management
https://info30005travelplus.herokuapp.com/post-management
https://info30005travelplus.herokuapp.com/comment-management

# Travel Alerts API
methods:

Once a traveling plan is made by user(no matter how many information user offered), the system will compare the plan with the alert list.
The comparing will occur when the plan update and alert pop ups display when the alert information match.

## Dataset:
alerts and plans

## REST API details:
by links /alert_test

## Comments:
Since most special functions are based on user management system, one functional system should be implement ASAP.

# link: 
https://info30005travelplus.herokuapp.com/alert
https://info30005travelplus.herokuapp.com/plan

# Travel Visa Requirements API
displays a set of required documents and other additional information needed for a visa application in each country

# Details
- displaying documents needed for a visa application per country
- allows users to search (or lookup) for the information by typing in the country's name 

# Comments
model for this current deliverable is still very simple, just an array of strings as this deliverable doesnt require a full databse

# link: 
https://info30005travelplus.herokuapp.com/visa-requirements

