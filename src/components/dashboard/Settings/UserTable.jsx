import { Avatar, Popover } from "@radix-ui/themes";
import { GripVertical } from "lucide-react";

const UserTable = ({ name, mail, gender, role, number, active, avatar }) => {
  const status = active ? "Active" : "Inactive";

  return (
    <div>
      <div className="grid grid-cols-7 py-6 px-2 border-b border-b-slate-300 items-center border-b-none border-[#f2f2f2] text-[#333333]">
        <div className="name">
          <Avatar
            radius="full"
            src={avatar}
            fallback={name ? name.slice(0, 1).toUpperCase() : ""}
            color="gold"
          />
          <span className="ml-3">{name}</span>
        </div>
        <div className="mail">{mail}</div>
        <div className="number">{number}</div>
        <div className="gender">{gender}</div>
        <div className="role">{role}</div>
        <div
          className={`${
            active ? "text-[#5ce23a]" : "text-[red]"
          } status flex gap-3`}
        >
          {status}
        </div>
        <Popover.Root>
          <Popover.Trigger>
            <GripVertical className="hover:cursor-pointer" />
          </Popover.Trigger>

          <Popover.Content>Edit</Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};

export default UserTable;
