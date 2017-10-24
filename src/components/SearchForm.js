import React, { Component } from 'react';

class SearchForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          inputValue: ""
        }
    }

    search(value) {
        console.log("Searching", value)
        this.props.onSearch(value)
    }

    render() {
        
        return (
            <form onSubmit={
                (event) => {
                    event.preventDefault()
                    this.search(this.state.inputValue)
                }}>
                <input
                    onChange={ (event) => this.setState({inputValue: event.target.value}) }
                    value={this.state.inputValue}
                    />

                <button>Search</button>
            </form>
        )
    }
}
    
export default SearchForm