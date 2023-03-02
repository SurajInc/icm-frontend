import React from 'react'
import { SidebarList } from '../../data/sibebar'
import './sidebar.css'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <>
      <div className='sidebar-container'>
        {
          SidebarList.map((item,index)=>(
            <NavLink to={item.path} key={index} className='tab-container'>
              <div>
                <img src={item.icon} alt="icon" className='icon' />
                <div className='title'>{item.title}</div>
              </div>
            </NavLink>
          ))
        }
      </div>
    </>
  )
}

export default SideBar