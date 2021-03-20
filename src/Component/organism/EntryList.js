import React from "react";
import { Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./scss/EntryList.scss";

export const EntryList = ({ ...props }) => {
  const { rouletteData, deleteRouletteData } = props;

  return (
    <div className="entry-list">
      <p className="title-text">エントリー一覧</p>
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
