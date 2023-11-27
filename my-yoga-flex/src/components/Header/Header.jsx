import './Header.scss'
import { useNavigate } from 'react-router-dom';
import Quotes from '../Quotes/Quotes';
import NavBar from '../NavBar/NavBar';


function Header() {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <>
    <div onClick={navigateToHome} className="header">
    <h1 className="header__title">MY YOGA FLEX</h1>
    </div>
    <p className="header__text"><Quotes /></p>
    <NavBar />
    </>
  )
}
export default Header;