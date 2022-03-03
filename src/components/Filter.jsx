import React from 'react'
import { Input, Form } from 'semantic-ui-react'


export default function Filter({text, setText}) {
    const handleInputChange=({target})=>{
      setText(target.value)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault()
      console.log(text);
    }
  
    return (
        <div>
          <Form onSubmit={handleSubmit}>
              <Input value={text} onChange={handleInputChange} icon='search' type='text' name='search' placeholder='Buscar' />
          </Form>
        </div>
  
    )
}
