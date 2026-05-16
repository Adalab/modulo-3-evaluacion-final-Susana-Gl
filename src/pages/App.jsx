import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import '../styles/App.scss'

function App () {
const ImgVar = `https://www.justcolor.net/ninos/wp-content/uploads/sites/25/nggallery/harry-potter/dibujos-para-colorear-para-ninos-harry-potter-81640.jpg.webp`;
const [characters, setCharacters] = useState ([]);
const [house, setHouse] = useState ("");

useEffect (() => {
  fetch("https://hp-api.onrender.com/api/characters")
  .then(res => res.json())
  .then (data => {
    setCharacters (
      data.map ((characterObj) => {
        return {
          image: characterObj.image,
          name: characterObj.name,
          specie: characterObj.species,
          id: characterObj.id,
        };
      }),
    );
  });
}, [house]);

//SECCIÓN FUNCIONES DE EVENTOS

const handleInputHouses = (ev) => {
  setHouse(ev.target.value);

  fetch("https://hp-api.onrender.com/api/characters" + house)
  .then(res => res.json())
  .then (data => {
    setCharacters (data.map ((characterObj) => {
      return {
        image: characterObj.image,
        name: characterObj.name,
        specie: characterObj.species,
        id: characterObj.id,
      };
    })); 
  });
}



return (
  <div>
    <header className="header">
      <h1 className="header_title">Harry Popoter</h1>
    </header>
    <main className="main">
      <form className="filter">
        <h2 className="form_title">Filtrar por...</h2>
        <label className="form_label" htmlFor="search_characters">
          Nombre:
        <input className="search_carachter" type="text" id="search_carachter"></input>
        </label>
        <label className="form_label" htmlFor="search_houses">
          Casa:
          <select
          className="search_house"
          id="search_house"
          onInput={handleInputHouses}
          value={house}
          >
            <option value="Todas">Todas</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </label>
      </form>
      <section className="characters_section">
      <h2 className="list_title">Lista de personajes</h2>
      <ul className="cards">
        {characters.map((characterObj) => (
          <li key={characterObj.id} className="card">
          <img
            className="card_img"
            src={characterObj.image || ImgVar}
            alt={"Foto de " + characterObj.name}
            title={"Foto de " + characterObj.name}
          />
          <div className="card_text">
          <h4 className="card-name">{characterObj.name}</h4>
          <p className="card-specie">{characterObj.specie}</p>
          </div>
        </li>
        ))};
      </ul>
      </section>
    </main>
  </div>
)
}

export default App;
