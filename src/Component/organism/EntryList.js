import React from "react";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./scss/EntryList.scss";

export const EntryList = ({ ...props }) => {
  const { rouletteData, deleteRouletteData, shuffleRouletteData } = props;

  return (
    <div className="entry-list">
      <div style={{ display: "flex" }}>
        <p className="title-text">エントリー一覧</p>
        <Button
          variant="contained"
          color="primary"
          style={{
            marginLeft: 15,
            width: 150,
            height: 32,
            marginTop: "auto",
            marginBottom: "auto",
          }}
          onClick={() => {
            shuffleRouletteData();
          }}
        >
          順番を変わる
        </Button>
      </div>
      <div className="button-list">
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
  );
};

// ButtonComponent.PropTypes = {
//   text: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   onClick: PropTypes.func,
// };
