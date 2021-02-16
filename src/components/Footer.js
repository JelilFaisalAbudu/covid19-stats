import '../css/Footer.css';
import Covid19Api from '../images/covid19api.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-left">
      <p className="developed-by">
        Developed by
        <span className="name"> Jelil Abudu</span>
      </p>
      <a className="footer-icons" aria-label="github link" href="https://github.com/JelilFaisalAbudu" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
      <a className="footer-icons" aria-label="linkedIn link" href="https://www.linkedin.com/in/jelilfaisalabudu/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
      <a className="footer-icons" aria-label="twitter link" href="https://twitter.com/jelilabudu" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
    </div>
    <div className="footer-right">
      <p className="image-wrapper">
        Powered by
        {' '}
        <a className="" aria-label="api provider" href="https://api.covid19api.com/" target="_blank" rel="noreferrer">
          <img
            src={Covid19Api}
            alt="Covid 19 Api Logo"
            className="footer-logo"
          />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
