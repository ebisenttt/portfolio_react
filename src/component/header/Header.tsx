import React from 'react';
import './Header.scss';
import logo_for_mobile from "./logo_for_mobile.png";
import logo_for_pc from './logo_for_pc.png'
import { Link as Scroll } from 'react-scroll';
import { useDeviceType } from 'context/MediaQuery';
import { HambergerMenu } from './HambergerMenu';
import { LinkedCamera } from '@material-ui/icons';

type Link = {
  to: string,
  value: string
}

const linkArr: Array<Link> = [
  { to: "works", value: "Works" },
  { to: "profile", value: "Profile" },
  { to: "skills", value: "Skills" },
  { to: "contact", value: "Contact" }
];

function Header() {

  const { isMobile } = useDeviceType();

  if (isMobile) {
    return (
      <header className="header-for-mobile">
        <HambergerMenu>
          {linkArr.map(e => (
            <Scroll
              to={e.to}
              smooth={true}
              duration={600}
            >
              <p>{e.value}</p>
            </Scroll>
          ))}
        </HambergerMenu>
        <a><img src={logo_for_mobile} /></a>
      </header>
    )

  } else {
    return (
      <header className="header-for-pc">
        <a><img src={logo_for_pc} /></a>
        <div id="header-menu">
          {linkArr.map(e => (
            <Scroll
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