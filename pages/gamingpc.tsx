"use client";
import React from "react";
import { MegaMenu } from "primereact/megamenu";
import { MenuItem } from "primereact/menuitem";
import "primeflex/primeflex.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "@/components/homepage/components/sidebar/sideBar.css";
import { PiDesktopTowerBold } from "react-icons/pi";

export default function VerticalDemo() {
  const items: MenuItem[] = [
    {
      label: "Computer & Storage",
      icon: "pi pi-fw pi-desktop",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Computer System",
      icon: "pi pi-fw pi-microsoft",
      items: [
        [
          {
            label: "User 1",
            items: [{ label: "User 1.1" }, { label: "User 1.2" }],
          },
          {
            label: "User 2",
            items: [{ label: "User 2.1" }, { label: "User 2.2" }],
          },
        ],
        [
          {
            label: "User 3",
            items: [{ label: "User 3.1" }, { label: "User 3.2" }],
          },
          {
            label: "User 4",
            items: [{ label: "User 4.1" }, { label: "User 4.2" }],
          },
        ],
        [
          {
            label: "User 5",
            items: [{ label: "User 5.1" }, { label: "User 5.2" }],
          },
          {
            label: "User 6",
            items: [{ label: "User 6.1" }, { label: "User 6.2" }],
          },
        ],
      ],
    },
    {
      label: "Computer Peripherals",
      icon: "pi pi-fw pi-hourglass ",
      items: [
        [
          {
            label: "Event 1",
            items: [{ label: "Event 1.1" }, { label: "Event 1.2" }],
          },
          {
            label: "Event 2",
            items: [{ label: "Event 2.1" }, { label: "Event 2.2" }],
          },
        ],
        [
          {
            label: "Event 3",
            items: [{ label: "Event 3.1" }, { label: "Event 3.2" }],
          },
          {
            label: "Event 4",
            items: [{ label: "Event 4.1" }, { label: "Event 4.2" }],
          },
        ],
      ],
    },
    {
      label: "TV & Home Theather",
      icon: "pi pi-fw pi-stop",
      items: [
        [
          {
            label: "Setting 1",
            items: [{ label: "Setting 1.1" }, { label: "Setting 1.2" }],
          },
          {
            label: "Setting 2",
            items: [{ label: "Setting 2.1" }, { label: "Setting 2.2" }],
          },
          {
            label: "Setting 3",
            items: [{ label: "Setting 3.1" }, { label: "Setting 3.2" }],
          },
        ],
        [
          {
            label: "Technology 4",
            items: [{ label: "Setting 4.1" }, { label: "Setting 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Electronics",
      icon: "pi pi-fw pi-database",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Gaming & VR",
      icon: "pi pi-fw pi-prime",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Wifi & Networking",
      icon: "pi pi-fw pi-server",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Smart Home & Security",
      icon: "pi pi-fw pi-building",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Office Solutions",
      icon: "pi pi-fw pi-print",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Software & Services",
      icon: "pi pi-fw pi-box",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Automative & Tools",
      icon: "pi pi-fw pi-car",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Home & Outdoors",
      icon: "pi pi-fw pi-home",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Health & Sport",
      icon: "pi pi-fw pi-globe",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Toys, Drones & Maker",
      icon: "pi pi-fw pi-qrcode",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
    {
      label: "Iphone Products ",
      icon: "pi pi-fw pi-apple",
      items: [
        [
          {
            label: "Video 1",
            items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
          },
          {
            label: "Video 2",
            items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
          },
        ],
        [
          {
            label: "Video 3",
            items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
          },
          {
            label: "Video 4",
            items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
          },
        ],
      ],
    },
  ];

  return (
    <div className="card">
      <MegaMenu
        model={items}
        orientation="vertical"
        breakpoint="767px"
        className="menu"
      />
    </div>
  );
}
