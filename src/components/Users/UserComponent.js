import React from 'react'
import { Outlet } from 'react-router-dom'

function UserComponent() {
  return (
    <>
    <div className='layout-body'>
    <div>Users Data</div>
    <Outlet/>
    </div>
    </>
  )
}

export default UserComponent