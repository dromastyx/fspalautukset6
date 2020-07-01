import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteForm = (props) => {
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)
    }

    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={addAnecdote}>
          <div><input name="anecdote" id="anecdoteInput" /></div>
          <button type="submit" onClick={() => {
            props.setNotification(`You created the anecdote '${document.getElementById('anecdoteInput').value}'`)
          }}>create</button>
        </form>
      </div>
    )
}

export default connect(
  null,
  { createAnecdote, setNotification }
)(AnecdoteForm)