const getRequest = async endpoint => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    return response;
  }
};

const postRequest = async (endpoint, body) => {
  const response = await fetch(endpoint, {
    mode: 'cors',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .catch(error => error.message);
  return response;
};

const deleteRequest = async endpoint => {
  const response = await fetch(endpoint, {
    mode: 'cors',
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .catch(error => error.message);
  return response;
};

export const ApiLogIn = async (username, password) => {
  const body = {
    name: username,
    password,
  };
  const endpoint = 'https://meeting-booker-api.herokuapp.com/api/login';
  const loggedUser = {};
  await postRequest(endpoint, body)
    .then(data => {
      if (data.user.name) {
        loggedUser.id = data.user.id;
        loggedUser.name = data.user.name;
      }
    });
  return loggedUser;
};

export const ApiGetRooms = async () => {
  const foundRooms = [];
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
      });
    });

  return foundRooms.sort((a, b) => {
    const numA = a.id;
    const numB = b.id;
    if (numA < numB) {
      return -1;
    }
    if (numB < numA) {
      return 1;
    }
    return 0;
  });
};

export const ApiGetBookings = async (roomId = null, userId = null,
  lowLimit = null,
  highLimit = null) => {
  const foundBookings = [];
  const roomParam = roomId ? `conference_room_id=${roomId}&` : '';
  const userParam = userId ? `user_id=${userId}&` : '';
  const lowLimitParam = lowLimit ? `low_limit=${lowLimit}&` : '';
  const highLimitParam = highLimit ? `high_limit=${highLimit}&` : '';
  const endpoint = `https://meeting-booker-api.herokuapp.com/api/booking?${roomParam}${userParam}${lowLimitParam}${highLimitParam}`;
  await getRequest(endpoint)
    .then(data => data.json())
    .then(bookings => {
      bookings.data.forEach(booking => {
        foundBookings.push({
          id: booking.id,
          userId: booking.user_id,
          roomId: booking.conference_room_id,
          start: booking.start,
          finish: booking.finish,
        });
      });
    });
  return foundBookings;
};

export const ApiCreateBooking = async (userId, roomId, start, finish) => {
  const body = {
    user_id: userId,
    conference_room_id: roomId,
    start,
    finish,
  };
  const endpoint = 'https://meeting-booker-api.herokuapp.com/api/booking';
  const createdBooking = {};
  await postRequest(endpoint, body)
    .then(booking => {
      createdBooking.id = booking.data.id;
      createdBooking.userId = booking.data.user_id;
      createdBooking.roomId = booking.data.conference_room_id;
      createdBooking.start = booking.data.start;
      createdBooking.finish = booking.data.finish;
    });
  return createdBooking;
};

export const ApiDeleteBooking = async bookingId => {
  const body = {
    id: bookingId,
  };
  const endpoint = `https://meeting-booker-api.herokuapp.com/api/booking/${bookingId}`;
  const deletedBooking = {};
  await deleteRequest(endpoint, body)
    .then(booking => {
      deletedBooking.id = booking.data.id;
      deletedBooking.userId = booking.data.user_id;
      deletedBooking.roomId = booking.data.conference_room_id;
      deletedBooking.start = booking.data.start;
      deletedBooking.finish = booking.data.finish;
    });
  return deletedBooking;
};
