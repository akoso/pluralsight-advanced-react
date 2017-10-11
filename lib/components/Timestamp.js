import React from 'react'
import storeProvider from './storeProvider'

const timeDisplay = (timestamp) => timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

class Timestamp extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.timestampDisplay}
            </div>
        )
    }
}

function extraProps(store) {
    return {
        timestampDisplay: timeDisplay(store.getState().timestamp)
    }
}

export default storeProvider(extraProps)(Timestamp)