import ToyMachine from './toyMachine';
import Blind from './blind';
import Es from './es';
import SkateAndDestroy from './skateAndDestroy';
import ScreamingHand from './screamingHand';

function AddStickers() {
  return (
    <div className="stickers">
        <Blind />
        <ToyMachine />
        <Es />
        <SkateAndDestroy />
        <ScreamingHand />
    </div>
  )
}
export default AddStickers