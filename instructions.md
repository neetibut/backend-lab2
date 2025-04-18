# Instructions for Running the Express CRUD API Example

Follow these instructions to get the Express CRUD API example up and running on your local machine.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v14 or higher): You can download it from [here](https://nodejs.org/).
- npm (v6 or higher): It comes with Node.js, but you can also install it separately from [here](https://www.npmjs.com/get-npm).

## Steps to Run the Application

1. **Download the project**

2. **Navigate to the Project Directory**

   Change into the project directory:

3. **Install Dependencies**

   Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

4. **Start the Server**

   Start the server by running:

   ```sh
   node index.js
   ```

   To start the development server, type:

   ```sh
   npm run dev
   ```

5. **Access the API**

   The server will be running at `http://localhost:3000`. You can use a tool like Postman or cURL to interact with the API endpoints.

## API Endpoints

Refer to the [README.md](README.md) file for detailed information about the available API endpoints and how to use them.

## Additional Notes

- The application uses an in-memory array to store items, which means that all data will be lost when the server is restarted.
- For a production application, you would typically use a database to persist data.

## Troubleshooting

- If you encounter any issues, ensure that you have installed the correct versions of Node.js and npm.
- Check for any error messages in the terminal and make sure all dependencies are installed correctly.
