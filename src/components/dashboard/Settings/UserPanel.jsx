import { Plus } from "lucide-react";
import { Button } from "src/components/shared";
import UserTable from "./UserTable";
import { subUsers } from "src/lib/constants";

const UserPanel = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="font-medium">All Users</p>
        <Button className="flex bg-[#59150E] text-white gap-1 px-3">
          <span>
            <Plus />
          </span>
          Create new user
        </Button>
      </div>

      {/* Table */}
      <div className="mt-16 px-5 pb-5">
        <div className="border-b grid grid-cols-6 py-4 px-3">
          <p>Full Name</p>
          <p>Email</p>
          <p>Phone Number</p>
          <p>Gender</p>
          <p>Role</p>
          <p>Status</p>
        </div>

        {subUsers.map((users) => {
          return (
            <UserTable
              key={users.name}
              name={users.name}
              mail={users.email}
              number={users.number}
              role={users.role}
              gender={users.gender}
              active={users.active}
              avatar={users.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default UserPanel;
