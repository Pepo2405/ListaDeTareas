import './App.css';
import {Header} from './components/Header';
import ListaDeTareas from './components/ListaDeTareas';
import {BiTask} from 'react-icons/bi'

function App() {
  return (
    <div className="App-tareas">
      <Header>
      </Header>
      <div className='tareas-lista-principal'>
        <h1 className='flex-center'>Mis Tareas <BiTask/></h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
