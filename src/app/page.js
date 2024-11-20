import React from 'react'
import EventList from '@/components/events/event-list';
import {  getFeaturedEvents } from '../../dummy-data';

const HomePage = () => {
  const eventList = getFeaturedEvents();

  return (
    <div>
      <EventList items={eventList}/>
    </div>
  )
}

export default HomePage;