import { MdSpaceDashboard, MdLocalLibrary } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaQuestionCircle, FaAward } from "react-icons/fa";

export const SideBarMenu = [
  {
    title: "My Account",
    href: "/dashboard",
    icon: <MdSpaceDashboard />,
    segment: null,
  },
  {
    title: "Savings",
    href: "/dashboard/savings",
    icon: <ImBooks />,
    segment: "savings",
  },

  {
    title: "Loans",
    href: "/dashboard/loans",
    icon: <MdLocalLibrary />,
    segment: "loans",
  },

  {
    title: "Investments",
    href: "/dashboard/investments",
    icon: <FaQuestionCircle />,
    segment: "investments",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <FaAward />,
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
    title: "Users",
    href: "/admin/users",
    icon: <ImBooks />,
    segment: "users",
  },
  {
    title: "Accounts",
    href: "/admin/accounts",
    icon: <ImBooks />,
    segment: "accounts",
  },
  {
    title: "Savings",
    href: "/admin/savings",
    icon: <ImBooks />,
    segment: "savings",
  },

  {
    title: "Loans",
    href: "/admin/loans",
    icon: <MdLocalLibrary />,
    segment: "loans",
  },

  {
    title: "Investments",
    href: "/admin/investments",
    icon: <FaQuestionCircle />,
    segment: "investments",
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: <FaQuestionCircle />,
    segment: "announcements",
  },

  {
    title: "Settings",
    href: "/settings",
    icon: <FaAward />,
    segment: "settings",
  },
];

