import rooms from "../rooms";
import {
  GET_ROOMS_SUCCESS,
  GET_ROOMS_PENDING,
  GET_ROOMS_ERROR,
  INITIAL_GET_ROOM_STATE,
} from "../../constants";

const roomsList = [
  {
    id: 1,
    size: 7,
    projector: true,
    created_at: "2020-10-06T21:48:27.076Z",
    updated_at: "2020-10-08T16:05:02.163Z",
  },
  {
    id: 2,
    size: 5,
    projector: false,
    created_at: "2020-10-06T21:48:27.087Z",
    updated_at: "2020-10-06T21:48:27.087Z",
  },
  {
    id: 3,
    size: 8,
    projector: false,
    created_at: "2020-10-06T21:48:27.093Z",
    updated_at: "2020-10-06T21:48:27.093Z",
  },
  {
    id: 4,
    size: 10,
    projector: true,
    created_at: "2020-10-06T21:48:27.110Z",
    updated_at: "2020-10-06T21:48:27.110Z",
  },
  {
    id: 5,
    size: 50,
    projector: true,
    created_at: "2020-10-06T21:48:27.116Z",
    updated_at: "2020-10-06T21:48:27.116Z",
  },
  {
    id: 6,
    size: 15,
    projector: false,
    created_at: "2020-10-06T21:48:27.122Z",
    updated_at: "2020-10-06T21:48:27.122Z",
  },
  {
    id: 7,
    size: 15,
    projector: true,
    created_at: "2020-10-06T21:48:27.128Z",
    updated_at: "2020-10-06T21:48:27.128Z",
  },
];

const pendingRoomsRequest = {
  type: GET_ROOMS_PENDING,
};

const pendingRoomsResult = {
  rooms: [],
  pending: true,
};

const successfulRoomsRequest = {
  type: GET_ROOMS_SUCCESS,
  rooms: roomsList,
  pending: false,
};

const successfulRoomsRequestResult = {
  pending: false,
  rooms: roomsList,
};

const errorRoomsRequest = {
  type: GET_ROOMS_ERROR,
  rooms: [],
  pending: false,
  error: "not found",
};

const errorRoomsRequestResult = {
  rooms: [],
  pending: false,
  error: "not found",
};

it("changes status of request to pending true", () => {
  expect(rooms(INITIAL_GET_ROOM_STATE, pendingRoomsRequest)).toEqual(
    pendingRoomsResult
  );
});

it("changes status of request to pending false and payload contains rooms", () => {
  expect(rooms(INITIAL_GET_ROOM_STATE, successfulRoomsRequest)).toEqual(
    successfulRoomsRequestResult
  );
});

it("changes status of request to pending false and payload is empty", () => {
  expect(rooms(INITIAL_GET_ROOM_STATE, errorRoomsRequest)).toEqual(
    errorRoomsRequestResult
  );
});