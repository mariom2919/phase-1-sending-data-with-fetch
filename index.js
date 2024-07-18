function submitData(name, email) {
    const userData = {
      name,
      email,
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData),
    };
  
    return fetch("http://localhost:3000/users", configurationObject)
      .then((response) => response.json())
      .then((data) => {
        const userId = document.createElement("p");
        userId.textContent = `New user ID: ${data.id}`;
        document.body.appendChild(userId);
      })
      .catch((error) => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
      });
  }
  