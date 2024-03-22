// import { MagnifyingGlassIcon, BellIcon } from "@radix-ui/react-icons";
import { Search, Bell } from "lucide-react";
import { Input } from "../components/shared";
import { Avatar } from "@radix-ui/themes";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center pb-4 border-b-2">
      <h1 className="font-semibold text-3xl">Dashboard</h1>

      <section className="flex gap-16 items-center">
        {/* Search bar */}
        <div className="relative">
          <Input type="text" placeholder="Search" className="pl-8" />
          <span className="absolute left-2 bottom-3">
            <Search size={18} />
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Bell size={20} />

          <div className="flex items-center gap-2">
            <Avatar fallback="B" color="gray" radius="full" size="2" />

            <div className="text-sm flex flex-col">
              <p className="font-semibold">Bakemate</p>
              <p>Bakemate@gmail</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Topbar;
