import Card from "../Card"
import "./style.css"

import {useState} from "react"

const Random = ({characters}) => {

    const [personagens, setPersonagens] = useState([])

    const randomCharacter = () => {
        const houses = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw", ""]
        let arrayPersonagens = []

        for(let i=0 ; i<3 ; i++)
        {
            const randomHouse = Math.floor(Math.random() * (houses.length - 0) + 0)
            const newFilter = characters.filter((item) => item.house === houses[randomHouse])
            const randomNumber = Math.floor(Math.random() * (newFilter.length - 0) + 0)
            houses.splice(randomHouse, 1)
            arrayPersonagens = [...arrayPersonagens, newFilter[randomNumber]]
        }
        setPersonagens([...arrayPersonagens])
    }

    return(
        <div>
            <button onClick={randomCharacter}>Sortear</button>

            <Card personagens={personagens} setPersonagens={setPersonagens}/>
        </div>
    )
}

export default Random