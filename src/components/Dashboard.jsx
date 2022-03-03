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
    const popularSimple= newsPapers.map(function(item){
      var simple={};
      simple['id']=item.id;
      simple['title']=item.title;
      simple['abstract']=item.abstract;
      simple['url']=item.url;
      var media =item.media[0];
      simple['image']=media["media-metadata"][2];
      return simple;
    });
    setNoticias(popularSimple);
  }
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
