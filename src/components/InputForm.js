//@flow

import React, { Component } from 'react';

type Props = {
    onSend: (string) => void,
    inputMessage: string,
    buttonTitle: string
};

type State = {
    inputValue: string
};

class InputForm extends Component<Props, State> {

    constructor(props: Props) {
        super(props)
    
        this.state = {
          inputValue: ""
        }
    }

    search(value: string) {
        console.log("Searching", value)
        this.props.onSend(value)
    }

    render() {
        
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    this.search(this.state.inputValue)
                }}>
                <input
                    placeholder={this.props.inputMessage}
                    onChange={ (event) => this.setState({inputValue: event.target.value}) }
                    value={this.state.inputValue}
                    />

                <button>{this.props.buttonTitle}</button>
            </form>
        )
    }
}
    
export default InputForm