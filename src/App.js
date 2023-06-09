import React, {useEffect, useState} from 'react';
import Navigation from './components/Navigation';
import Characters from './components/Characters';
import Pages from './components/Pages';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './paginas/HomePage';
import PostsPage from './paginas/PostsPage';
import AboutPage from './paginas/AboutPage';
import LoginPage from './paginas/LoginPage';



function App() {

  const [characters, setCharacters] = useState([]);

  const inicialurl = "";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(inicialurl);
  }, []);

  return (
    <>
    <div className="App">
    <Navigation></Navigation>
    <Pages/>
    
    <Routes>
      <Route exact path="/" element={<HomePage/>}></Route>
      <Route exact path="/posts" element={<PostsPage/>}></Route>
      <Route exact path="/about" element={<AboutPage/>}></Route>
      <Route exact path="/login" element={<LoginPage/>}></Route>
    </Routes>
   
    </div>
   

   <div className="container mt-5">
   <Characters characters={characters} />
    </div>
   </>
  );
}

export default App;
