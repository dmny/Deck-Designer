function Footer(props: any) {
  return (
    <div className="footer">
      { props.page !== 0 && (
        <button onClick={() => { props.handlePage((currPage: any) => currPage - 1); }}>Prev</button>
      )}
      <button onClick={() => {
        props.page === props.steps.length - 1 ? alert("FORM SUBMITTED") : props.handlePage((currPage: any) => currPage + 1);
      }}>
        { props.page === 0 ? "Begin" : props.page === props.steps.length - 1 ? "Submit" : "Next" }
      </button>
    </div>
  )
}
export default Footer;