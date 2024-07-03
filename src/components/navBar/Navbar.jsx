import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navRef = useRef(null);
  const [stiky, setStiky] = useState(null);
  const [show, setShow] = useState(false);

  const linksArray = [
    "home",
    "program",
    "about us",
    "campus",
    "testimonials",
    "contact us",
  ];
  const handleResize = () => {
    if (window.innerWidth > 991) {
      navRef.current.className = "nav";
      setShow(false);
    }
  };
  const handleScroll = () =>
    window.scrollY < 50 ? setStiky(false) : setStiky(true);
  useEffect(() => {
    setStiky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className={`navbar container ${stiky && "dark-nav"}`}>
      <img className="logo" src={logo} alt="" />
      <img
        className="menu"
        onClick={() => setShow((prev) => !prev)}
        src={menu}
        alt=""
      />
      <ul ref={navRef} className={`nav ${show && "show"}`}>
        {linksArray.map((link, i) => {
          return (
            <li key={i} className="item">
              <Link
                onClick={() => setShow(false)}
                className={`link ${i === linksArray.length - 1 && "btn"}`}
                to={`${
                  link.includes(" ")
                    ? link.slice(0, link.indexOf(" ") + 1)
                    : link
                }`}
                smooth
                offset={i !== 0 ? -100 : 0}
                duration={100}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
