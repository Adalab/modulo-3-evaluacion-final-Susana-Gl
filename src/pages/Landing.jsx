    import Filters from "../components/Filters";
    import CharacterList from "../components/CharacterList";
    
    export default function Landing({
    handleInputName,
    name,
    handleInputHouses,
    house,
    uniqueHouses,
    filteredCharacters
          }) {
          return (
          <>
          <Filters
            handleInputName={handleInputName}
            name={name}
            handleInputHouses={handleInputHouses}
            house={house}
            uniqueHouses={uniqueHouses}
          />
      <section className="characters_section">
      <h2 className="list_title">Lista de personajes</h2>
      <CharacterList characters={filteredCharacters} />
      </section>
      </>
      )
    }