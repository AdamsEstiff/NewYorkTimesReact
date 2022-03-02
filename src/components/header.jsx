import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import HeaderImage from './headerImage'
import Searcher from './searcher';
export default function header() {
    const src="https://upload.wikimedia.org/wikipedia/commons/0/02/The_New_York_Times_Logo.svg";
  return (
    <Segment clearing>
        <Header  floated='left'>
            <HeaderImage src={src}></HeaderImage>
        </Header>
        <Header floated='right'>
        <Searcher></Searcher>
        </Header>
    </Segment>
  )
}

