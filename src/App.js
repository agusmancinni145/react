import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="container">
      <NavBar/>
   <ItemListContainer greeting={"saludos"}/>
    </div>
  );
}

export default App;
