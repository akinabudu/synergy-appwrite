import { MdSpaceDashboard, MdLocalLibrary, MdAccountBox, MdSavings, MdAnnouncement } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaQuestionCircle, FaAward, FaMoneyBill, FaMoneyBillWaveAlt } from "react-icons/fa";
import { Settings, Users, Users2 } from "lucide-react";

export const SideBarMenu = [
  {
    title: "My Account",
    href: "/dashboard",
    icon: <MdAccountBox />,
    segment: null,
  },
  {
    title: "Savings",
    href: "/dashboard/savings",
    icon: <MdSavings />,
    segment: "savings",
  },

  {
    title: "Loans",
    href: "/dashboard/loans",
    icon: <FaMoneyBill />,
    segment: "loans",
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

export const AdminSideBarMenu = [
  {
    title: "Overview",
    href: "/admin",
    icon: <MdSpaceDashboard />,
    segment: null,
  },
  {
    title: "Customers",
    href: "/admin/customers",
    icon: <Users2 />,
    segment: "customers",
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
    title: "Loans",
    href: "/admin/loans",
    icon: <FaMoneyBill />,
    segment: "loans",
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
    title: "Overview",
    href: "/admin",
    icon: <MdSpaceDashboard />,
    segment: null,
  },
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
