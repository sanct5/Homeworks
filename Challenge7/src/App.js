import './App.css';
import FirstApp from './components/firstApp/firstApp';

const App = () => {
  return(
    <>
      <h1>Hola Mundo!</h1>
      <h2>Bienvenido</h2>
      <FirstApp value ={10}/>
    </>
  )
}

export default App