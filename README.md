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

#####Endpoints:

| Method   | Url (example)
| -------- |-------
| get      | ```/requirement/visa/Mexico/```
| get      | ```/requirement/immunisation/Mexico/```

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

## Core function 3: Task.js scheduling
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

#####Endpoints:
| Method   | Url (example)
| -------- |-------
| get      | ```/alert/```
| get      | ```/alert/North America/```



Group the functionalities of your app by the purpose they serve. For example, for the library app that we have been using in the lectures, I would group them into Login, Account Management, Loan Management, Item Management (for items, such as books), etc. Then I would describe the following for each group/subset of the functionalities.
Please write 2-3 sentences describing each functionality. You can describe what the functionality is and what it achieves. For example, Loan Management – This allows members to loan out items from the library. The librarian uses this functionality to identify all current and overdue items, and send reminders to staff to return any overdue items. The functionality is also used by the librarian to loan out items to members.
Relevant URLs that will be used by your tutor to access the front-end for each functionality. Your tutor will use these URLs to access your front-end and assess the functionalities. Provide sample login details as well.
Provide the names of the views, routes, controllers, and models associated with each functionality (i.e. for each subset/group of functionalities).
Note on testing: We require groups to use the knowledge of testing covered in the subject to evaluate one core functionality that was implemented in Deliverable 3 (all views, models, controllers, routes). Provide the details of how to run the tests in the readme file.