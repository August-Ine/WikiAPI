# WikiAPI
This is a RESTful API built using Node.js, Express, MongoDB, and Mongoose that serves up articles with a name and content

## Toc
- [Installation](#section-1)
- [Usage](#section-2)
- [Endpoints](#section-3)
- [Data model](#section-4)
- [Technologies used](#section-5)
- [Contributing](#section-6)

## Installation {#section-1}
To run this project on your local machine, follow these steps:
-Clone this repository: 'git clone https://github.com/August269/WikiAPI.git'
-Navigate into the project directory: 'cd WikiAPI'
-Install the dependencies: 'npm install'
You will also need to have MongoDB installed on your machine.

## Usage {#section-2} 
To start the server, run the following command in the project directory: 'npm start'
By default, the server will run on 'http://localhost:3000'.

## Endpoints {#section-3}
| Method | Endpoint | Description |
|------------------|------------------|------------------|
| GET   | '/articles'   | Get all articles   |
| POST   | '/articles'  | Create a new article   |
| DELETE   | '/articles'   | Delete all articles   |
| GET  | '/articles/<article-name>'   | Get an article by NAME   |
| PUT   | '/articles/<article-name>'   | Update an article by NAME   |
| PATCH   | '/articles/<article-name>'   | Update a field of a specific document   |
| DELETE   | '/articles/<article-name>'   | Delete a specific article by NAME   |

## Data model {#section-4}
An article has the following properties:
| Property | Type | Description |
|------------------|------------------|------------------|
| 'name'   | String   | The name of the article   |
| 'content'   | String   | The content of the article   |

## Technologies used {#section-5}

## Contributing {#section-6}
Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.
