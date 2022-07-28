import { useContext } from "react"
import AnimalsContext from "./AnimalsContext"
import Line from "./Line"

function List() {
    const {animals} = useContext(AnimalsContext);
    return (
        <div className="card m-4">
            <h5 className="card-header">My ZOO</h5>
            <div className="card-body">
                <ul className="list-group">
                    {
                        animals?.map(a => <Line key={a.id} data={a}/>)
                    }
                </ul>
            </div>
        </div>

    )
}

export default List