import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (!lastActiveLink.current || !activeBox.current) return;

    const link = lastActiveLink.current;
    activeBox.current.style.top = link.offsetTop + 'px';
    activeBox.current.style.height = link.offsetHeight + 'px';
    activeBox.current.style.width = link.offsetWidth + 'px';
    activeBox.current.style.left = link.offsetLeft + 'px';
  };

  useEffect(initActiveBox, []);
  window.addEventListener('resize', initActiveBox);

  const activeCurrentLink = (event) => {
    if (!event.target.classList.contains("nav-link")) return;

    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + 'px';
    activeBox.current.style.height = event.target.offsetHeight + 'px';
    activeBox.current.style.width = event.target.offsetWidth + 'px';
    activeBox.current.style.left = event.target.offsetLeft + 'px';
  };

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link'
    },
    {
      label: 'Reviews',
      link: '#reviews',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden'
    }
  ];

  return (
    <nav className={`navbar absolute top-full right-0 transition-all ${
      navOpen ? "active" : ""
    }`}>
      {
        navItems.map(({ label, link, className }, key) => (
          <a
            href={link}
            key={key}
            className={className}
            ref={label === 'Home' ? lastActiveLink : null}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        ))
      }
      <div
        className="active-box"
        ref={activeBox}
      ></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};

export default Navbar;
