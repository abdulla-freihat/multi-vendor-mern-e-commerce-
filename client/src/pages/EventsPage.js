import React from 'react'
import EventCard from '../components/EventCard'

import { useSelector } from 'react-redux'



const EventsPage = () => {
  const {allEvents} = useSelector(state=>state.event)
  return (
    <div className='min-h-screen p-3'>
    <div className='max-w-6xl mx-auto'>
    
            <EventCard data={allEvents && allEvents[0]} />


            </div>
    
    
    </div>
  )
}

export default EventsPage