// import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };

  // const checkNum = () => {
  //   if (count % 2 === 0) {
  //     console.log("+");
  //     return "`Четное`";
  //   } else {
  //     console.log("-");
  //     return "`Нечетное`";
  //   }
  // };
  // const displayCheck = () => {
  //   checkNum()
  // };

  const divStyle = {
    width: "1440px",
    height: "600px",
    fontSize: "30px",
    paddingLeft: "550px",
    color: "blue",
    backgroundColor: "pink",
  };
  const parStyle = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px",
    paddingBottom: "20px",

    width: "200px",
    border: "2px solid white",
    borderImage: "linear-gradient(-45deg, #3498db, #e67e22) 1",
  };
  const btnStyle = {
    width: "130px",
    height: " 45px",
    background: " #ffffff",
    border: "1px solid rgba(0, 0, 0, 0.6)",
    borderRadius: "50px",
    cursor: "pointer",
    opacity: "1",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    letterSpacing: "0.7px",
  };
  return (
    <div style={divStyle}>
      <p style={parStyle}> {count}</p>
      <button style={btnStyle} onClick={handleInc}>
        Добавить
      </button>
      <button style={btnStyle} onClick={handleDec}>
        Отнять
      </button>
      {/* <button style={btnStyle} >
        Проверка
      </button> */}
      <p>Вы ввели {count % 2 === 0 ?"четное":"нечетное" } число!</p>
    </div>
  );
}

export default App;
