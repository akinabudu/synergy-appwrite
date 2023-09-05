import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"

import { CalendarDateRangePicker } from "@/components/admin/date-range-picker"
import { MainNav } from "@/components/admin/main-nav"
import { Search } from "@/components/admin/search"
import AdminTabs from "@/components/admin/tabs"

export const metadata: Metadata = {
  title: "Admin Dashboard -Synergy",
  description: "Synergy Admin Dashboard",
}

export default function DashboardPage() {
  return (
    <div className="w-full">
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              {/* <UserNav /> */}
              <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            {/* <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2> */}
            
          </div>
          <AdminTabs/>
        </div>
      </div>
    </div>
  )
}




