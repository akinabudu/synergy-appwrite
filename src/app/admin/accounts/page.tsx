import React from 'react'
import {AccountsPage} from './accounts-page'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accounts -Synergy",
  description: "Synergy Admin Dashboard",
}

export default function AcoountMainPage() {
  return (
<AccountsPage/>  )
}
