function ColorButton(props: any) {
  return (
    <button
    className="text-color-option"
    value={props.textColorData.hex}
    style={{ background: props.textColorData.hex }}
    onClick={()=> props.handleTextColorChange( event.target.value )}>
    </button>
  )
}
export default ColorButton