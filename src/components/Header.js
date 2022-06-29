import logo from '../images/logo-header.svg'
import findImage from '../images/findImg.svg'
import likeImage from '../images/likeImg.svg'
import historyImage from '../images/historyImg.svg'

function Header(props){
    return (
        <div className='header'>
            <a className='header__logo'>
                <img src={ logo } alt='logo' className='header__logo-img'></img>
                <div className='header__logo-text'>ImageStock</div>
            </a>
            <div className='header__nav'>
                <a className='header__link' onClick={props.onFind}>
                    <img src={ findImage } className='header__link-img' alt='findImg'></img>
                    <div className='header__link-text'>Поиск</div>
                </a>
                <a className='header__link' onClick={props.onFav}>
                    <img src={ likeImage } className='header__link-img' alt='likesImg'></img>
                    <div className='header__link-text'>Избранное</div>
                </a>
                <a className='header__link' onClick={props.onHistory}>
                    <img src={ historyImage } className='header__link-img' alt='historyImg'></img>
                    <div className='header__link-text'>История поиска</div>
                </a>
            </div>
        </div>
    )
}

export default Header;