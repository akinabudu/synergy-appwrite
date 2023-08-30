import { FC } from 'react'
import DashboardLayout from '../../components/user/layoutDashboard'

interface layoutProps {
  children:any
}

const Layout: FC<layoutProps> = ({ children}) => {
  return <DashboardLayout>{children}</DashboardLayout>
}

export default Layout