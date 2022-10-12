import "./App.css";
import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";

function App() {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  return (
    <div className="div">
      <p> {count}</p>
      <Button text={"Добавить"} func={handleInc} />
      <Button text={"Отнять"} func={handleDec} />
      <Display
        text={"Вы ввели "}
        func={count % 2 === 0 ? "четное число" : "нечетное число"}
      />
    </div>
  );
}

export default App;
