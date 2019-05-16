import React from 'react';
import { render } from 'react-dom';

class OneTimeButton extends React.Component {
    state ={
        clicked: false
    }


//click handler
handleClick = () => {
    // click handler won't be called if the button 
    // is disabled, so if we got here, it's safe to 
    // trigger the click
    this.props.onClick();
    this.ListeningStateChangedEvent({clicked: true});
}

render() {
    return (
        <button
        onClick = {this.handleClick}
        disabled={this.state.clicked}
        >
            You can only click me once...
        </button>
        );
    }
}