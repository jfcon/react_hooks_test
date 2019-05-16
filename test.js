import React, { useState } from 'react';

function OneTimeButton(props){
    // create a new piece of state
    // comes with own update function!
    const [clicked, setClicked] = useState(false);

    // we need to handle button clicks
    // by calling out to the callback prop
    // and then turning the button off

    function doClick() {
        props.onClick();
        setClicked(true);    
    }

    return (
        <button
        onClick={clicked ? undefined : doClick}
        disabled={clicked}
        >
            You can only click me once...
        </button>
    );
}