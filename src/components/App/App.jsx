import logo from '../../logo.svg';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You've found Chase Condon's React sandbox. Congrats!
        </p>
        <p>
          You can look around but all the fun stuff is hidden behind that login button ;D
        </p>

        <button type="button" class="btn btn-outline-info btn-lg" data-mdb-ripple-color="dark">
          Login
        </button>
      </header>
    </div>
  );
}

export default App;
