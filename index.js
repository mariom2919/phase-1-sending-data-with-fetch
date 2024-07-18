function submitData(name, email) {
    let formData = {
      name: name,
      email: email
    };
  
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        // Check if the response status is okay (200-299)
        if (!response.ok) {
          throw new Error('Request failed');
        }
        return response.json(); // Parse JSON response
      })
      .then(function(data) {
        // Assuming data includes the new id as `data.id`
        let newId = data.id;
        // Append newId to the DOM
        document.body.innerHTML += `<p>New ID: ${newId}</p>`;
        return data; // Return data for further chaining if needed
      })
      .catch(function(error) {
        // Handle errors
        console.error('Error:', error.message);
        // Append error message to the DOM
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        throw error; // Rethrow the error to propagate it further
      });
  }
  
  // Export submitData function if required
  module.exports = submitData;
  