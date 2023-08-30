import React from 'react'
import AdminDashboardLayout from '../../components/admin/layoutAdminDashboard'
 

const LayoutAdmin = ({children}:{ children: React.ReactNode }) => {
  return (
    <AdminDashboardLayout>{children}</AdminDashboardLayout>
  )
}



export default LayoutAdmin