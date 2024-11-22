export async function getAllEvents() {
  const response = await fetch(
    "https://event-page1-default-rtdb.firebaseio.com/events.json",
    {
      next: { revalidate: 120 },
    }
  );
  const data = await response.json();
  const transformedData = [];
  for (const id in data) {
    transformedData.push({
      id: id,
      ...data[id],
    });
  }

  return transformedData;
}

export async function getFeaturedEvents() {
  const eventFiltered = await getAllEvents();
  return eventFiltered.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const eventFilteredById = await getAllEvents();
  return eventFilteredById.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const eventFilteredByEvents = await getAllEvents();
  let filteredEvents = eventFilteredByEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });
  return filteredEvents;
}
