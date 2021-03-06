import React, { useEffect } from 'react'
import AnecdoteForm from './AnecdoteForm'
import AnecdoteList from './AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/filter'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdoteService'
import { initialiseAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initialiseAnecdotes())
    }, [dispatch])

    return(
        <div>
            <h2>Anecdotes</h2>
            <Notification/>
            <Filter />
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App