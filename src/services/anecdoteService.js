import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    const response = await axios.post(baseUrl, asObject(anecdote))
    return response.data
}

const upvoteAnecdote = async (id) => {
    const fetchedObject = await axios.get(`${baseUrl}/${id}`)
    ++fetchedObject.data.votes
    const response = await axios.put(`${baseUrl}/${id}`, fetchedObject.data)
    return response.data
}

export default { getAll, createNew, upvoteAnecdote }