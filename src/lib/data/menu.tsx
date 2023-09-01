import {
  MdSpaceDashboard,
  MdLocalLibrary,
  MdAccountBox,
  MdSavings,
  MdAnnouncement,
} from "react-icons/md";
import { FaMoneyBill, FaMoneyBillWaveAlt } from "react-icons/fa";
import { HelpCircle, Settings, Users, Users2 } from "lucide-react";

export const UserTopBarMenu = [
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: <MdSavings />,
    segment: "transactions",
  },

  {
    title: "Referrals",
    href: "/dashboard/referrals",
    icon: <Users2 />,
    segment: "referrals",
  },

  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: <FaMoneyBillWaveAlt />,
    segment: "investments",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <Settings />,
    segment: "settings",
  },
];

export const SideBarMenu = [
  {
    title: "My Account",
    href: "/dashboard",
    icon: <MdAccountBox />,
    segment: null,
  },
  {
    title: "Transactions",
    href: "/dashboard/transactions",
    icon: <MdSavings />,
    segment: "transactions",
  },

  {
    title: "Referrals",
    href: "/dashboard/referrals",
    icon: <Users2 />,
    segment: "referrals",
  },

  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: <FaMoneyBillWaveAlt />,
    segment: "investments",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <Settings />,
    segment: "settings",
  },
  {
    title: "Help",
    href: "/help",
    icon: <HelpCircle />,
    segment: "help",
  },
];

export const AdminSideBarMenu = [
  {
    title: "Overview",
    href: "/admin",
    icon: <MdSpaceDashboard />,
    segment: null,
  },
  {
    title: "Transactions",
    href: "/admin/transactions",
    icon: <Users2 />,
    segment: "transactions",
  },
  {
    title: "Accounts",
    href: "/admin/accounts",
    icon: <MdAccountBox />,
    segment: "accounts",
  },
  {
    title: "Savings",
    href: "/admin/savings",
    icon: <MdSavings />,
    segment: "savings",
  },
  {
    title: "Investments",
    href: "/admin/investments",
    icon: <FaMoneyBillWaveAlt />,
    segment: "investments",
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: <MdAnnouncement />,
    segment: "announcements",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <Settings />,
    segment: "settings",
  },
];

export const AdminTopBarMenu = [
  
  {
    title: "Customers",
    href: "/admin/customers",
    icon: <Users />,
    segment: "customers",
  },
  {
    title: "Accounts",
    href: "/admin/accounts",
    icon: <MdAccountBox />,
    segment: "accounts",
  },

  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: <MdAnnouncement />,
    segment: "announcements",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <Settings />,
    segment: "settings",
  },
];
