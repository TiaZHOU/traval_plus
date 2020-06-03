# Travel+ homepage
Link: https://info30005travelplus.herokuapp.com/

## Introduction
A website for first-time or inexperienced Australian travelers to get travel information.
Currently, the mock-up web server serves all HTTP requests and responds with 'dummy' data from JSON files.
The functions of the API should be tested with an API testing tool. (e.g. Postman)

## Core function 1: Travel docs and immunisation requirement
Displays a set of required documents, immunisation requirements and other useful information needed for visa applications for each country.

Link to visa req: https://info30005travelplus.herokuapp.com/requirement/visa

Link to immunisation reqs: https://info30005travelplus.herokuapp.com/requirement/immunisation

#### Features
- Displaying relevant visa application information and immunisation requirements for each country 
- Allows users to access this information for a specific country

| Method   | Url (example)
| -------- |-------
| get      | ```/requirement/visa/```
| get      | ```/requirement/immunisation/```
| get      | ```/requirement/visa/Mexico/```
| get      | ```/requirement/immunisation/0001/```

## Core function 2: Discussion forum
A discussion forum that allows users to discuss travel tips and experiences. This will allow first-time travellers to receive personal advice from experienced travellers.
 
Link to forum comments: https://info30005travelplus.herokuapp.com/forum/comment
 
Link to forum posts: https://info30005travelplus.herokuapp.com/forum/post

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
| post     | ```/forum/comment/?post=My trip&comment=Loved it!&first_name=John&last_name=Doe&date=12-12-2012/```
| post     | ```/forum/post/?title=Is Mexico safe?&content=Let me know&first_name=John&last_name=Doe&date=12-12-2012/```
| put      | ```/forum/comment/1?post=My trip&comment=Loved it!&first_name=John&last_name=Doe&date=12-12-2012/```
| put      | ```/forum/post/1?title=Is Mexico safe?&content=Let me know&first_name=John&last_name=Doe&date=12-12-2012/```
| delete   | ```/forum/comment/1/```
| delete   | ```/forum/post/1/```

## Core function 3: Task scheduling
Allows users to schedule in tasks such as buying plane tickets, renew passports, or to get vaccinated.
(This functionality is unfinished and might need further consideration, for example if authentication is needed)

Link: https://info30005travelplus.herokuapp.com/tasks/

#### Features:
- View all travel tasks
- View travel task in detail
- Create travel tasks
- Update travel tasks
- Delete travel tasks

| Method   | Url (example)
| -------- |-------
| get      | ```/tasks/```
| get      | ```/tasks/1/```
| post     | ```/tasks/```
| put      | ```/tasks/1?taskName=Buy tickets&taskDate=20-03-2019&isDone=false/```
| delete   | ```/tasks/1/```

## Core function 4: Travel alerts
Once a traveling plan is made by user, the system will compare the plan with the alert list.
The comparing will occur when the plan is updated in the database and an alert will pop-up when the travel plan clashes with alert data. (e.g. travel ban clash)

Link to functionality: https://info30005travelplus.herokuapp.com/alert

#### Features:
- Shows users travel alerts.
- Shows travel alerts for specific area.

| Method   | Url (example)
| -------- |-------
| get      | ```/alert/```
| get      | ```/alert/North America/```
