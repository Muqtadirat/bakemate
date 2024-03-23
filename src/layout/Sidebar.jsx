// import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Logo } from "../icons";
import {
  List,
  Wallet,
  UsersRound,
  Bell,
  Settings,
  LayoutDashboard,
  PackageSearch,
  LogOut,
} from "lucide-react";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const tabs = [
  {
    title: "Dashboard",
    href: "dashboard",
    Icon: <LayoutDashboard size={18} />,
  },
  {
    title: "Orders",
    href: "orders",
    Icon: <List size={18} />,
  },
  {
    title: "Transactions",
    href: "transactions",
    Icon: <Wallet size={18} />,
  },
  {
    title: "Products",
    href: "products",
    Icon: <PackageSearch size={18} />,
  },
  {
    title: "Customer",
    href: "customer",
    Icon: <UsersRound size={18} />,
  },
  {
    title: "Notifications",
    href: "notifications",
    Icon: <Bell size={18} />,
  },
  {
    title: "Settings",
    href: "settings",
    Icon: <Settings size={18} />,
  },
];

const Sidebar = () => {
  // const [isCollapsed, setIsCollapsed] = useState(false);

  // const toggleSidebar = () => {
  //   setIsCollapsed(!isCollapsed);
  // };

  return (
    <nav
      className={clsx(
        "w-56 flex flex-col h-full gap-6 pt-5 text-white bg-primary-800"
        // {
        //   "w-16": isCollapsed,
        //   "w-56": !isCollapsed,
        // }
      )}
    >
      <div className="flex justify-center px9">
        <Logo />
        {/* <HamburgerMenuIcon
          className="hover:cursor-pointer"
          width={24}
          height={24}
          onClick={toggleSidebar}
        /> */}
      </div>

      <section>
        <ul className="flex flex-col gap-3">
          {tabs.map((tab) => {
            const { title, href, Icon } = tab;

            return (
              <NavLink
                key={title}
                to={href}
                className={({ isActive }) =>
                  isActive
                    ? "bg-white mx-4 text-primary-800 border rounded-lg"
                    : "hover:bg-white hover:mx-4 hover:text-primary-800 hover:border hover:rounded-lg"
                }
              >
                <li className="flex items-center w-fit gap-2 py-2 px-12">
                  <span> {Icon}</span>

                  <span>{title}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </section>

      <div>
        <NavLink to="/" className="flex items-center gap-2 py-2 px-12 mt-28">
          <LogOut />
          <span>Log Out</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
