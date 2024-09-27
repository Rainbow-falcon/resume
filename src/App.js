import "./App.css";
import Slider from "./components/slider";

function App() {
  return (
    <main>
      <div className="container-fluid p-0 m-0">
        <nav className="navbar bg-white m-3 shadow-sm rounded-3 border border-1 border-light py-3">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
          </div>
        </nav>
        <div className="row m-0">
          <div className="col-auto">
            <Slider />
          </div>
          <div className="col">
            <div className="App">
              <button className="btn btn-primary">suybasd</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
