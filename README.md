# Simple RESTful API with Express.js and MongoDB

This project is a simple RESTful API that performs CRUD operations on a collection in a MongoDB database.

## Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running.

## Installation

1. Clone this repository: `https://github.com/ghoshSoumitra/Furation`
2. Navigate to the project directory: `cd Furation`
3. Install the dependencies: `npm install`

## Configuration

1. Open the `mongoose.js` file under config folder.
2. Modify the MongoDB connection URL to match your MongoDB configuration.

## Usage

1. Start the server: `node app.js`
2. The API will be accessible at `http://localhost:3000/api/items`.
3. Use Postman to make HTTP requests to the API endpoints.

get('http://localhost:3000/api/items')--to get all the items in collection<br>
get('http://localhost:3000/api/items/:id')--to get a specific item from the collection<br>
post('http://localhost:3000/api/items')---to create a new item<br>
put('http://localhost:3000/api/items/:id')--to update an existing item<br>
delete('http://localhost:3000/api/items/:id')--to delete a specific item
