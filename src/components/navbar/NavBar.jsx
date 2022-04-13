import { useState } from 'react'
import { styled } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import './navbar.scss'

const StyledMenu = styled(Menu)({
  '& 	.MuiMenu-paper': {
    boxShadow: 'none',
  },
})

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className='navbar' sx={{ position: 'relative' }}>
      <div className='menu-container'>
        <Avatar
          className='avatar'
          alt='Remy Sharp'
          src='/static/images/avatar/1.jpg'
          sx={{ width: 25, height: 25 }}
        />
        <div className='menu' onClick={handleClick}>
          <span>Admin</span>
          {anchorEl ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      <StyledMenu
        sx={{ position: 'absolute', right: 1, top: 21, boxShadow: 'none' }}
        className='list'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Logout
        </MenuItem>
      </StyledMenu>
    </div>
  )
}

export default NavBar
