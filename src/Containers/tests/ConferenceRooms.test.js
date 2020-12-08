import { mount, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from 'react-router-dom';
import ConferenceRooms from "../ConferenceRooms";

configure({ adapter: new Adapter() });

describe("Test ConferenceRooms container", () => {
  const conferenceRooms = [
    {
      id: 1,
      size: 7,
      projector: true,
    },
    {
      id: 2,
      size: 5,
      projector: false,
    },
    {
      id: 3,
      size: 8,
      projector: false,
    },
    {
      id: 4,
      size: 10,
      projector: true,
    },
    {
      id: 5,
      size: 50,
      projector: true,
    },
    {
      id: 6,
      size: 15,
      projector: false,
    },
    {
      id: 7,
      size: 15,
      projector: true,
    },
  ];

  let wrapper;
  const mockLoadRooms = jest.fn();

  beforeEach(() => {
    wrapper = mount(
      <Router>
        <ConferenceRooms
          conferenceRooms={conferenceRooms}
          loadRooms={mockLoadRooms}
        />
      </Router>,
    );
  });

  it("should create a container with class booking-search-result-list", () => {
    expect(wrapper.find(".conference-room-list")).toHaveLength(1);
  });

  it("should create the same amount of Conference rooms as there are rooms in the array", () => {
    expect(wrapper.find(".conference-room")).toHaveLength(conferenceRooms.length);
  });
});
