import FindPopup from "./FindPopup";
import HistoryPopup from "./HistoryPopup";


function Popup(props) {
    const { boolFind, boolHistory } = props;
    return (
        <div className="popup">
            { 
                boolFind ? (
                    <FindPopup/>
                ) : ''
            }

            {
                boolHistory ? (
                    <HistoryPopup/>
                ) : ''
            }
        </div>
    );
}

export default Popup;