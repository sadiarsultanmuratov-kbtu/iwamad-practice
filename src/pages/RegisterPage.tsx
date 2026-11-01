import { useState, type ChangeEvent, type FocusEvent, type SubmitEvent } from 'react'
import Button from '../components/ui/Button'
import TextField from '../components/ui/TextField'
import {
  validateRegistration,
  type RegistrationValues,
} from '../lib/validateRegistration'

const emptyValues: RegistrationValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
}

function RegisterPage() {
  const [values, setValues] = useState<RegistrationValues>(emptyValues)
  const [touched, setTouched] = useState<Partial<Record<keyof RegistrationValues, boolean>>>({})
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [registered, setRegistered] = useState(false)

  // Errors are computed on every render, not stored in state
  const errors = validateRegistration(values)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, type, value, checked } = event.target
    setValues((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    const { name } = event.target
    setTouched((current) => ({ ...current, [name]: true }))
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitAttempted(true)
    if (Object.keys(errors).length === 0) {
      setRegistered(true)
    }
  }

  // Show a field's error only after the user left it or pressed submit
  function errorFor(field: keyof RegistrationValues) {
    return touched[field] || submitAttempted ? errors[field] : undefined
  }

  if (registered) {
    return <p role="status">Thanks, {values.fullName.trim()}. You are registered.</p>
  }

  return (
    <section>
      <h1>Register</h1>
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
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('password')}
        />
        <TextField
          label="Confirm password"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errorFor('confirmPassword')}
        />

        <div className="field">
          <label className="check" htmlFor="acceptTerms">
            <input
              id="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              checked={values.acceptTerms}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errorFor('acceptTerms') ? true : undefined}
              aria-describedby={errorFor('acceptTerms') ? 'acceptTerms-error' : undefined}
            />
            I accept the terms
          </label>
          {errorFor('acceptTerms') && (
            <p id="acceptTerms-error" className="field-error">
              {errorFor('acceptTerms')}
            </p>
          )}
        </div>

        <Button type="submit">Create account</Button>
      </form>
    </section>
  )
}

export default RegisterPage
