export default function CharacterList ({ characters }) {
    const ImgVar = `https://www.justcolor.net/ninos/wp-content/uploads/sites/25/nggallery/harry-potter/dibujos-para-colorear-para-ninos-harry-potter-81640.jpg.webp`;
    return (<ul className="cards">
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
    );
};