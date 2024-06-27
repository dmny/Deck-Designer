import textColorData from '../data/textColorData'
import ColorButton from '../components/ColorButton'

function colorPicker(props) {
  return (

    <div className="color-picker">
        <div className="current-text-color" style={{background: props.textColor}}>
               <span>{ props.textColor }</span>
        </div>
        <div className="text-color-options">
            { textColorData.map((textColorData,i) => ( <ColorButton key={i} textColorData={textColorData} handleTextColorChange={props.handleTextColorChange}/> )) }
        </div>
    </div>
  )
}

export default colorPicker