//@flow

import React, { Component } from 'react';

type Props = {
    onSend: (string) => void,
    inputMessage: string,
    buttonTitle: string
};

class InputFormRefs extends Component<Props, void> {

    form: ?HTMLFormElement

    constructor(props: Props) {
        super(props)
    
        this.form = null
    }

    search() {

        if (this.form instanceof HTMLFormElement) {
            const input = this.form.querySelector("input[name=term]")
            if (input instanceof HTMLInputElement) {
                console.log("Searching using refs", input.value)
                this.props.onSend(input.value)
            }
        }
    }

    render() {
        
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    this.search()
                }} ref={ (form) => this.form = form }>
                
                <input name="term" placeholder={this.props.inputMessage} />

                <button>{this.props.buttonTitle}</button>
            </form>
        )
    }
}
    
export default InputFormRefs