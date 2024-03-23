import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Search, BellDot } from "lucide-react";
import { Input } from "../components/shared";
import { Avatar } from "@radix-ui/themes";

const Topbar = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const getTitleFromPathname = (pathname) => {
      const titleMap = {
        "/dashboard": "Dashboard",
        "/orders": "Orders",
        "/transactions": "Transactions",
        "/products": "Products",
        "/customer": "Customer",
        "/notifications": "Notifications",
        "/settings": "Settings",
      };
      return titleMap[pathname] || "";
    };

    setPageTitle(getTitleFromPathname(location.pathname));
  }, [location.pathname]);

  return (
    <div className="flex justify-between items-center mx-10">
      <section className="flex gap-16 items-center">
        <h1 className="font-semibold text-3xl">{pageTitle}</h1>

        {/* Search bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Search"
            variant="search"
            className="pl-8"
          />
          <span className="absolute left-3 bottom-3">
            <Search size={18} />
          </span>
        </div>
      </section>

      <section className="flex gap-4 items-center">
        {/* <div className="flex items-center gap-4"> */}
        <BellDot size={20} />

        <div className="flex items-center gap-2 border-l-2 pl-4">
          <Avatar fallback="B" color="gray" radius="full" size="2" />

          <div className="text-sm flex flex-col">
            <p className="font-semibold">Bakemate</p>
            <p>Bakemate@gmail</p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Topbar;
