export default function Filters (
    {handleInputName,
    name,
    handleInputHouses,
    house,
    uniqueHouses}) {
    return (
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
    )
}