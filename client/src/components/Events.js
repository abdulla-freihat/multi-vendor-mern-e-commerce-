import React from 'react'
import EventCard from './EventCard'

const Events = () => {
  return (
    <div className='max-w-6xl mx-auto my-12'>
    <h3 className='font-semibold text-xl'>Popular Events</h3>

       <EventCard />
  </div>
  )
}

export default Events