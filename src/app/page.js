import React, { Fragment } from "react";
import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/helper/api-utils";
import NewsletterRegistration from "@/components/input/newsletter-registration";

export const metadata = {
  title: "NextJS Events",
  description: "Find a lot of great events that allow you to evolve...",
};

const HomePage = async () => {
  const events = await getFeaturedEvents();
 
  return (
    <Fragment>
      <NewsletterRegistration/>
      <EventList items={events} />
    </Fragment>
  );
};

export default HomePage;
