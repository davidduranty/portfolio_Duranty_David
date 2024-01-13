import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className="footer">
        <h3>David Duranty</h3>
        <p className="email">chrisdavd@gmail.com</p>
        <div className="icon-footer">
          <Link to="https://github.com/davidduranty" target="_blank">
            <img src="github.png" alt="" />
          </Link>

          <a href="mailto:chrisdavd@gmail.com" target="_blank" rel="noreferrer">
            <img src="Letter.png" alt="image email" />
          </a>

          <Link to="https://www.linkedin.com/in/david-duranty/" target="_blank">
            <img src="linkedin.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
