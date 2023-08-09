import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (    
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <ItemListContainer greeting="Bienvenido"/>
      </body>      
    </>
  );
}

export default App;
