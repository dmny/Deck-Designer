import AddTrucks from './AddTrucks';

export default function AddAccessories(props: any) {
  return (
    <>
    <div className="options">
      <AddTrucks
        deckAttributes={ props.deckAttributes }
        handleChange={ props.handleChange }
      />
    </div>
  </>
  );
};