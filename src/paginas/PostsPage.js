import { Container } from "react-bootstrap";
import Characters from "../components/Characters";
import React, {useEffect, useState} from 'react';



function PostsPage() {

const [characters, setCharacters] = useState([]);
const inicialurl = "https://digimon-api.vercel.app/api/digimon";

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
        <Container>
        <h1>Characters</h1>
        <Characters></Characters>
        </Container>
        </div>
    
       <div className="container mt-5">
  
       <Characters characters={characters} />
        </div>
       </>


    );
}

export default PostsPage;