import React from "react";
import { Button, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./scss/InputText.scss";

export const InputText = ({ ...props }) => {
  const {
    rouletteData,
    entryName,
    addEntryName,
    addRouletteData,
    shuffleRouletteData,
  } = props;

  return (
    <div className="input-text">
      <div>
        <p className="title-text">エントリー入力</p>
        <TextField
          id="outlined-basic"
          label="名前(name)"
          variant="outlined"
          value={entryName}
          onChange={(e) => addEntryName(e.target.value)}
          style={{
            backgroundColor: "white",
            width: "100%",
          }}
          onKeyPress={(ev) => {
            if (ev.key === "Enter") {
              // Do code here
              if (entryName !== "") addRouletteData(entryName);
            }
          }}
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
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 10, width: 130 }}
          onClick={() => {
            shuffleRouletteData();
          }}
        >
          順番を変わる
        </Button>
      </div>
    </div>
  );
};

// ButtonComponent.PropTypes = {
//   text: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   onClick: PropTypes.func,
// };
