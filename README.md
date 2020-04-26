# Scheduling Express API
Serves all HTTP requests and responds with MongoDB test data (Under "/travel-tasks" route)
The functionalities should be tested with an API testing tool
Mock-up front end for homepage

Users are able to:
  1. See all tasks
```
/travel-tasks/
```
  2. Create new tasks
```
/travel-tasks/?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/
```
  3. Find a specific task
```
/travel-tasks/1/
```
  4. Modify/update tasks
```
/travel-tasks/1?taskName=Buy%20tickets&taskDate=20-03-2020&isDone=false/
```
  5. Delete tasks
```
/travel-tasks/2/
```
