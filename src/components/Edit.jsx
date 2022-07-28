import { useEffect } from "react";
import { useContext, useState } from "react"
import AnimalsContext from "./AnimalsContext"

function Edit() {
    const { modalData, setModalData } = useContext(AnimalsContext)
    const { animalsType, setEditData } = useContext(AnimalsContext);
    const [type, setType] = useState(4)
    const [weight, setWeight] = useState('')
    useEffect(() => {
        if (null === modalData) {
            return;
        }
        setWeight(modalData.weight);
        setType(modalData.type);
    }, [modalData])

    if (null === modalData) {
        return null;

    }
    const buttonClick = () => {
        setEditData({ type, weight: parseFloat(weight), id: modalData.id });
        setModalData(null);
    }



    return (
        <div className="modal" >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="close" onClick={() => setModalData(null)}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card m-4">
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
                                    <label>How much is the {animalsType.find(a => a.id == type).type}? </label>
                                    <input type="text" className="form-control" value={weight} onChange={e => setWeight(e.target.value)} />
                                    <small className="form-text text-muted">Enter animal weight in (kg)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setModalData(null)}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={buttonClick}>Save changes</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Edit