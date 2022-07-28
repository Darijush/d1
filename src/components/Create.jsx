import { useState } from "react";
import { useContext } from "react"
import AnimalsContext from "./AnimalsContext"


function Create() {
    const { animalsType, setCreateData } = useContext(AnimalsContext);
    const [type, setType] = useState(4)
    const [weight, setWeight] = useState('')
    const buttonClick = () => {
        setCreateData( {type, weight: parseFloat(weight)})
        setType(4);
        setWeight('');
    }
    return (
        <div className="card m-4">
            <h5 className="card-header">Add new Animal</h5>
            <div className="card-body">
                <div className="form-group">
                    <label>Our type of Animals</label>
                    <select className="form-control" value={type} onChange={e => setType(e.target.value)}>
                        {
                            animalsType.map(a => <option key={a.id} value={a.id}>{a.type}</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>How much is the {animalsType.find(a=>a.id==type).type}? </label>
                    <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)}/>
                        <small  className="form-text text-muted">Enter animal weight in (kg)</small>
                </div>
                <button type="button" className="btn btn-outline-info" onClick={buttonClick}>Make this creature move</button>
            </div>
        </div>
    )
}
export default Create