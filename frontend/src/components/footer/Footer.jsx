import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <h3>David Duranty</h3>
      <div className="icon-footer">
        <Link to="https://github.com/davidduranty">
          <img src="github.png" alt="" />
        </Link>
        <li>
          <a href="mailto:chrisdavd@gmail.com">Email</a>
        </li>
        <Link to="https://www.linkedin.com/in/david-duranty/">
          <img src="linkedin.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
