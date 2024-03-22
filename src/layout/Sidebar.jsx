// import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Cake, Grid, Candle, User, Warning, Logo } from "../icons";
// import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const tabs = [
  {
    title: "Dashboard",
    href: "/",
    Icon: <Grid />,
  },
  {
    title: "Orders",
    href: "/orders",
    Icon: <Cake />,
  },
  {
    title: "Products",
    href: "/products",
    Icon: <Candle />,
  },
  {
    title: "Customer",
    href: "/customer",
    Icon: <User />,
  },
  {
    title: "Report",
    href: "/report",
    Icon: <Warning />,
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
        "w-56 flex flex-col gap-6 pt-5 text-white bg-primary-300 h-full"
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
                className="hover:bg-primary-200 hover:border hover:rounded-xl"
              >
                <li className="flex items-center gap-2 py-2 px-12">
                  {Icon}
                  <span>{title}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </section>
    </nav>
  );
};

export default Sidebar;
