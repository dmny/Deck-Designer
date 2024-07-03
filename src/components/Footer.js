import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Footer(props) {
    return (_jsxs("div", { className: "footer", children: [props.page !== 0 && (_jsx("button", { onClick: () => { props.handlePage((currPage) => currPage - 1); }, children: "Prev" })), _jsx("button", { onClick: () => {
                    props.page === props.steps.length - 1 ? alert("FORM SUBMITTED") : props.handlePage((currPage) => currPage + 1);
                }, children: props.page === 0 ? "Begin" : props.page === props.steps.length - 1 ? "Submit" : "Next" })] }));
}
export default Footer;
