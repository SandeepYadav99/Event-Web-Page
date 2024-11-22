import React, { Fragment } from "react";
import EventList from "@/components/events/event-list";
import { getAllEvents } from "@/helper/api-utils";
import EventSearchContainer from "@/components/events/event-search-container";

const AllEventPage = async () => {
  const eventList = await getAllEvents();

  return (
    <Fragment>
      <EventSearchContainer />
      <EventList items={eventList} />
    </Fragment>
  );
};

export default AllEventPage;
