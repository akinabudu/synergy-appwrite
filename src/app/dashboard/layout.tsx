import { FC } from 'react'
import DashboardLayout from './dashboardComponents/layoutDashboard'

interface layoutProps {
  children:any
}

const Layout: FC<layoutProps> = ({ children}) => {
  return <DashboardLayout>{children}</DashboardLayout>
}

export default Layout