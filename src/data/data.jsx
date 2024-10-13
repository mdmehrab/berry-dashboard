import { FaArrowRight } from "react-icons/fa";
import { TbDashboard } from "react-icons/tb";
import { TbDeviceAnalytics } from "react-icons/tb";
import { TbChartArcs } from "react-icons/tb";
import { TbClipboardList } from "react-icons/tb";
import { TbChartInfographic } from "react-icons/tb";
import { FiUserCheck } from "react-icons/fi";
import { PiShoppingCart } from "react-icons/pi";
import { GrChatOption } from "react-icons/gr";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { MdConnectWithoutContact } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { PiPictureInPictureThin } from "react-icons/pi";
import { TbForms } from "react-icons/tb";
import { ImTable2 } from "react-icons/im";
import { LuTable2 } from "react-icons/lu";
import { TbChartDotsFilled } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { BsClipboard2Check } from "react-icons/bs";
import { TbStairsUp } from "react-icons/tb";

export const navLinks = [
  {
    id: 1,
    content: "Dashboar",
    items: [
      { id: 1, url: "default", label: "Default" },
      { id: 2, url: "analytics", label: "analytics" },
    ],
  },
  {
    id: 2,
    content: "Widget",
    items: [
      { id: 1, url: "statistic", label: "Statistics" },
      { id: 2, url: "data", label: "Data" },
      { id: 2, url: "chart", label: "Chart" },
    ],
  },
];

export const sidebarData = [
  {
    id: 1,
    content: "Dashboard",
    items: [
      { id: 1, icon: TbDashboard, label: "Default", url: "default" },
      { id: 2, icon: TbDeviceAnalytics, label: "Analytics", url: "analytics" },
    ],
  },
  {
    id: 2,
    content: "Widget",
    items: [
      { id: 1, icon: TbChartArcs, label: "Statistics", url: "statistics" },
      { id: 2, icon: TbClipboardList, label: "data", url: "data" },
      { id: 3, icon: TbChartInfographic, label: "chart", url: "chart" },
    ],
  },
  {
    id: 3,
    content: "Application",
    items: [
      {
        id: 1,
        icon: FiUserCheck,
        content: "User",
        items: [
          {
            id: 1,
            icon: FaArrowRight,
            label: "Social Profile",
            url: "social-profile",
            space: "space",
          },
          {
            id: 2,
            icon: FaArrowRight,
            label: "Account Profile",
            url: "account=profile",
            space: "space",
          },
          {
            id: 3,
            icon: FaArrowRight,
            label: "Cards",
            url: "cards",
            space: "space",
          },
          {
            id: 4,
            icon: FaArrowRight,
            label: "List",
            url: "list",
            space: "space",
          },
        ],
      },
      { id: 2, icon: PiShoppingCart, label: "Customer", url: "st" },
      { id: 3, icon: GrChatOption, label: "Chat", url: "st" },
      { id: 4, icon: LuLayoutTemplate, label: "Kanban", url: "st" },
      { id: 5, icon: MdOutlineEmail, label: "Mail", url: "st" },
      { id: 6, icon: CiCalendarDate, label: "Calendar", url: "st" },
      { id: 7, icon: MdConnectWithoutContact, label: "Contact", url: "st" },
      { id: 8, icon: LuShoppingBag, label: "E-commerce", url: "st" },
      { id: 9, icon: FaRegFileAlt, label: "Invoice", url: "st" },
      { id: 10, icon: PiShoppingCart, label: "CRM", url: "st" },
    ],
  },

  {
    id: 4,
    content: "Forms",
    items: [
      { id: 1, icon: PiPictureInPictureThin, label: "Components", url: "st" },
      { id: 2, icon: PiPictureInPictureThin, label: "Plugins", url: "st" },
      { id: 3, icon: TbForms, label: "Layouts", url: "st" },
      { id: 4, icon: ImTable2, label: "Table", url: "st" },
      { id: 5, icon: FaArrowRight, label: "Data Grid", url: "st" },
      { id: 6, icon: FaArrowRight, label: "Charts", url: "st" },
      { id: 7, icon: FaArrowRight, label: "Map", url: "st" },
      { id: 8, icon: FaArrowRight, label: "Forms Validation", url: "st" },
      { id: 9, icon: FaArrowRight, label: "Forms Wizard", url: "st" },
    ],
  },

  {
    id: 5,
    content: "Forms",
    items: [
      { id: 1, icon: FaArrowRight, label: "Basic", url: "st" },
      { id: 2, icon: FaArrowRight, label: "Advance", url: "st" },
      { id: 3, icon: FaArrowRight, label: "Sample Page", url: "st" },
    ],
  },

  {
    id: 6,
    content: "Pages",
    items: [
      { id: 1, icon: FaArrowRight, label: "Authentication", url: "st" },
      { id: 2, icon: FaArrowRight, label: "Pricing", url: "st" },
      { id: 3, icon: FaArrowRight, label: "Maintenance", url: "st" },
      { id: 4, icon: FaArrowRight, label: "Contact US", url: "st" },
      { id: 5, icon: FaArrowRight, label: "FAQs", url: "st" },
      { id: 6, icon: FaArrowRight, label: "Privacy Policy", url: "st" },
    ],
  },

  {
    id: 7,
    content: "Utilities",
    items: [
      { id: 1, icon: FaArrowRight, label: "Typography", url: "st" },
      { id: 2, icon: FaArrowRight, label: "Color", url: "st" },
      { id: 3, icon: FaArrowRight, label: "Shadow", url: "st" },
      { id: 4, icon: FaArrowRight, label: "Icons", url: "st" },
      { id: 5, icon: FaArrowRight, label: "Animation", url: "st" },
      { id: 6, icon: FaArrowRight, label: "Grid", url: "st" },
    ],
  },

  {
    id: 8,
    content: "Others",
    items: [
      { id: 1, icon: FaArrowRight, label: "Menu Levels", url: "st" },
      { id: 2, icon: FaArrowRight, label: "Sub Caption", url: "st" },
      { id: 3, icon: FaArrowRight, label: "Disabled Menu", url: "st" },
      { id: 4, icon: FaArrowRight, label: "Oval Chip", url: "st" },
      { id: 5, icon: FaArrowRight, label: "Avatar", url: "st" },
      { id: 6, icon: FaArrowRight, label: "Outlined", url: "st" },

      { id: 7, icon: FaArrowRight, label: "Documentation", url: "st" },
      { id: 8, icon: FaArrowRight, label: "Roadmap", url: "st" },
    ],
  },
];
