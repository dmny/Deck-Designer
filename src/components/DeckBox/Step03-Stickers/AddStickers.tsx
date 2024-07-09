import ToyMachine from './Stickers/toyMachine';
import Blind from './Stickers/blind';
import Es from './Stickers/es';
import ScreamingHand from './Stickers/screamingHand';
import './AddStickers.scss';

function AddStickers() {
  return (
    <>
      <div className="coming-soon">Coming Soon!</div>
      <div className="stickers">
          <Blind />
          <ToyMachine />
          <Es />
          <ScreamingHand className="screamingHandSticker" />
      </div>
    </>
  )
}
export default AddStickers