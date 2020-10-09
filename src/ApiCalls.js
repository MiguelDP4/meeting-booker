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
    mode: 'cors',
    method: 'POST',
    headers: {'Content-Type': 'application/json',},
    body: JSON.stringify(body),
  })
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
  const loggedUser = {};
  await postRequest(endpoint, body)
  .then(data => {
    if(data.user.name) {
      loggedUser.id = data.user.id;
      loggedUser.name = data.user.name;
    }
  });
  return loggedUser;
};

export const ApiGetRooms = async () => {
  const foundRooms = []
  const endpoint = 'https://meeting-booker-api.herokuapp.com/api/conference_rooms';
  await getRequest(endpoint)
  .then(data => data.json())
  .then(rooms => {
    rooms.data.forEach(room => {
      foundRooms.push({
        id: room.id,
        size: room.size,
        projector: room.projector,
      });
    })
  });
  
  return foundRooms.sort((a,b) => {
    const numA = a.id;
    const numB = b.id;
    if(numA < numB){
      return -1;
    }
    if(numB < numA){
      return 1;
    }
    return 0;
  });
};