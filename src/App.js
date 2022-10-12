import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { Scree } from "./components/Scree";
function App() {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const check = count % 2 === 0 ? "четное число" : "нечетное число";
  return (
    <div className="div">
      <Scree num={count} />
      <Button text={"Добавить"} func={handleInc} />
      <Button text={"Отнять"} func={handleDec} />
      <Display text={"Вы ввели "} func={check} />
    </div>
  );
}

export default App;
