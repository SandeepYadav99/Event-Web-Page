
import React from 'react'
import EventList from '@/components/events/event-list';
import { getAllEvents } from '@/helper/api-utils';

// eslint-disable-next-line @next/next/no-async-client-component
const HomePage = async() => {
  
 const events = await getAllEvents();
 
  return (
    <div>
      <EventList items={events}/>
    </div>
  )
}

export default HomePage;