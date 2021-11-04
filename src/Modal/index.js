import ReactDom from "react-dom";
import "./Modal.css";

function Modal({children}) {
    return ReactDom.createPortal(
        children,
        document.getElementById("modal")
    );
};

export {Modal};