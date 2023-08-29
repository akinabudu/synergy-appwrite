import {
    MdSpaceDashboard,
    MdLiveTv,
    MdOutlineNotificationsNone,
    MdLocalLibrary
  } from "react-icons/md";
  import { TbBuildingCommunity } from "react-icons/tb";
  import {ImBooks} from 'react-icons/im'
  import {FaQuestionCircle,FaAward} from "react-icons/fa"
  // import {LuSchool2} from "react-icons/lu"

  // import {FaQuestionCircle,FaAward} from "react-icons/fa"


export const SideBarMenu = [
    // {
    //   title: "EDUCATION",
    //   href: "#",
    //   icon: "",
    //   segment: "",
    // },
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
    // {
    //   title: "SUPPORT",
    //   href: "#",
    //   icon: "",
    //   segment: "",
    // },
    {
      title: "Loans",
      href: "/dashboard/loans",
      icon: <MdLocalLibrary />,
      segment: "loans",
    },
    // {
    //   title: "Invest",
    //   href: "https://discord.gg/8gx5au6F",
    //   icon: <TbBuildingCommunity />,
    //   segment: "community",
    // },
    // {
    //   title: "Live Mentorship",
    //   href: "/dashboard/mentorship",
    //   icon: <MdLiveTv />,
    //   segment: "mentorship",
    // },
    {
      title: "Investments",
      href: "/dashboard/investments",
      icon: <FaQuestionCircle />,
      segment: "investments",
    },
    // {
    //   title: "AWARDS",
    //   href: "#",
    //   icon: "",
    //   segment: "",
    // },
  
    {
      title: "Profile",
      href: "/profile",
      icon: <FaAward />,
      segment: "profile",
    },
    // {
    //   title: "My Badges",
    //   href: "/dashboard/badges",
    //   icon: <MdSpaceDashboard />,
    //   segment: "achievements",
    // },
    // {
    //   title: "OTHERS",
    //   href: "#",
    //   icon: "",
    //   segment: "",
    // },
    // {
    //   title: "Notifications",
    //   href: "/dashboard/notifications",
    //   icon: <MdOutlineNotificationsNone />,
    //   segment: "notifications",
    // },
  ];