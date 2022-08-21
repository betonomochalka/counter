import { useEffect, useState } from "react";
import { Wallet } from "fuels";
import "./App.css";
import { PisyaAbi__factory } from "./types";


const WALLET_SECRET =
  "0xde97d8624a438121b86a1956544bd72ed68cd69f2c99555b08b1e8c51ffd511c";

const CONTRACT_ID =
  "0x1e2d6699894311824dde09ad77be539f7fc3a2ea72f61f839238298c87e8da0a";

const wallet = new Wallet(WALLET_SECRET);

const contract = PisyaAbi__factory.connect(CONTRACT_ID, wallet);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function main() {
      const { value } = await contract.functions.get_bank().get();
      setCount(Number(value));
    }
    main();
  }, []);

  async function increment() {
    const { value } = await contract.functions.increment_bank().call();
    setCount(Number(value));
  }

  async function decrement() {
    const { value } = await contract.functions.decrement_bank().call();
    setCount(Number(value));
  }

  return (
    <div className="App">
      <h1>Pisya</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default App
