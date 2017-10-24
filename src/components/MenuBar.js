import React from 'react'
import InputForm from './InputForm'
import './MenuBar.css'

const MenuBar = (props) => (

    <div className="menu-bar">
        <InputForm
            inputMessage="Search videos"
            buttonTitle="Search"
            onSend={ (value) => props.onSearch(value) } />
    </div>
)

export default MenuBar
