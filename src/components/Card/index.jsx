import "./style.css"

const Card = ({personagens}) => {

    return(
        <div className="card">
            <ul>
            {
                personagens.map((personagem, index) => (
                    <>
                        <li key={index} className={
                            personagem.house === "Slytherin" ? 
                            "slytherin" :
                            personagem.house === "Gryffindor" ?
                            "gryffindor" :
                            personagem.house === "Hufflepuff" ?
                            "hufflepuff" :
                            personagem.house === "Ravenclaw" ?
                            "ravenclaw" :
                            "nohouse" 
                        }>
                            <h1>Name: {personagem.name}</h1>
                            <p>House: {personagem.house}</p>
                            <p>Gender: {personagem.gender}</p>
                        </li>
                    </>
                ))
            }
            </ul>
        </div>
    )
}
export default Card