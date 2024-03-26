import React from 'react'
import EventCard from './EventCard'
import { useSelector } from 'react-redux'

const Events = () => {

  const {allEvents} = useSelector(state=>state.event)

  return (
    <div className='max-w-6xl mx-auto my-12'>
    <h3 className='font-semibold text-xl'>Popular Events</h3>

       <EventCard data={allEvents && allEvents[0]} />
  </div>
  )
}

export default Events