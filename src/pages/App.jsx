import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import '../styles/App.scss'
import CharacterList from '../components/CharacterList';


function App () {

const [characters, setCharacters] = useState ([]);
const [house, setHouse] = useState ("");
const houses = characters.map((characterObj) => characterObj.house);
//Con el set se eliminan los duplicados
const uniqueHouses = [...new Set(houses)];
const [name, setName] = useState ("");



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
          house: characterObj.house,
        };
      }),
    );
  });
}, [uniqueHouses]);

//SECCIÓN FUNCIONES DE EVENTOS

const handleInputName = (ev) => {
  setName(ev.target.value);
};

const handleInputHouses = (ev) => {
  setHouse(ev.target.value);

  fetch("https://hp-api.onrender.com/api/characters/house/" + ev.target.value)
  .then(res => res.json())
  .then (data => {
    setCharacters (data.map ((characterObj) => {
      return {
        image: characterObj.image,
        name: characterObj.name,
        specie: characterObj.species,
        id: characterObj.id,
        house: characterObj.house,
      };
    })); 
  });
}

const filteredCharacters =
characters.filter((characterObj) => {
  return characterObj.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
});

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
        <input
        className="search_carachter"
        type="text"
        id="search_carachter"
        value={name}
        onInput={handleInputName}
        />
        </label>
        <label className="form_label" htmlFor="search_houses">
          Casa:
          <select
          key="search_house"
          className="search_house"
          id="search_house"
          onInput={handleInputHouses}
          value={house}
          >
            <option key="Todas" value="Todas">
              Todas
            </option>
            {uniqueHouses.map((eachHouse) => (
              <option key={eachHouse} value={eachHouse}>
                {eachHouse}
              </option>
            ))}
          </select>
        </label>
      </form>
      <section className="characters_section">
      <h2 className="list_title">Lista de personajes</h2>
      <CharacterList characters={filteredCharacters} />
      </section>
    </main>
  </div>
)
}

export default App;
