import "./Header.scss";

interface HeaderProps {
  page: number;
  stepHeader: string[];
}

function Header(props: HeaderProps) {
  return (
    <div className="header">
      {props.page !== 0 && (
        <div className="progress">
          <div
            className="progress-bar noselect"
            style={{
              width: (100 / (props.stepHeader.length - 1)) * props.page + "%",
            }}
          ></div>
        </div>
      )}
      <div className="header-text">
        <h1>{props.stepHeader[props.page]}</h1>
      </div>
    </div>
  );
}
export default Header;
