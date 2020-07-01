import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter(a => a.content.includes(filter))
  })
  const sortedAnecdotes = anecdotes.concat().sort((a, b) => b.votes - a.votes)

    return (
        <div>
          {sortedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => {
                  dispatch(vote(anecdote))
                  dispatch(setNotification(`You voted '${anecdote.content}'`, 5))
                }}>vote</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default AnecdoteList