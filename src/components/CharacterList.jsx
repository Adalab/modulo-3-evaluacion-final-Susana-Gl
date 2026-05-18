import CharacterItem from "./CharacterItem";

export default function CharacterList ({ characters }) {
    const ImgVar = `https://www.justcolor.net/ninos/wp-content/uploads/sites/25/nggallery/harry-potter/dibujos-para-colorear-para-ninos-harry-potter-81640.jpg.webp`;
    return (<ul className="cards">
        {characters.map((characterObj) => (
          <li key={characterObj.id} className="card">
            <CharacterItem characterObj={characterObj} />
          </li>
        ))}
      </ul>
    );
};