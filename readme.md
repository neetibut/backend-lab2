# Express CRUD API Example

This is a simple Express.js application that provides a basic CRUD API for managing items. The API includes endpoints to create, read, update, and delete items, using an in-memory array to simulate a database.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Download the project
   Navigate to the project directory
   cd express-restful-routes

2. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the server:

   ```sh
   node index.js
   ```

   To start the development server, type:

   ```sh
   npm run dev
   ```

2. The server will be running at `http://localhost:3000`.

## API Endpoints

### Create an Item

- **URL**: `/api/v1/items`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "id": 1,
    "name": "Item 1"
  }
  ```
- **Response**: `201 Created`

  ```json
  {
    "id": 1,
    "name": "Item 1"
  }
  ```

### Get All Items

- **URL**: `/api/v1/items`
- **Method**: `GET`
- **Response**: `200 OK`
  ```json
  [
    {
      "id": 1,
      "name": "Item 1"
    }
  ]
  ```

### Get an Item by ID

- **URL**: `/api/v1/items/:id`
- **Method**: `GET`
- **Response**: `200 OK`
  ```json
  {
    "id": 1,
    "name": "Item 1"
  }
  ```
- **Response**: `404 Not Found` if the item does not exist

### Update an Item

- **URL**: `/api/v1/items/:id`
- **Method**: `PUT`
- **Body**:
  ```json
  {
    "id": 1,
    "name": "Updated Item"
  }
  ```
- **Response**: `200 OK`
  ```json
  {
    "id": 1,
    "name": "Updated Item"
  }
  ```
- **Response**: `404 Not Found` if the item does not exist

### Delete an Item

- **URL**: `/api/v1/items/:id`
- **Method**: `DELETE`
- **Response**: `204 No Content`
- **Response**: `404 Not Found` if the item does not exist
