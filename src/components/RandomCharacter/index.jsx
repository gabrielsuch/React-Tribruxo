import Card from "../Card"
import "./style.css"

import {useState} from "react"

const Random = ({characters}) => {

    const [students, setStudents] = useState([])

    const randomCharacter = () => {
        const houses = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw", ""]
        let arrayStudents = []

        for(let i=0 ; i<3 ; i++)
        {
            const randomHouse = Math.floor(Math.random() * (houses.length - 0) + 0)
            const newFilter = characters.filter((item) => item.house === houses[randomHouse])
            const randomNumber = Math.floor(Math.random() * (newFilter.length - 0) + 0)
            houses.splice(randomHouse, 1)
            arrayStudents = [...arrayStudents, newFilter[randomNumber]]
        }
        setStudents([...arrayStudents])
    }

    return(
        <div>
            <button onClick={randomCharacter}>Sortear</button>
            <ul>
            {
                students.map((student, index) => (
                    <Card key={index} students={student} index={index}/>
                ))
            }
            </ul>
        </div>
    )
}

export default Random