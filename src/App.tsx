import { createSignal } from "solid-js";
import "./App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h1>Cypress Tests</h1>
      <div class='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p id='docs'>Section to test. Click here to for documentation.</p>
      </div>
    </>
  );
}

export default App;
