import './Footer.scss'
import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';



function Footer() {
  return (
    <div className="footer">
    <div >
    <img className="footer__images" src={facebook} alt="facebook logo" />
    <img className="footer__images" src={insta} alt="facebook logo" />
    <img className="footer__images" src={twitter} alt="facebook logo" />
    <img className="footer__images" src={youtube} alt="facebook logo" />

    </div>
    <h1 className="footer__title">FOOTER</h1>
    <div>
      <p>LEAVE YOUR FEEDBACK HERE</p>
    </div>

    </div>
  )
}
export default Footer;