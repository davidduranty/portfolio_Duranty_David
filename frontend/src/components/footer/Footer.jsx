import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <h3>David Duranty</h3>
      <div className="icon-footer">
        <Link to="https://github.com/davidduranty" target="_blank">
          <img src="github.png" alt="" />
        </Link>

        <a href="mailto:chrisdavd@gmail.com" target="_blank" rel="noreferrer">
          <img src="email.png" alt="image email" />
        </a>

        <Link to="https://www.linkedin.com/in/david-duranty/" target="_blank">
          <img src="linkedin.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
