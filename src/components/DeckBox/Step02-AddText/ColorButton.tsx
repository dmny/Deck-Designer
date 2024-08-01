interface ClrBtnProps {
  handleTextColorChange(hex: string): void;
  textColorData: {
    color: string;
    hex: string;
  };
}

function ColorButton(props: ClrBtnProps) {
  return (
    <button
      className="text-color-option"
      value={props.textColorData.hex}
      style={{ background: props.textColorData.hex }}
      onClick={() => props.handleTextColorChange(props.textColorData.hex)}
    ></button>
  );
}
export default ColorButton;
