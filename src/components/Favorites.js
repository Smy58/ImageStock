import Cards from "./Cards";

function Favorites(props) {
    const { column1, column2, column3 } = props;

    return (
        <section className="favorites">
            <h2 className="favorites__title">Избранное</h2>
            <div className="favorites__settings">
                <a className="favorites__setting-link">
                    <div className="favorites__rectangle"></div>
                    <div className="favorites__rectangle"></div>
                </a>
                <a className="favorites__setting-link favorites__setting-link_target">
                    <div className="favorites__square"></div>
                    <div className="favorites__square"></div>
                    <div className="favorites__square"></div>
                    <div className="favorites__square"></div>
                </a>
            </div>
            <Cards column1={ column1 } column2={ column2 } column3={ column3 }/>
        </section>
    )
}

export default Favorites;