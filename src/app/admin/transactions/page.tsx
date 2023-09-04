import React from 'react'
import {TransactionsPage} from './transactions-page'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "User Transactions -Synergy",
  description: "Synergy User Dashboard",
}

export default function TransactionsMainPage() {
  return (
<TransactionsPage/>  )
}
