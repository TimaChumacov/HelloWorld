import React from 'react';
import ReactDOM from 'react-dom';

const SingleOption = props =>  <li>To do: {props.optionText}
<button onClick = {(e) => {props.removeOption(props.optionText)}}>remove</button>
</li>

export {SingleOption as default}