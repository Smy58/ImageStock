import { fastLinks } from "../constants/constants";

function HistoryPopup(props) {
    return (
        <>
            <h3 className="popup__title">Ваши запросы</h3>
            <div className="popup__links">
                {
                    fastLinks.map( item => (
                        <a className="popup__link">{ item }</a>
                    ))
                }
            </div>
        </>
    );
}

export default HistoryPopup;