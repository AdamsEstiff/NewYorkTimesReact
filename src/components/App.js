
import './App.css';
import { useEffect, useState } from 'react';
import HeaderMy from './header'
import Dashboard from './Dashboard';

function App() {
  const [noticias, setNoticias]=useState([]);
  useEffect(()=>{
    setNews()
  },[]);
  const setNews= async()=>{
    const data= await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=Sh4Se8tNjMZuoV8DumlcbCRMRODv1Yy7')
    const dataJSON = await data.json();
    const newsPapers = dataJSON.results;
    setNoticias(newsPapers);
  }

  return <div className='Dash'>
      <HeaderMy></HeaderMy>
      <Dashboard></Dashboard>
    </div>
}
export default App;