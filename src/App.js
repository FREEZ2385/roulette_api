import logo from "./logo.svg";
import "./App.css";
import { Wheel } from "react-custom-roulette";
import CloseIcon from "@material-ui/icons/Close";
import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

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
        maxAge: 2000,
      });
    } else {
      setRouletteData(rouletteData.concat({ option: name }));
      setCookie("rouletteData", rouletteData.concat({ option: name }), {
        maxAge: 2000,
      });
    }
    addEntryName("");
  };

  const deleteRouletteData = (index) => {
    if (rouletteData.length == 1) {
      setRouletteData([{ option: "" }]);
      setCookie("rouletteData", [{ option: "" }], {
        maxAge: 2000,
      });
    } else {
      const dataList = [...rouletteData];
      dataList.splice(index, 1);
      setRouletteData(dataList);
      setCookie("rouletteData", dataList, {
        maxAge: 2000,
      });
    }
  };

  const shuffleRouletteData = () => {
    if (rouletteData.length !== 1 && rouletteData[0].option !== "") {
      const dataList = [...rouletteData];
      const shuffledList = shuffle(dataList);
      setRouletteData(shuffledList);
      setCookie("rouletteData", shuffledList, {
        maxAge: 2000,
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
        Ver 0.1 Developed By Lee Freez
      </p>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", marginLeft: 50 }}>
          <div className="roulette">
            <Wheel
              mustStartSpinning={rouletteClick}
              onStopSpinning={() => setRouletteClick(false)}
              prizeNumber={Math.floor(
                Math.random() * (rouletteData.length - 1)
              )}
              data={rouletteData}
              backgroundColors={["#386fa4", "#84d2f6"]}
              innerRadius={20}
              outerBorderWidth={2}
              outerBorderColor="#DDDDDD"
              innerBorderWidth={2}
              innerBorderColor="#DDDDDD"
              radiusLineWidth={rouletteData.length === 1 ? 0 : 1}
              textColors={["#ffffff"]}
            />
          </div>
          <Button
            style={{ marginBottom: 50, width: 100, float: "right" }}
            onClick={() => setRouletteClick(true)}
            variant="contained"
            color="primary"
          >
            回る
          </Button>
        </div>
        <div style={{ width: "50%", marginRight: 50, marginLeft: 50 }}>
          <TextField
            id="outlined-basic"
            label="名前(name)"
            variant="outlined"
            value={entryName}
            onChange={(e) => addEntryName(e.target.value)}
            style={{ backgroundColor: "white", width: "100%", marginTop: 50 }}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 10, width: 100, float: "right" }}
            onClick={() => {
              if (entryName !== "") addRouletteData(entryName);
            }}
          >
            追加
          </Button>
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10, width: 100 }}
              onClick={() => {
                shuffleRouletteData();
              }}
            >
              順番を変わる
            </Button>
          </div>
          <div style={{ marginTop: 80 }}>
            {rouletteData.map((data, index) => {
              if (data.option !== "")
                return (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: 15, marginBottom: 15 }}
                    onClick={() => deleteRouletteData(index)}
                    startIcon={<CloseIcon />}
                  >
                    {data.option}
                  </Button>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
