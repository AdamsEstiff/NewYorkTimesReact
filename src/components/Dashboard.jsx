import {useEffect, useState} from 'react'
import {Container, Card, Image, Icon, Segment, Header} from 'semantic-ui-react';

export default function Dashboard() {
  const [noticias, setNoticias]=useState([]);
  useEffect(()=>{
    setNews()
  }, []);
  const setNews=async()=>{
    const data= await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=Sh4Se8tNjMZuoV8DumlcbCRMRODv1Yy7')
    const dataJSON = await data.json();
    const newsPapers= dataJSON.results;
  
    setNoticias(newsPapers);
    console.log(newsPapers);
  }
  return (
    <div>
      <Container textAlign='justified'>
      <Card.Group>
        {
          
          noticias.map(item=>{
            return(
  
                <Card key={item.id}>
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
