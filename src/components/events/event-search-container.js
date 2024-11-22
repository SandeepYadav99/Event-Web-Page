"use client";
import React, { Fragment } from "react";
import EventsSearch from "./events-search";
import { useRouter } from "next/navigation";

const EventSearchContainer = () => {
  const router = useRouter();
  const filteredPathHandler = (year, month) => {
    const filteredPath = `/events/${year}/${month}`;
    router.push(filteredPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={filteredPathHandler} />
    </Fragment>
  );
};

export default EventSearchContainer;
