import './App.css';
import './bootstrap.css';
import Create from './components/Create';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create/>
            </div>
            <div className="col-8">
              One of three columns
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
