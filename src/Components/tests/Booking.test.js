import { mount, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Booking from "../Booking";

configure({ adapter: new Adapter() });

describe("Test Booking container", () => {
  const booking = {
    id: 4,
    start: "2020-10-13T15:30:00.000Z",
    finish: "2020-10-13T16:30:00.000Z",
    userId: 2,
    roomId: 4,
  };
  const user = {
    loggedIn: true,
    pending: false,
    name: "tester3",
    id: 3,
  }
  let wrapper;
  const mockDeleteBooking = jest.fn();

  beforeEach(() => {
    wrapper = mount(
        <Booking
          deleteBooking={mockDeleteBooking}
          bookingInfo={booking}
          user={user}
        />
    );
  });
  it("should create a container with class booking", () => {
    expect(wrapper.find(".booking")).toHaveLength(1);
  });

  it("should create a container with class booking-info", () => {
    expect(wrapper.find(".booking-info")).toHaveLength(1);
  });
});
