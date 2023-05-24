[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11095857&assignment_repo_type=AssignmentRepo)
</br></br></br>
![iod logo](https://x4w8f4y8.rocketcdn.me/wp-content/uploads/2020/05/iod_h_tp_white_c.png)
</br></br></br>
![iod_miniproject_3](https://i.ibb.co/Gx5cNRS/Screenshot-2023-05-03-at-11-12-47-PM.png)
</br></br></br>

<div align="center">

# *the BACKEND*

</div>

</br>

## Objective  
Create a backend that does something useful with a chosen 3rd party API(s) and includes a database

<br>

## Design Steps:

1. Choose a API to work with from the list of [FREE APIs](https://docs.google.com/spreadsheets/d/15iDpjqyBkSse9wcN7vvQvORBvX8P_ivAjm-iKXp776Y/edit#gid=0)
2. Decide on what you want to improve / add
3. Write down your objectives in a text doc

## Build steps:

1. Follow the link to the Github Classroom repo and clone it to your local PC
(Inside the repo)
2. Create a new backend express app
3. Connect it to a database (MySQL or MongoDB. You choose)
4. Create routes to perform the required operations. (Make sure you use all CRUD operations at least once!)
5. Create Controllers / Modals
6. Test your routes with Postman
7. Create API documentation with swagger ui

8. Present your backend project to the class (Aim for a 5min presentation. The presentation date is the 22nd May)

<br><br><br><br>

## Ideas to talk about in the presentation

▪ What was your requirements gathering and design process? Was it useful/successful?
The requirements of this project were to choose a third-party API, create a backend express app and connect it to an appropriate database based on the API. In this case, my chosen database for this project is MongoDB based on the  fruit API data being non-relational. 
</br>

▪ Give a high level overview of your application and its features.
The app is a backend Express.js web app (a open-source and popular app framework for node.js. Provides a simple and flexible way to build web apps and APIs) that is connected to a database (MongoDB). The application provides API 
endpoints that support CRUD (Create, Read, Update and delete) operations on the database, with routes defined using Express.js router.

The application uses controllers and models to handle business logic and interact with the db. The application is tested using a tool called Postman to see if the API endpoints are working 
The application provides API documentation using Swagger UI, which allows developers to interact with the API and understand how to use if effectively. 
</br>

▪ Where does its data come from (external/internal APIs)?
My data comes from an external API which is the fruit API 'https://fruityvice.com/api/fruit/all'

</br>
▪ How does the back end process this data?
The backend processes data by receiving requests from clients (in this case the web browser), processing the data
in the request, interacting with the db to retrieve or modify the data as needed and sending a response back to the client. 

The backend receives a request from a client which contains information such as the HTTP method (GET, POST, PUT, or DELETE) and the data being sent. 

This is followed by parsing the request (process of extracting relevant information from the HTTP request that the client sends to the server), processing the data in the request, performing any transformations before interacting with the database, then interacting with the MongoDB database to retrieve or modify the data as needed. This includes executing, updating records, creating new records, and then generating a response. 

Once the db interaction is complete, the backend generates a response based on the results of the operation. This is then followed by sending the response where the backend sends the response back to the client in the form of an HTTP response - the response includes a status code, headers and a response body containing data or error messages. 
</br>

▪ How can the user interact with this data?
Users can interact with the fruit API data by connecting the express application to the MongoDB database and then use the API endpoints/routes to perform CRUD (Create, Read, Update, Delete) operations on the data in the database.
Eg: users can use the "GET" method to retrive data, the "POST" method to create new data, the "PUT" method to update
data, and the "DELETE" method to delete data. 

Then have controllers and models that define the logic and structure for interacting with the database. Users can use these components to customise the behaviour of the API based on their requirements.

Users can then test the API routes using Postman to ensure the API and API endpoints are working as expected. Then use Swagger UI to create API documentation that outlines the structure of the API and its endpoints. The documentation can help other developers understand how to use the API and what kind of data to expect from it. 
</br>

▪ What JS techniques have you used ?
*(eg. objects/arrays/DOMfunctions/loops/functions/ifs)*
objects, functions, arrays, find, req, res, etc 
</br>

▪ What external tools/libraries have you used? How? Why?
*(eg. bootstrap/axios/charts)*
I utilised mongoose (a popular Object Data Modeling library - acts as a bridge between your Node.js application and the MongoDB database) for MongoDB database. It provides a simple, flexible
and powerful way to interact with MongoDB from Node.js applications. Mongoose allows you to define schemas for your data and provides a set of methods for creating, reading, updating and deleting documents in MongoDB. 

I also used Axios (a popular JS library) that allows you to make HTTP requests from your JS applications and handling responses. 

Postman - for API route testing 

Swagger UI- swagger UI is a powerful user interface that allows developers to visualize and interact with the API documentation. Swagger allows one to define the structure and behavior of ones APIs in a standardized and machine-readable format
</br>

▪ How might you extend the features of your application in future?



</br></br></br></br></br>


