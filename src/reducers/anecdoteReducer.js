import thunk from 'redux-thunk'
import anecdoteService from '../services/anecdoteService'

const anecdoteReducer = (state = [], action) => {
    switch(action.type){
        case 'VOTE':
            return state.map((obj) => 
                obj.id === action.data.newObject.id
                    ? { content: action.data.newObject.content, id: obj.id, votes: action.data.newObject.votes }
                    : obj
            )
        case 'ADD-ANECDOTE':
            return state.concat(action.data)
        case 'INIT_ANECDOTES':
            return action.data
        default: 
            return state
    }
}

export const upVote = (id) => {
    return async dispatch => {
        const newObject = await anecdoteService.upvoteAnecdote(id)
        dispatch({
            type: 'VOTE',
            data: {
                newObject
            }
        })
    }
}

export const createAnecdote = (data) => {
    return async dispatch => {
        const response = await anecdoteService.createNew(data)
        dispatch({
            type: 'ADD-ANECDOTE',
            data: response,
        })
    }
}

export const initialiseAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default anecdoteReducer