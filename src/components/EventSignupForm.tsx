import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react'
import Button from './ui/Button'
import TextField from './ui/TextField'
import type { CampusEvent } from '../data/events'
import { validateSignup, type SignupValues } from '../lib/validateSignup'

type EventSignupFormProps = {
  event: CampusEvent
}

const emptyValues: SignupValues = { fullName: '', email: '', tickets: '1' }

function EventSignupForm({ event }: EventSignupFormProps) {
  const [values, setValues] = useState<SignupValues>(emptyValues)
  const [touched, setTouched] = useState<Partial<Record<keyof SignupValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [seatsLeft, setSeatsLeft] = useState(event.seats)
  const [message, setMessage] = useState('')

  // not stored in state, computed every render
  const errors = validateSignup(values, seatsLeft)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    const { name } = e.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length > 0) return

    setSeatsLeft(seatsLeft - Number(values.tickets))
    setMessage(`Booked: ${values.tickets} for ${values.fullName.trim()}.`)
    // empty form for the next booking
    setValues(emptyValues)
    setTouched({})
    setSubmitAttempted(false)
  }

  function errorFor(field: keyof SignupValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  return (
    <div>
      <p>Seats left: {seatsLeft}</p>
      {message && <p role="status">{message}</p>}

      <form className="form" onSubmit={handleSubmit} noValidate>
        <TextField
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('fullName')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('email')}
        />
        <TextField
          label="Tickets"
          name="tickets"
          type="number"
          min={1}
          max={4}
          value={values.tickets}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('tickets')}
        />
        <Button type="submit">Book</Button>
      </form>
    </div>
  )
}

export default EventSignupForm
