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
      { id: 1, icon: FaArrowRight, label: "st", url: "st" },
      { id: 2, icon: FaArrowRight, label: "data", url: "data" },
      { id: 3, icon: FaArrowRight, label: "chat", url: "chat" },
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
          { id: 1, icon: FaArrowRight, label: "User 1", url: "default" },
          { id: 2, icon: FaArrowRight, label: "User 2", url: "analytics" },
        ],
      },
      { id: 2, icon: FaArrowRight, label: "st", url: "st" },
      { id: 3, icon: FaArrowRight, label: "sdfds", url: "st" },
      { id: 4, icon: FaArrowRight, label: "fdsf", url: "st" },
    ],
  },
  // Repeat similar structure for other "Application" objects
];
