import './NavBar.scss'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar">
    
    <button className="navbar__buttons">Log In</button>
    <button className="navbar__buttons">Sign Up</button>
    <Link className="navbar__links"to='/feedback'>
            <h2 className="navbar__buttons navbar__buttons-contact">Contact Us</h2>
          </Link>
    </div>
  )
}
export default NavBar