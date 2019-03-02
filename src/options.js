import React from 'react';
import ReactDOM from 'react-dom';
import SingleOption from "./option.js"

class Options extends React.Component {
    state = {
        isAdded: false
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const optionText = e.target.elements.optionField.value.trim();

        if(optionText) {
            e.target.elements.optionField.value = "";
            this.props.addNewOption(optionText);
        } else {
            alert("Please fill the form");
        }
    }


    renderForm = () => 
    <form onSubmit = {this.onFormSubmit}>
        <input type = "text" name = "optionField"/>
        <button>Add option</button>
    </form>

    render() {
        return(
            <div>
                <ol>
                    {this.props.options.map((option, index) => <SingleOption 
                    key = {index}
                    optionText = {option}
                    removeOption = {this.props.removeOption}
                    />)}
                </ol>

                    {(this.state.isAdded)
                    ? this.renderForm()
                    : <button onClick = {() => this.setState({isAdded: true})}>Add option</button>
                    }
                 
            </div>
        )
    }
}

export {Options as default}