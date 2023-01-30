 


import React,{useState,useEffect} from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'


function App() {

  const [items,setItems] = useState([]);
  const [active,setActive] = useState(1);
  const [category,setCategory] = useState("general");

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=12ad071687ed48b691c9c029d964a4e9`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
    .then(data => console.log(data.articles))
  },[category])
  return (
    <div className="App">
     <h1 className='title'>See the latest News</h1>
     <Menu active={active} setactive={setActive} setCategory={setCategory}/>
     <NewsGrid items={items}/>
    </div>
  );
}

export default App;
