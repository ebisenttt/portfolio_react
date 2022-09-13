import React from 'react';
import './style.scss';
import logo_for_mobile from "./logo_for_mobile.png";
import logo_for_pc from './logo_for_pc.png'
import { Link as Scroll } from 'react-scroll';
import { useDeviceType } from 'context/MediaQuery';
import { HambergerMenu } from './HambergerMenu';
import { SNS } from '../sns/SNS';
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

export type Link = {
  to: string,
  value: string
}

type SNSProps = React.ComponentProps<typeof SNS>;

function Header() {
  const linkArr: Array<Link> = [
    { to: "works", value: "Works" },
    { to: "profile", value: "Profile" },
    { to: "skills", value: "Skills" },
    { to: "contact", value: "Contact" }
  ];
  const snsArr: Array<SNSProps> = [
    {
      icon: <GitHubIcon />,
      link: "https://github.com/ebisenttt",
      name: "Github",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/ebisenttt",
      name:"Twitter",
    }
  ];

  const { isMobile } = useDeviceType();


  if (isMobile) {
    return (
      <header className="header-for-mobile">
        <HambergerMenu links={linkArr} sns={snsArr}/>
        <a href=".">
          <img src={logo_for_mobile} alt='A logo of this web site.' />
        </a>
      </header>
    )

  }
  return (
    <header className="header-for-pc">
      <a href=".">
        <img src={logo_for_pc} alt='A logo of this web site.' />
      </a>
      <div id="header-menu">
        <ul>
          {linkArr.map((e, index) => (
            <li key={`link-${index}`}>
              <Scroll
                key={index}
                to={e.to}
                smooth={true}
                duration={600}
              >
                <h3>{e.value}</h3>
              </Scroll>
            </li>
          ))}
          {
            snsArr.map((e,index) => (
              <li key={`sns-${index}`}>
                <SNS
                  icon={e.icon}
                  link={e.link}
                  name={e.name}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  )
}

export default Header;