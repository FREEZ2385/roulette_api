import logo from "./logo.svg";
import "./App.css";
import { Wheel } from "react-custom-roulette";
import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Roulette } from "./Component/organism/Roulette";
import { EntryList } from "./Component/organism/EntryList";
import { InputText } from "./Component/organism/InputText";
import packageJson from "../package.json";

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function App() {
  const [rouletteClick, setRouletteClick] = useState(false);
  const [rouletteData, setRouletteData] = useState([{ option: "" }]);
  const [cookies, setCookie, removeCookie] = useCookies(["rouletteData"]);
  const [entryName, addEntryName] = useState("");

  useEffect(() => {
    if (cookies.rouletteData) setRouletteData(cookies.rouletteData);
  }, []);

  const addRouletteData = (name) => {
    if (rouletteData.length === 1 && rouletteData[0].option === "") {
      setRouletteData([{ option: name }]);
      setCookie("rouletteData", [{ option: name }], {
        expires: new Date(Date.now() + 2592000),
      });
    } else {
      setRouletteData(rouletteData.concat({ option: name }));
      setCookie("rouletteData", rouletteData.concat({ option: name }), {
        expires: new Date(Date.now() + 2592000),
      });
    }
    addEntryName("");
  };

  const deleteRouletteData = (index) => {
    if (rouletteData.length == 1) {
      setRouletteData([{ option: "" }]);
      setCookie("rouletteData", [{ option: "" }], {
        mexpires: new Date(Date.now() + 2592000),
      });
    } else {
      const dataList = [...rouletteData];
      dataList.splice(index, 1);
      setRouletteData(dataList);
      setCookie("rouletteData", dataList, {
        expires: new Date(Date.now() + 2592000),
      });
    }
  };

  const shuffleRouletteData = () => {
    if (rouletteData.length !== 1 && rouletteData[0].option !== "") {
      const dataList = [...rouletteData];
      const shuffledList = shuffle(dataList);
      setRouletteData(shuffledList);
      setCookie("rouletteData", shuffledList, {
        expires: new Date(Date.now() + 2592000),
      });
    }
  };

  return (
    <div className="App">
      <div style={{ textAlign: "center", fontSize: 24, marginTop: 20 }}>
        ルーレット＆順番決め <br />
        Roulette & OrderNumber
      </div>
      <p style={{ textAlign: "right", color: "#CCCCCC", marginRight: 20 }}>
        Ver {packageJson.version} Developed By Lee Freez
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", marginLeft: 50 }}>
          <Roulette
            rouletteClick={rouletteClick}
            setRouletteClick={setRouletteClick}
            rouletteData={rouletteData}
          />
        </div>
        <div style={{ width: "50%", marginRight: 50, marginLeft: 50 }}>
          <InputText
            rouletteData={rouletteData}
            entryName={entryName}
            addEntryName={addEntryName}
            addRouletteData={(text) => addRouletteData(text)}
          />
          <hr style={{ borderTop: "1px solid #cccccc" }} />
          <EntryList
            deleteRouletteData={(index) => deleteRouletteData(index)}
            rouletteData={rouletteData}
            shuffleRouletteData={shuffleRouletteData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
