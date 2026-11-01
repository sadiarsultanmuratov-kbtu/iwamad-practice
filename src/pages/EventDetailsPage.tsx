import { Link, useParams } from 'react-router'
import EventSignupForm from '../components/EventSignupForm'
import { events } from '../data/events'

function EventDetailsPage() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === Number(eventId)) // URL gives a string

  if (!event) {
    return (
      <section>
        <h1>Event not found</h1>
        <p>No event with id {eventId}.</p>
        <Link to="/events">Back to events</Link>
      </section>
    )
  }

  return (
    <section>
      <h1>{event.title}</h1>
      <p>
        {event.date} · {event.place}
      </p>
      {/* key: a new form (and seat count) for every event */}
      <EventSignupForm key={event.id} event={event} />
      <Link to="/events">Back to events</Link>
    </section>
  )
}

export default EventDetailsPage
