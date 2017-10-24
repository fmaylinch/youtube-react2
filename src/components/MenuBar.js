import React from 'react'
import InputForm from './InputForm'

const MenuBar = (props) => (

    <div>
        <InputForm
            inputMessage="Search videos"
            buttonTitle="Search"
            onSend={ (value) => props.onSearch(value) } />
    </div>
)

export default MenuBar
