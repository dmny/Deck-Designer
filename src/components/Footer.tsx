

function Footer(props) {

  return (
    <>
      { props.page !== 0 && (
        <button onClick={() => { props.handlePage((currPage) => currPage - 1); }}>Prev </button>
      )}

      <button onClick={() => { if (props.page === props.PageDisplay.length - 1) {
            alert("FORM SUBMITTED");
          } else {
            props.handlePage((currPage) => currPage + 1);
          }
        }} >{props.page === props.PageDisplay.length - 1 ? "Submit" : "Next"}
      </button>
    </>
  )
}

export default Footer;