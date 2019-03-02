import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header.js"
import Options from "./options.js"
import SystemButtons from "./buttons.js"

class IndecisionApp extends React.Component {
    componentDidMount() {
        const json = localStorage.getItem("options");
        this.setState(() => ({options: JSON.parse(json)}))
        
    }
    
    componentDidUpdate(prevProps, prevState ) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }


    state = {
        options: []
    }

    addNewOption = optionText => this.setState({options: [...this.state.options, optionText]})

    removeOption = optionToRemove => this.setState((prevState) => ({options: prevState.options.filter(option => {
        return optionToRemove !== option 
    })}))

    removeOptions = () => this.setState({options: []}) 

    render() {
        return (
            <div>
                <Header  options = {this.state.options}/>
                <SystemButtons 
                options = {this.state.options}
                removeOptions = {this.removeOptions}
                />
                <Options 
                options = {this.state.options} 
                addNewOption = {this.addNewOption}
                removeOption = {this.removeOption}
                />
                
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("root"))