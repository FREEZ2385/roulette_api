import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import "./scss/EntryList.scss";

export const EntryList = ({ ...props }) => {
  const { rouletteData, deleteRouletteData, shuffleRouletteData } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="entry-list">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          エントリー順番変更完了
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            エントリーの順番を変わりました。エントリーリストを改めてご確認してください。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            閉じる
          </Button>
        </DialogActions>
      </Dialog>
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
            setOpen(true);
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
