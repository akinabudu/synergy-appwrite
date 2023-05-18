import React from 'react'
import AdminDashboardLayout from './adminComponents/layoutAdminDashboard'
 

const LayoutAdmin = ({children}:{ children: React.ReactNode }) => {
  return (
    <AdminDashboardLayout>{children}</AdminDashboardLayout>
  )
}



export default LayoutAdmin