import React from 'react';
import ReactDOM from 'react-dom';

const Header = props => {
        return (
            <div>
            <h1>To do list</h1>
            <h2>
            {
                (props.options.length == 0)
                ? <span>You have not any options. Add some.</span>
                : <span>Now you have {props.options.length} options.</span>
            }
            </h2>
            </div>
        )
}

export {Header as default}