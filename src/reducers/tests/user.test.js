import user from "../user";
import {
  LOG_IN_PENDING,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  INITIAL_USER_STATE,
} from "../../constants";

const pendingLogInRequest = {
  type: LOG_IN_PENDING,
  pending: true,
};

const pendingLogInResult = {
  pending: true,
  loggedIn: false,
  name: "",
  id: null,
};

const successfulLogInRequest = {
  type: LOG_IN_SUCCESS,
  name: "tester1",
  id: 1
};

const successfulLogInRequestResult = {
  pending: false,
  loggedIn: true,
  name: "tester1",
  id: 1,
};

const errorLogInRequest = {
  type: LOG_IN_ERROR,
  id: null,
  name: "",
};

const errorLogInRequestResult = {
  pending: false,
  name: "",
  id: null,
  loggedIn: false,
};

it("changes status of request to pending true", () => {
  expect(user(INITIAL_USER_STATE, pendingLogInRequest)).toEqual(
    pendingLogInResult
  );
});

it("changes status of request to pending false and payload contains rooms", () => {
  expect(user(INITIAL_USER_STATE, successfulLogInRequest)).toEqual(
    successfulLogInRequestResult
  );
});

it("changes status of request to pending false and payload is empty", () => {
  expect(user(INITIAL_USER_STATE, errorLogInRequest)).toEqual(
    errorLogInRequestResult
  );
});