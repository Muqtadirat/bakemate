import { Avatar, Popover } from "@radix-ui/themes";
import { EllipsisVertical } from "lucide-react";

const UserTable = ({ name, mail, gender, role, number, active, avatar }) => {
  const status = active ? "Active" : "Inactive";

  return (
    <div>
      <div className="grid grid-cols-10 gap-4 py-6 px-2 border-b border-b-slate-300 items-center border-b-none border-[#f2f2f2] text-[#333333]">
        <div className="name col-span-2">
          <Avatar
            radius="full"
            src={avatar}
            fallback={name ? name.slice(0, 1).toUpperCase() : ""}
            color="gold"
          />
          <span className="ml-3">{name}</span>
        </div>
        <div className="mail col-span-2">{mail}</div>
        <div className="number col-span-2">{number}</div>
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
            <EllipsisVertical className="hover:cursor-pointer" />
          </Popover.Trigger>

          <Popover.Content>Edit</Popover.Content>
        </Popover.Root>
      </div>
    </div>
  );
};

export default UserTable;
