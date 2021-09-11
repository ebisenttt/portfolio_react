import React from 'react';
import './Header.scss';
import logo_medium from "./logo_medium.png";
import { Link as Scroll } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

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

// const links = linkArr.map((e: Link) => <a className="header-link" href={e.src}><h3>{e.value}</h3></a>);

function Header() {
  const isDesktop = useMediaQuery({ query: '(min-width: )' })
  return (
    <header>
      <a id="header-logo"><img src={logo_medium} /></a>
      <div id="header-menu">
        {linkArr.map(e => (
          <Scroll className="header-link" to={e.to} smooth={true} duration={600}>
            <h3>{e.value}</h3>
          </Scroll>
        ))}
      </div>
    </header>
  )
}

export default Header;