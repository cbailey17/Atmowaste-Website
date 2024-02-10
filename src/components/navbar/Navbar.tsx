import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { GiEarthAmerica } from 'react-icons/gi';
import './navbar.css';

interface NavItemProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, onClick, children }) => (
  <p>
    <a href={href} onClick={onClick}>{children}</a>
  </p>
);

const Menu: React.FC<{ onItemClick: () => void }> = ({ onItemClick }) => (
  <>
    <NavItem href="#aboutSectionLink" onClick={onItemClick}>About Us</NavItem>
    <NavItem href="#philosophy" onClick={onItemClick}>Philosophy</NavItem>
  </>
);

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleItemClick = () => {
    setToggleMenu(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <GiEarthAmerica size={27} color="#fff" />
          <h1 id="logo">AtmoWaste</h1>
        </div>
        <div className="gpt3__navbar-links_container relative z-50">
          <Menu onItemClick={handleItemClick} />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
      <NavItem href="#contact" onClick={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'auto', inline: 'center' });
      }}>
        Invest
      </NavItem>
        <button
          className="co2"
          type="button"
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Remove CO2
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="z-50 gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu onItemClick={handleItemClick} />
              <div className="gpt3__navbar-menu_container-links-sign">
              <NavItem href="#contact" onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'auto', inline: 'center' });
              }}>
                Invest
              </NavItem>

                <button
                  className="co2"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Remove CO2
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
