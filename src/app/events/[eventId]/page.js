"use client";
import EventSummary from "@/components/event-detail/event-summary";

import React, { Fragment } from "react";
import { getEventById } from "../../../../dummy-data";
import { useParams } from "next/navigation";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

const EventDetails = () => {
  const { eventId } = useParams();
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No Error Found</p>
      </ErrorAlert>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        address={event.location}
        date={event.date}
        imageAlt={event.title}
        image={event.image}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetails;
