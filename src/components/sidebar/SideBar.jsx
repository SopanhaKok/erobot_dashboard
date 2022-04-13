import './sidebar.scss'
import Avatar from '@mui/material/Avatar'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'

const SideBar = () => {
  return (
    <div className='sidebar-container'>
      <div className='logo'>
        <div className='logo-avatar'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png' />
        </div>

        <span className='logo-title'>EROBOT</span>
      </div>
      <div className='menu'>
        <p className='title'>Main Menu</p>
        <ul>
          <li className='active'>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <li>
            <ChatBubbleOutlineIcon className='icon' />
            <span>Posts</span>
          </li>
        </ul>
      </div>
      <div className='footer'>
        <span>Made by Sopanha </span>
      </div>
    </div>
  )
}

export default SideBar
