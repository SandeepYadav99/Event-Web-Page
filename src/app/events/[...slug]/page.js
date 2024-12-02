import React, { Fragment } from "react";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getAllEvents, getFilteredEvents } from "@/helper/api-utils";

export const dynamic = "force-static";


export async function generateMetadata({ params }) {
  const event = (await params).slug
  return {
    title: `Filtered Events`,
    description:`All events for ${event[0]} ${event[1]}`
  }
}

const EventFiltered = async ({ params }) => {
  const slug = (await params).slug;
  if (!slug) {
    return <p className="center">Loading...</p>;
  }
  const yearExtract = slug[0];
  const monthExtract = slug[1];
  const numYear = +yearExtract;
  const numMonth = +monthExtract;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link={"/events"}>Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
};

export default EventFiltered;
