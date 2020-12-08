import { mount, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import AllBookings from "../AllBookings";

configure({ adapter: new Adapter() });

describe("Test AllBookings container", () => {
  const bookings = [
    {
      id: 4,
      start: "2020-10-13T15:30:00.000Z",
      finish: "2020-10-13T16:30:00.000Z",
      userId: 2,
      roomId: 4,
    },
    {
      id: 6,
      start: "2020-10-02T22:45:00.000Z",
      finish: "2020-10-02T23:45:00.000Z",
      userId: 6,
      roomId: 7,
    },
    {
      id: 7,
      start: "2020-10-07T15:38:00.000Z",
      finish: "2020-10-07T16:08:00.000Z",
      userId: 1,
      roomId: 1,
    },
    {
      id: 10,
      start: "2020-10-15T17:00:00.000Z",
      finish: "2020-10-15T17:45:00.000Z",
      userId: 5,
      roomId: 4,
    },
    {
      id: 12,
      start: "2020-10-04T18:20:00.000Z",
      finish: "2020-10-04T18:40:00.000Z",
      userId: 15,
      roomId: 2,
    },
    {
      id: 17,
      start: "2020-10-29T18:00:00.000Z",
      finish: "2020-10-29T18:30:00.000Z",
      userId: 4,
      roomId: 5,
    },
    {
      id: 18,
      start: "2020-10-30T19:01:00.000Z",
      finish: "2020-10-30T19:31:00.000Z",
      userId: 6,
      roomId: 5,
    },
    {
      id: 19,
      start: "2020-10-30T19:01:00.000Z",
      finish: "2020-10-30T19:31:00.000Z",
      userId: 6,
      roomId: 5,
    },
    {
      id: 22,
      start: "2020-10-23T20:00:00.000Z",
      finish: "2020-10-23T20:30:00.000Z",
      userId: 4,
      roomId: 4,
    },
    {
      id: 23,
      start: "2020-11-06T18:15:00.000Z",
      finish: "2020-11-06T18:45:00.000Z",
      userId: 4,
      roomId: 5,
    },
  ];
  const user = {
    loggedIn: true,
    pending: false,
    name: "tester3",
    id: 3,
  }
  let wrapper;
  const mockLoadBookings = jest.fn();
  const mockDeleteBooking = jest.fn();
  const mockHandleChange = jest.fn();

  beforeEach(() => {
    wrapper = mount(
        <AllBookings
          handleChange={mockHandleChange}
          loadBookings={mockLoadBookings}
          deleteBooking={mockDeleteBooking}
          bookings={bookings}
          user={user}
        />
    );
  });
  it("should create a container with class booking-search-window", () => {
    expect(wrapper.find(".booking-search-window")).toHaveLength(1);
  });

  it("should create a container with class booking-search-result-list", () => {
    expect(wrapper.find(".booking-search-result-list")).toHaveLength(1);
  });

  it("should create the same amount of bookings as there are bookings in the array", () => {
    expect(wrapper.find(".booking")).toHaveLength(bookings.length);
  });
});
