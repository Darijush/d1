import { useContext } from "react";
import AnimalsContext from "./AnimalsContext";

function Line({ data }) {
    const { animalsType, setDeleteData, setModalData } = useContext(AnimalsContext)
    const doEdit = ()=>{
        setModalData({...data})
    }
    return (
        <li className="list-group-item">
            <div className="line">
                <div className="line_content">
                    <span className="line_content_title">
                        {animalsType.find(a => a.id == data.type).type}
                    </span>
                    <span className="line_content_w">
                        {data.weight} KG
                    </span>
                </div>
                <div className="line_buttons">
                    <button type="button" className="btn btn-outline-success" onClick={doEdit} >Edit</button>
                    <button type="button" className="btn btn-outline-danger" onClick={()=> setDeleteData(data.id)}>Remove</button>
                </div>
            </div>
        </li>
    )
}

export default Line;