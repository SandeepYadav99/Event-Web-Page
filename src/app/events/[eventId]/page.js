import EventSummary from "@/components/event-detail/event-summary";
import React, { Fragment } from "react";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import { getAllEvents, getEventById } from "@/helper/api-utils";
import Comments from "@/components/input/comments";
export const dynamic = 'force-static';
export async function generateStaticParams() {
  const posts = await getAllEvents();

  return posts.map((post) => ({
    params: { eventId: post.id.toString() }, 
  }));
}


const EventDetails = async ({ params  }) => {
const {eventId} = await params;
  const event = await getEventById(eventId);
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
      <Comments eventId={eventId}/>
    </Fragment>
  );
};

export default EventDetails;
