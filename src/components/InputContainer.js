import React from 'react'
import Textfield  from './Textfield'
import Label from './Label'

function InputContainer({name, type, labelContent, value, onChange}) {
    return (
        <section className="input-container flex flex-col-reverse relative">
            
            <Textfield props={{name, type}} value={value} onChange={onChange}/>
            <Label props={{labelContent, name}} />
        </section>
    )
}

export default InputContainer
