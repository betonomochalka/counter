import { useEffect, useState } from "react";
import './App.css'
import { Wallet } from "fuels";
import { PisyaAbi__factory } from "./types";
import { count } from 'console';

const contractId = "0x...";
const wallet = new Wallet("0x...");
const contract = PisyaAbi__factory.connect(contractId, wallet);

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    async function main() {
      const { value } = await contract.functions.counter().get();
      setCounter(Number(value));
    }
    main();
  }, []);

  async function increment_bank() {
    const { value } = await contract.functions.increment_bank(1).call();
    setCounter(Number(value));
  }

  async function decrement_bank() {
    const { value } = await contract.functions.decrement_bank(1).call();
    setCounter(Number(value));
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>Counter: {counter}</p>
        <button onClick={increment_bank}>Increment</button>
        <button onClick={decrement_bank}>Decrement</button>
      </header>
    </div>
  );
}

export default App
