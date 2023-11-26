import './Footer.scss'
import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';



function Footer() {
  return (
    <div className="footer">
    <div >
      <a href="https://www.facebook.com/">

      <img className="footer__images" src={facebook} alt="facebook logo" />
      </a>
      <a href="https://www.instagram.com/">

      <img className="footer__images" src={insta} alt="facebook logo" />
      </a>
      <a href="https://twitter.com/?lang=en">

      <img className="footer__images" src={twitter} alt="facebook logo" />
      </a>
      <a href="https://www.youtube.com/">

      <img className="footer__images" src={youtube} alt="facebook logo" />
      </a>
    </div>
    <div>
      <p className="footer__feedback">LEAVE YOUR FEEDBACK HERE</p>
    </div>

    </div>
  )
}
export default Footer;