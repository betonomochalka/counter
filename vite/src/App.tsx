import { useEffect, useState } from "react";
import './App.css'
import { Wallet } from "fuels";
import { PisyaAbi__factory } from "./types";

const WALLET_SECRET =
  "0xa449b1ffee0e2205fa924c6740cc48b3b473aa28587df6dab12abc245d1f5298";

const CONTRACT_ID =
  "0xa326e3472fd4abc417ba43e369f59ea44f8325d42ba6cf71ec4b58123fd8668a";

const wallet = new Wallet(WALLET_SECRET);

const contract = PisyaAbi__factory.connect(CONTRACT_ID, wallet);

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
