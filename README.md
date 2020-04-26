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
