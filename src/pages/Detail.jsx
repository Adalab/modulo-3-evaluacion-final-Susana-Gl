import { Link, useParams } from "react-router";

export default function Detail({
    getCharacterById,
    }) {
    const params = useParams();
    const characterFound = getCharacterById(params.id);
    const aliveStatus = characterFound.alive ? "Vivo" : "Muerto";

    return (
        <article className="detailPage">
            <img className="detailImg" src={characterFound.image} alt={"Foto de " + characterFound.name} />
            <section>
                <h2>{characterFound.name}</h2>
                <dl>
                    <dt>Estatus:</dt>
                    <dd>{aliveStatus}</dd>
                    <dt>Especie:</dt>
                    <dd>{characterFound.specie}</dd>
                    <dt>Género:</dt>
                    <dd>{characterFound.gender}</dd>
                    <dt>Casa:</dt>
                    <dd>{characterFound.house}</dd>
                </dl>
                <Link to="/">Volver</Link>
            </section>
        </article>
    )
}
