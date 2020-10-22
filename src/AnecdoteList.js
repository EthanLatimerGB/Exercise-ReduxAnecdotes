import React from 'react'
import { connect } from 'react-redux'
import { upVote } from './reducers/anecdoteReducer'
import { setNotification } from './reducers/notificationReducer'

const AnecdoteList = (props) => {
    const handleVote = (event, anecdote) => {
        event.preventDefault()
        props.upVote(anecdote.id)
        props.setNotification(`Upvoted '${anecdote.content}'`, 5000)
    }

    return(
        props.anecdotes.filter(anecdote => anecdote.content.includes(props.filter)).sort((a, b) => b.votes - a.votes).map(anecdote =>
            <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={e => handleVote(e, anecdote)}>vote</button>
                </div>
            </div>
        )
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
    }
}

const mapDispatchToProps = {
    upVote,
    setNotification,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)