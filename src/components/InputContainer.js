import React from 'react'
import Textfield  from './Textfield'
import Label from './Label'

function InputContainer({name, type, labelContent}) {
    return (
        <section className="input-container flex flex-col-reverse relative">

            <Textfield props={{name, type}}/>
            <Label props={{labelContent, name}} />
        </section>
    )
}

export default InputContainer
