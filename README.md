# WikiAPI
This is a RESTful API built using Node.js, Express, MongoDB, and Mongoose that serves up articles with a name and content

## Toc
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Data model](#data-model)
- [Technologies used](#technologies-used)
- [Contributing](#contributing)

## Installation {#installation}
To run this project on your local machine, follow these steps:
-Clone this repository: 'git clone https://github.com/August269/WikiAPI.git'
-Navigate into the project directory: 'cd WikiAPI'
-Install the dependencies: 'npm install'
You will also need to have MongoDB installed on your machine.

## Usage (#usage)
To start the server, run the following command in the project directory: 'npm start'
By default, the server will run on 'http://localhost:3000'.

## Endpoints (#endpoints)
| Method | Endpoint | Description |
|------------------|------------------|------------------|
| GET   | '/articles'   | Get all articles   |
| POST   | '/articles'  | Create a new article   |
| DELETE   | '/articles'   | Delete all articles   |
| GET  | '/articles/<article-name>'   | Get an article by NAME   |
| PUT   | '/articles/<article-name>'   | Update an article by NAME   |
| PATCH   | '/articles/<article-name>'   | Update a field of a specific document   |
| DELETE   | '/articles/<article-name>'   | Delete a specific article by NAME   |

## Data model (#data-model)
An article has the following properties:
| Property | Type | Description |
|------------------|------------------|------------------|
| 'name'   | String   | The name of the article   |
| 'content'   | String   | The content of the article   |

## Technologies used (#technologies-used)
- Node.js: a server-side JavaScript runtime environment
- Express.js: a web framework for Node.js
- MongoDB: a document-oriented NoSQL database that provides a flexible and scalable way to store and manage data.
- Mongoose: an Object Data Modeling (ODM) library for MongoDB that provides a schema-based solution to model application data.

## Contributing (#contributing)
Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

## Author
https://github.com/August269
