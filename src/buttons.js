import React from 'react';
import ReactDOM from 'react-dom';


class SystemButtons extends React.Component {
    WhatToDo = () => {
        const randomNumber = Math.floor((Math.random() * this.props.options.length));
        alert(this.props.options[randomNumber])
    }

    render() {
        return(
            <div>
                <button disabled = {this.props.options.length === 0} onClick = {this.WhatToDo}>What should I do?</button>
                <button onClick = {this.props.removeOptions}>Remove all</button>
            </div>
        )
    }
}

export {SystemButtons as default}