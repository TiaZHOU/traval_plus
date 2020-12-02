# Travel+ homepage
Link: https://info30005travelplus.herokuapp.com/

## Introduction
A website for first-time or inexperienced Australian travelers to get travel information.

## Core function 1: Travel docs and immunisation requirement
Displays a set of required documents, immunisation requirements and other useful information needed for visa applications for each country.

#### Features
- Displaying relevant visa application information and immunisation requirements for each country 
- Allows users to access this information for a specific country

#####Endpoints:

| Method   | Url (example)
| -------- |-------
| get      | ```/requirement/visa/Mexico/```
| get      | ```/requirement/immunisation/Mexico/```

#### Views, routes, controllers, and models
- ```models/visa```
- ```models/immunisation```
- ```routes/req-subroutes/immunisationRouter```
- ```routes/req-subroutes/visaRouter```
- ```controllers/visaController```
- ```controllers/immunisationController```

## Core function 2: Discussion forum
A discussion forum that allows users to discuss travel tips and experiences. This will allow first-time travellers to receive personal advice from experienced travellers.

#### Features
- See all comments and posts
- View comments and posts in detail
- Create new comments and posts
- Edit comments and posts
- Delete comments and posts

|Method | URL (Example)
|-------|-------
|get    |```/forum/posts/all get /tasks/```
|get    |```/forum/posts/:skip/:page get /tasks/:id```
|get    |```/forum/post/:id/single post /tasks/```
|get    |```/forum/user/:username/posts put /tasks/:id```
|post   |```/forum/register delete /tasks/:id```
|post   |```/forum/login```
|post   |```/forum/posts/new```
|put    |```/forum/post/:id/upvote```
|put    |```/forum/post/:id/downvote```
|delete |```/forum/post/:id/delete```
|get    |```/forum/post/:id/comments/all```
|post   |```/forum/post/:id/comment```
|delete |```/forum/post/:id/comment```
|put    |```/forum/comment/:id/upvote```
|put    |```/forum/comment/:id/downvote```
|post   |```/forum/user/:username/action/:action```
|delete |```/forum/user/:username```
|get    |```/forum/app/content```
|put    |```/forum/app/update```

#### Views, routes, controllers, and models
- ```models/Comment```
- ```models/User```
- ```models/Post```
- ```controllers/commentController```
- ```controllers/userController```
- ```controllers/postController```
- ```routes/api```

## Core function 3: Task.js scheduling
A CRUD app that allows users to schedule in tasks such as buying plane tickets, renew passports, or to get vaccinated.

#### Features:
- View all travel tasks
- View travel task in detail
- Create travel tasks
- Update travel tasks
- Delete travel tasks

| Method   | Url (example)
| -------- |-------
| get      | ```/tasks/```
| get      | ```/tasks/:id```
| post     | ```/tasks/```
| put      | ```/tasks/:id```
| delete   | ```/tasks/:id```

#### Views, routes, controllers, and models
- ```models/task```
- ```controllers/taskController```
- ```routes/taskRouter```

## Core function 4: Travel alerts
Once a traveling plan is made by user, the system will compare the plan with the alert list.
The comparing will occur when the plan is updated in the database and an alert will pop-up when the travel plan clashes with alert data. (e.g. travel ban clash)

#### Features:
- Shows users travel alerts.
- Shows travel alerts for specific area.

#####Endpoints:
| Method   | Url (example)
| -------- |-------
| get      | ```/alert/```
| get      | ```/alert/North America/```

#### Views, routes, controllers, and models
- ```models/alerts```
- ```controllers/alertController```
- ```routes/alertRouter```

## Testing
Run ```npm test``` 
