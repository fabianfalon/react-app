
import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value, password: password.value
    })
  }

  return (
    <Fragment>
      <h2>{title}</h2>
      <Form onSubmit={handleSubmit}>
        {/* <input placeholder='Email' value={email.value} onChange={email.onChange} />
        es lo mismo que lo de abajo
      */}
        <Input placeholder='Email' disabled={disabled} {...email} required />
        <Input placeholder='Password' disabled={disabled} type='password' {...password} required />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
