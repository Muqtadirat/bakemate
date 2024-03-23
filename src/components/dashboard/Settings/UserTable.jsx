import { Avatar } from "@radix-ui/themes";

const UserTable = ({ name, mail, gender, role, number, active, avatar }) => {
  const status = active ? "Active" : "Inactive";

  return (
    <div>
      <div className="grid grid-cols-6 py-6 px-4 border-b border-b-slate-300 items-center border-b-none border-[#f2f2f2] text-[#333333]">
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
        <div className={`${active ? "text-[#5ce23a]" : "text-[red]"} status`}>
          {status}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
