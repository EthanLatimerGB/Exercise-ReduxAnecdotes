import React from 'react'
import { setFilter }  from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
    const handleFilterChange = (event) => {
        props.setFilter(event.target.value)
    }

    return(
        <div>
            <h2>Filter: <input name='filter' onChange={handleFilterChange} /></h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        filter: state.filter
    }
}

const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)