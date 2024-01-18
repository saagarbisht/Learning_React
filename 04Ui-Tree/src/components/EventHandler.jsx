import React from 'react'

function EventHandler({event,children}) {
    return (
        <button onClick={event}>{children}</button>
    )
}

export default EventHandler