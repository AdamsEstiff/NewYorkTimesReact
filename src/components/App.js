import './App.css';
import { useEffect, useState } from 'react';
import Api from './Api';
import HeaderImage from './headerImage';
import Filter from './Filter';
import { Header, Segment } from 'semantic-ui-react'


function App() {
  const src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_New_York_Times_Logo.svg/512px-The_New_York_Times_Logo.svg.png';
  const api='https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=Sh4Se8tNjMZuoV8DumlcbCRMRODv1Yy7';
  const [text, setText]= useState('')

  return <div className='Dash'>
  <Segment clearing>
    <Header  floated='left'>
        <HeaderImage src={src}></HeaderImage>
    </Header>
    <Header floated='right'>
      <Filter text={text} setText={setText}></Filter>        
    </Header>
  </Segment>
    <Api api={api} text={text}></Api>
  </div>
}
export default App;