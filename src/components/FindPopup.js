import { fastLinks } from "../constants/constants";


function FindPopup(props) {
    return (
        <>
            <input type='text' className="popup__input" placeholder="Поиск"></input>
            <div className="popup__line"></div>
            <div className="popup__links">
                {
                    fastLinks.map( item => (
                        <a className="popup__link">{ item }</a>
                    ))
                }
            </div>
        </>
    )
}

export default FindPopup;