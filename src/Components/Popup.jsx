import { useDispatch, useSelector } from "react-redux";
import { hidePopup } from "../Reducers/PopupReducer";
import "./Popup.css";

function Popup() {
    const dispatch = useDispatch();
    const { isOpen, type, message } = useSelector(
        (state) => state.popup
    );

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className={`popup-box ${type}`}>
                <h2>{type === "success" ? "Success!" : "Error!"}</h2>
                <p>{message}</p>
                <button onClick={() => dispatch(hidePopup())}>
                    OK
                </button>
            </div>
        </div>
    );
}

export default Popup;