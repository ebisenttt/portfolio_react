import React from 'react';
import './Header.scss';
import logo_for_mobile from "./logo_for_mobile.png";
import logo_for_pc from './logo_for_pc.png'
import { Link as Scroll } from 'react-scroll';
import { useDeviceType } from 'context/MediaQuery';
import { HambergerMenu } from './HambergerMenu';

export type Link = {
  to: string,
  value: string
}

function Header() {
  const linkArr: Array<Link> = [
    { to: "works", value: "Works" },
    { to: "profile", value: "Profile" },
    { to: "skills", value: "Skills" },
    { to: "contact", value: "Contact" }
  ];
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return (
      <header className="header-for-mobile">
        <HambergerMenu links={linkArr} />
        <a><img src={logo_for_mobile} alt='A logo of this web site.' /></a>
      </header>
    )

  } else {
    return (
      <header className="header-for-pc">
        <a><img src={logo_for_pc} alt='A logo of this web site.' /></a>
        <div id="header-menu">
          {linkArr.map((e, index) => (
            <Scroll
              key={index}
              to={e.to}
              smooth={true}
              duration={600}
            >
              <h3>{e.value}</h3>
            </Scroll>
          ))}
        </div>
      </header>
    )
  }
}

export default Header;