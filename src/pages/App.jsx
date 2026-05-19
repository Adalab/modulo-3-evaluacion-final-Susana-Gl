/*import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router";
import '../styles/App.scss'
import CharacterList from '../components/CharacterList';
//import Filters from '../components/Filters';


function App () {

const [characters, setCharacters] = useState ([]);
const [house, setHouse] = useState ("");
const houses = characters.map((characterObj) => characterObj.house);
//Con el set se eliminan los duplicados
const uniqueHouses = [...new Set(houses)];
const [name, setName] = useState ("");
const [selectedHouse, setSelectedHouse] = useState("Todas");



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
}, []);

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
    const matchesName = characterObj.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    const matchesHouse = house === "Todas" || house === "" ? true : characterObj.house === house;
    return matchesName || matchesHouse;
  });



return (
  <div>
    <header className="header">
      <h1 className="header_title">Harry Popoter</h1>
    </header>
    <main className="main">

      <Routes>
        <Route path='/landing'
        element={
          <>
          <form className="filter">
        <h2 className="form_title">Filtrar por...</h2>
        <label className="form_label" htmlFor="search_characters">
          Nombre:
        <input
        className="search_carachter"
        type="text"
        id="search_carachter"
        value={name}
        onChange={handleInputName}
        />
        </label>
        <label className="form_label" htmlFor="search_houses">
          Casa:
          <select
          key="search_house"
          className="search_house"
          id="search_house"
          onChange={handleInputHouses}
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
      </>
      }
      ></Route>

        <Route path="/detail/:id"
        element={<section>Detalles del personaje</section>}>
        </Route>
      </Routes>

      
    </main>
  </div>
)
}

export default App;
*/

import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router";
import '../styles/App.scss'
import CharacterList from '../components/CharacterList';
import Filters from '../components/Filters';
import Landing from './Landing';
import Detail from './Detail';
//import Filters from '../components/Filters';


function App () {
  //Seccion variables de estado

const [characters, setCharacters] = useState ([]);
const [house, setHouse] = useState ("");
const houses = characters.map((characterObj) => characterObj.house);
//Con el set se eliminan los duplicados.
const uniqueHouses = [...new Set(houses)];
const [name, setName] = useState ("");


//Seccion UseEffect

//fetch dentro del useEffect para que se ejecute solo una vez al cargar la página.
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
          alive: characterObj.alive,
          gender: characterObj.gender,
        };
      }),
    );
  });
}, []);

//SECCIÓN FUNCIONES DE EVENTOS (handle)

const handleInputName = (ev) => {
  setName(ev.target.value);
};

const handleInputHouses = (ev) => {
  setHouse(ev.target.value);

// Si elige "Todas", volvemos a pedir todos los personajes para restaurar la lista
};

const filteredCharacters =
  characters.filter((characterObj) => {
    const matchesName = characterObj.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
    const matchesHouse = house === "Todas" || house === "" ? true : characterObj.house === house;
    return matchesName && matchesHouse; 
  });

//Sección funciones o variables helper

function getCharacterById (searchID) {
    return characters.find(characterObj => characterObj.id === searchID) // Devuelve el personaje con el id que le pasamos por parámetro
}

return (
  <div>
    <header className="header">
      <h1 className="header_title">Harry Popoter</h1>
    </header>
    <main className="main">

      <Routes>
        <Route index
        element={
<Landing 
  handleInputName={handleInputName}
    name={name}
    handleInputHouses={handleInputHouses}
    house={house}
    uniqueHouses={uniqueHouses}
    filteredCharacters={filteredCharacters}>
      </Landing>}
      ></Route>

        <Route path="/detail/:id"
        element={<Detail getCharacterById={getCharacterById} />}>
        </Route>
      </Routes>

      
    </main>
  </div>
)
}

export default App;