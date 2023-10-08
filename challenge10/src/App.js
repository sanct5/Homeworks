import './App.css';
import useCounter from './hooks/useCounter';

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Resetear</button>
    </div>
  );
}

export default App;
