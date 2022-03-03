import React from 'react'
import {Container, Card, Image, Segment, Header} from 'semantic-ui-react';

export default function ApiList({noticias}) {
  return (
    <div>
      <Container textAlign='justified'>
      <Card.Group>
        {
          noticias.map(item=>{
            return(
                <Card key={item.id} color="violet">
                   <Image src={item.image.url} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      {item.title}
                    </Card.Header>
                    <Card.Description>
                      {item.abstract}
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                  <Segment basic>
                    <Header floated='right'>
                      <a href={item.url}>
                        Leer Mas...
                      </a>
                    </Header>
                  </Segment>
                  </Card.Content>
                </Card>
            )
          }
          )
        }
        </Card.Group>
      </Container>
    </div>
  )
}
