# Travel+ homepage
Link: https://info30005travelplus.herokuapp.com/

## Introduction
A website for first-time/ inexperienced Australian travellers to get travel information.
Currently the mock-up web server serves all HTTP requests and responds with 'dummy' data from JSON files.
The functions of the API should be tested with an API testing tool. (e.g. Postman)

## Core function 1: Travel alerts

- Link to travel alerts: https://info30005travelplus.herokuapp.com/alert
- Link to travel plans: https://info30005travelplus.herokuapp.com/plan

Methods:
Once a traveling plan is made by user (no matter how many information user offered), the system will compare the plan with the alert list.
The comparing will occur when the plan update and alert pop ups display when the alert information match.

Dataset: alerts and plans

API testing: by links

Comments: model for this current deliverable is still very simple, just an array of strings as this deliverable doesnt require a full database

Comments: Since most special functions are based on user management system, one functional system should be implement ASAP.

Dataset: alerts and plans

REST API details: by links /alert_test

## Core function 2: Travel docs and immunisation requirement
Displays a set of required documents, immunisation requirements and other useful information needed for visa applications for each country.
- Link to visa req: https://info30005travelplus.herokuapp.com/requirement/visa
- Link to immunisation reqs: https://info30005travelplus.herokuapp.com/requirement/immunisation

#### Features
- Displaying relevant visa application information and immunisation requirements for each country 
- Allows users to search (or lookup) for the information by typing in the country's name

| Method   | Url (example)
| -------- |-------
| get      | ```/requirement/visa/```
| get      | ```/requirement/immunisation/```
| get      | ```/requirement/visa/0001/```
| get      | ```/requirement/immunisation/0001/```

## Core function 3: Discussion forum
A forum app that allows users to discuss travel tips and experiences. This will allow first-time travellers to receive personal advice from experienced travellers.
- Link to forum comments: https://info30005travelplus.herokuapp.com/forum/comment
- Link to forum posts: https://info30005travelplus.herokuapp.com/forum/post

#### Features
- See all comments and posts
- View comments and posts in detail
- Create new comments and posts
- Edit comments and posts
- Delete comments and posts

| Method   | Url (example)
| -------- |-------
| get      | ```/forum/comment/```
| get      | ```/forum/post/```
| get      | ```/forum/comment/1/```
| get      | ```/forum/post/1/```
| post     | ```/forum/comment/```
| post     | ```/forum/post/```
| put      | ```/forum/comment/```
| put      | ```/forum/post/```
| delete   | ```/forum/comment/1/```
| delete   | ```/forum/post/1/```

## Core function 4: Task scheduling

Link: https://info30005travelplus.herokuapp.com/travel-tasks/

#### Features:
- View all travel tasks
- View travel task in detail
- Create travel tasks

| Method   | Url (example)
| -------- |-------
| get      | ```/travel-tasks/```
| get      | ```/travel-tasks/1/```
| post     | ```/travel-tasks/?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/```
| put      | ```/travel-tasks/1?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/```
| delete   | ```/travel-tasks/2/```

## To-do
* [ ] Core function 5: Google Maps API
* [ ] Reconsider if authentication functionality is needed