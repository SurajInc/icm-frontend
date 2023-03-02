import React from 'react'
import { Route,Routes } from 'react-router'
import NewRequest from '../../pages/NewRequest/NewRequest'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Inbox from '../../pages/Inbox/Inbox'
const RouteList = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/newRequest' element={<NewRequest/>}/>
      </Routes>
    </div>
  )
}

export default RouteList