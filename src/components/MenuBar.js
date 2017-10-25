//@flow

import React from 'react'
import InputForm from './InputForm'
import './MenuBar.css'

type Props = {
    onSearch: (string) => void
};

const MenuBar = (props: Props) => (

    <div className="menu-bar">
        <InputForm
            inputMessage="Search videos"
            buttonTitle="Search"
            onSend={ (value: string) => props.onSearch(value) } />
    </div>
)

export default MenuBar
