import textColorData from "../../../data/textColorData";
import ColorButton from "./ColorButton";
import "./ColorPicker.scss";

interface ColorPickerProps {
  handleTextColorChange: (hex: string) => void;
  deckTextColor: string;
}

function colorPicker(props: ColorPickerProps) {
  const colorName = textColorData.filter((obj) => {
    return obj.hex === props.deckTextColor;
  });

  function invertColor(hex: string) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map(function (hex) {
          return hex + hex;
        })
        .join("");
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  const finalColor = invertColor(props.deckTextColor);

  // Look into this for react
  // function checkBrightness(color){
  //   const brightness = Math.round(((parseInt(color[0]) * 299) + (parseInt(color[1]) * 587) + (parseInt(color[2]) * 114)) / 1000)
  //   if(brightness < 150){
  //     setTextColor("rgb(255,255,255)")
  //   } else {
  //     setTextColor("rgb(0,0,0)")
  //   }
  // }
  return (
    <div className="text-color-picker">
      <div
        className="current-text-color"
        style={{ background: props.deckTextColor }}
      >
        <span style={{ color: finalColor }}>{colorName[0].color}</span>
      </div>
      <div className="text-color-options">
        {textColorData.map((textColorData, i) => (
          <ColorButton
            key={i}
            textColorData={textColorData}
            handleTextColorChange={props.handleTextColorChange}
          />
        ))}
      </div>
    </div>
  );
}
export default colorPicker;
