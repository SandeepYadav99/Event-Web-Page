"use client";
import React from 'react'
import EventList from '@/components/events/event-list';
import { getAllEvents } from '../../../dummy-data';
import EventsSearch from '@/components/events/events-search';
import { useRouter } from 'next/navigation';


const AllEventPage = () => {
  const router = useRouter()
  const eventList = getAllEvents();

  const filteredPathHandler=(year, month)=>{
    const filteredPath= `/events/${year}/${month}`;
     router.push(filteredPath)
  }
  return (
    <div>
      <EventsSearch onSearch={filteredPathHandler}/>
      <EventList items={eventList}/>
    </div>
  )
}

export default AllEventPage;