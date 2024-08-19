// Import Axios
const axios = require('axios');
// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });

// In this example: We import Axios using require('axios').
// Use axios.get to make a GET request to a sample API endpoint (https://jsonplaceholder.typicode.com/posts).
// The .then block handles the successful response, and the data is logged to the console.
// The .catch block catches any errors that may occur during the request and logs them to the console.
// You can perform various HTTP methods (GET, POST, PUT, DELETE, etc.) using Axios by calling axios.<method> (e.g., axios.post, axios.put, axios.delete) and handling their respective responses and errors with .then and .catch blocks.

// Remember, Axios returns Promises, allowing you to use async/await to handle asynchronous requests in a more synchronous style. 
// For instance:

async function fetchData() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  fetchData();