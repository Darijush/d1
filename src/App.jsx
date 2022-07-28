import { useEffect } from 'react';
import { useState } from 'react';
import './bootstrap.css';
import './App.scss';
import AnimalsContext from './components/AnimalsContext';
import Create from './components/Create';
import Edit from './components/Edit';
import List from './components/List';
import { create, destroy, read, update } from './functions/localstorage';

const keyLocal = 'myZoo';
const animalsType = [
  { id: 1, type: 'Antis' },
  { id: 2, type: 'Avis' },
  { id: 3, type: 'Antilope' },
  { id: 4, type: 'Bebras' },
  { id: 5, type: 'Briedis' },
  { id: 6, type: 'Barsukas' },
];


function App() {
  const [lastUpdate, setLastUpdate] = useState(Date.now());
  const [modalData, setModalData] = useState(null)

  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [animals, setAnimals] = useState(null)
  useEffect(() => {
    setAnimals(read(keyLocal).sort((a, b) => a.id - b.id));
  }, [lastUpdate]);

  useEffect(() => {
    setAnimals(read(keyLocal))
  }, [lastUpdate])

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(keyLocal, createData);
    setLastUpdate(Date.now())
  }, [createData]);
  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    destroy(keyLocal, deleteData);
    setLastUpdate(Date.now())
  }, [deleteData]);
  useEffect(() => {
    if (null === editData) {
      return;
    }
    update(keyLocal, editData, editData.id);
    setLastUpdate(Date.now())
  }, [editData]);


  return (
    <AnimalsContext.Provider value={{
      animalsType,
      setCreateData,
      animals,
      setDeleteData,
      modalData,
      setModalData,
      setEditData
    }}>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create />
          </div>
          <div className="col-8">
            <List />
          </div>
        </div>
      </div>
      <Edit />
    </AnimalsContext.Provider>
  );
}

export default App;
