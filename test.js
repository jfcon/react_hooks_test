import React from 'react';
import { render } from 'react-dom';

function OneTimeButton(props){
    return (
        <button onClick={props.onClick}>
            You can only click me once
        </button>
    )
}

function sayHi(){
    console.log('Heya!');
}

render(
    <OneTimeButton onClick={sayHi}/>,
    document.querySelector('#root')
)