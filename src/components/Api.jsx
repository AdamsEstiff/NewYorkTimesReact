import {useEffect, useState}  from 'react'
import ApiList from './ApiList';

export default function Api({api, text}) {
  const setNews=async()=>{
    const data= await fetch(api)
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

const [noticias, setNoticias]=useState([]);
const newsFilters=noticias.filter(noticia => noticia.title.toLowerCase().includes(text.toLocaleLowerCase()))
  useEffect(()=>{
    setNews()
  }, []);

  return (
    <ApiList noticias={newsFilters}></ApiList>
  )
}
