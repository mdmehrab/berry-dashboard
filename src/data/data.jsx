import { FaArrowRight } from "react-icons/fa";

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
      { id: 1, icon: FaArrowRight, label: "Default", url: "default" },
      { id: 2, icon: FaArrowRight, label: "Analytics", url: "analytics" },
    ],
  },
  {
    id: 2,
    content: "Widget",
    items: [
      { id: 1, icon: FaArrowRight, label: "Statistics", url: "st" },
      { id: 2, icon: FaArrowRight, label: "data", url: "data" },
      { id: 3, icon: FaArrowRight, label: "chart", url: "chat" },
    ],
  },
  {
    id: 3,
    content: "Application",
    items: [
      {
        id: 1,
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
      { id: 2, icon: FaArrowRight, label: "st", url: "st" },
      { id: 3, icon: FaArrowRight, label: "sdfds", url: "st" },
      { id: 4, icon: FaArrowRight, label: "fdsf", url: "st" },
    ],
  },
];
