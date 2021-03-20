import React from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "@material-ui/core";
import "./scss/Roulette.scss";

export const Roulette = ({ ...props }) => {
  const { rouletteClick, setRouletteClick, rouletteData } = props;

  return (
    <div className="roulette">
      <Wheel
        mustStartSpinning={rouletteClick}
        onStopSpinning={() => setRouletteClick(false)}
        prizeNumber={Math.floor(Math.random() * rouletteData.length)}
        data={rouletteData}
        backgroundColors={["#386fa4", "#84d2f6"]}
        innerRadius={20}
        outerBorderWidth={2}
        outerBorderColor="#999999"
        innerBorderWidth={2}
        innerBorderColor="#DDDDDD"
        radiusLineWidth={rouletteData.length === 1 ? 0 : 1}
        textColors={["#ffffff"]}
      />
      <Button
        style={{
          marginBottom: 50,
          width: "30%",
          position: "absolute",
          left: "calc(13vw)",
          top: "calc(26vh)",
          height: "30%",
        }}
        onClick={() => setRouletteClick(true)}
        variant="contained"
        color="primary"
      >
        回る
        <br />
        Roll
      </Button>
    </div>
  );
};

// ButtonComponent.PropTypes = {
//   text: PropTypes.string,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   onClick: PropTypes.func,
// };
