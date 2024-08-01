import "./Footer.scss";

interface FooterProps {
  page: number;
  stepHeader: string[];
  handlePage(arg0: (currPage: number) => number): unknown;
}

function Footer(props: FooterProps) {
  return (
    <div className="footer">
      {props.page > 1 && (
        <button
          onClick={() => {
            props.handlePage((currPage: number) => currPage - 1);
          }}
        >
          Prev
        </button>
      )}
      <button
        onClick={() => {
          props.page === props.stepHeader.length - 1
            ? alert("FORM SUBMITTED")
            : props.handlePage((currPage: number) => currPage + 1);
        }}
      >
        {props.page === 0
          ? "Begin"
          : props.page === props.stepHeader.length - 1
          ? "Submit"
          : "Next"}
      </button>
    </div>
  );
}
export default Footer;
