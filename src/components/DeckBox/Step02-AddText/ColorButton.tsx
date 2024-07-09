function ColorButton(props: any) {
  return (
    <button
      className="text-color-option"
      value={ props.textColorData.hex }
      style={{ background: props.textColorData.hex }}
      onClick={ (e)=> props.handleTextColorChange( e.target.value ) }
    ></button>
  )
}
export default ColorButton