import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from '.';
import { Link as Scroll } from 'react-scroll';
import './HambergerMenu.scss';
import { SNS } from "src/component/sns/SNS";

type SNSProps = React.ComponentProps<typeof SNS>;

type Props = {
  links: Link[],
  sns: SNSProps[],
}

export const HambergerMenu = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  const useStyles = makeStyles((theme: Theme) => createStyles({
    menuPaper: {
      color: '#333333',
      backgroundColor: '#fff7f7'
    }
  }));


  return (
    <>
      <Button
        aria-controls='menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MenuIcon className='hamberger-menu-icon' />
      </Button>
      <Menu
        id='menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: useStyles().menuPaper }}
      >
        {
          props.links.map((e, index) => (
            <MenuItem key={index} className="menu-item">
              <Scroll
                to={e.to}
                smooth={true}
                duration={600}
                onClick={handleClose}
              >
                <p>{e.value}</p>
              </Scroll>
            </MenuItem>
          ))
        }
        {
          props.sns.map((e, index) => (
            <MenuItem key={index} className="menu-item">
              <a href={e.link}>
                {e.icon}
              </a>
            </MenuItem>
          ))
        }
      </Menu>
    </>
  )
}