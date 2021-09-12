import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, Menu, MenuItem } from '@material-ui/core';

export const HambergerMenu: React.FC = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

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
      >
        {children}
      </Menu>
    </>
  )
}