import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function Header(props) {
    return (_jsxs("div", { className: "header", children: [props.page !== 0 && (_jsx("div", { className: "progress", children: _jsx("div", { className: "progress-bar noselect", style: { width: 100 / (props.steps.length - 1) * (props.page) + "%" } }) })), _jsx("div", { className: "header-text", children: _jsx("h1", { children: props.stepHeader[props.page] }) })] }));
}
export default Header;
