
function Card(props){
    
    const { data } = props;
    return (
        <div className="card">
            <img src={ data.urls.full } className='card__image'></img>
        </div>
    );
}

export default Card;