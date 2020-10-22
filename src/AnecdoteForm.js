import React from 'react'
import { createAnecdote } from './reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from './reducers/notificationReducer' 

const AnecdoteForm = (props) => {
    const handleAnecdoteSubmit = async (event) => {
        event.preventDefault()
        const content = event.target.anecdoteText.value
        event.target.anecdoteText.value = ''
        props.createAnecdote(content)
        props.setNotification(`Created a new anecdote '${content}'`, 5000)
    }

    return(
        <div> 
            <h2>create new</h2>
            <form onSubmit={handleAnecdoteSubmit}>
                <div>
                    <input name='anecdoteText'/>
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        anecdotes: state.anecdotes,
        notification: state.notification
    }
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)