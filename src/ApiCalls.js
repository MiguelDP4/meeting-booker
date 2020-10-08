const getRequest = async endpoint => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response;
  }
};

const postRequest = async (endpoint, body)=> {
  const response = await fetch(endpoint, {
    mode: 'no-cors',
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(body),
  })
  //.then(response => console.log(response))
  .then(response => response.json())
  .catch((error) => {console.error('Error:', error)});
  return response;
};

export const ApiLogIn = async (username, password) => {
  const body = {
    name: username,
    password: password,
  }
  const endpoint = 'https://meeting-booker-api.herokuapp.com/api/login';
  //const endpoint = 'http://localhost:3000/api/login';
  const loggedUser = {};
  await postRequest(endpoint, body)
  .then(data => data.json())
  .then(data => console.log(data))
  .then(user => {
    loggedUser.id = user.id;
    loggedUser.name = user.name;
  });
  return loggedUser;
};