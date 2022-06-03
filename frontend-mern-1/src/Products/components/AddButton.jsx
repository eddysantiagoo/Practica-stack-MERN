import React from 'react'
import { Container, Section, Button } from 'react-bulma-components'

export default function AddButton() {
  return (
    <Section>
        <Container>
          <div className="is-pulled-right">
           <Button color="primary">Add</Button>
          </div>
        </Container>
    </Section>
  )
}
