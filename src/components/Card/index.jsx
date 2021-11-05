import "./style.css"

const Card = ({students, index}) => {
    return(
        <div className="card">
            {
                <li className={
                    students.house === "Slytherin" ? 
                    "slytherin" :
                    students.house === "Gryffindor" ?
                    "gryffindor" :
                    students.house === "Hufflepuff" ?
                    "hufflepuff" :
                    students.house === "Ravenclaw" ?
                    "ravenclaw" :
                    "nohouse" 
                }>
                    <h1>Name: {students.name}</h1>
                    <p>House: {students.house}</p>
                    <p>Gender: {students.gender}</p>
                </li>
            }
        </div>
    )
}
export default Card