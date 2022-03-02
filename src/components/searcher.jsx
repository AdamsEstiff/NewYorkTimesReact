import React from 'react'
import { Input, Form } from 'semantic-ui-react'


export default function searcher() {
  return (
      <div>
        <Form>
            <Form.Group>
            <Input icon='search' placeholder='Buscar' />
            </Form.Group>
        </Form>
      </div>

  )
}
