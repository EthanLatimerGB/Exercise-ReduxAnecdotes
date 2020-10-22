const notificationReducer = (state = null, action) => {
    switch(action.type){
        case 'SET_NOTIFICATION':
            return action.notification
        case 'SET_NULL': 
            return null
        default: 
            return state
    }
}

var timeoutID

export const setNotification = (notification, time) => {
    return async dispatch => {
        clearTimeout(timeoutID)
        dispatch({
            type: 'SET_NOTIFICATION',
            notification
        })
        timeoutID = setTimeout(() => {
            dispatch({
                type: 'SET_NULL',
            })
        }, time)
    }
}

export default notificationReducer