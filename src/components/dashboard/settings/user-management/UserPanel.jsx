import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "src/components/shared";
import UserTable from "./UserTable";
import fetchSubUsers from "src/lib/api/fetchSubUsers";

const UserPanel = () => {
  const [subUsers, setSubUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSubUserData() {
      try {
        const data = await fetchSubUsers();
        setSubUsers(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchSubUserData();
  }, []);

  const createUser = (e) => {
    e.preventDefault();

    navigate("/settings/createUser");
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center">
        <p className="font-medium">All Users</p>
        <Button
          className="flex bg-[#59150E] text-white gap-1 px-3"
          onClickHandler={createUser}
        >
          <span>
            <Plus />
          </span>
          Create new user
        </Button>
      </div>

      {/* Table */}
      <div className="mt-8 px-5 pb-5 pt-8 bg-white">
        <div className="border-b grid grid-cols-10 gap-4 py-4 px-3 text-grey-400 font-medium">
          <p className="col-span-2">Full Name</p>
          <p className="col-span-2">Email</p>
          <p className="col-span-2">Phone Number</p>
          <p>Gender</p>
          <p>Role</p>
          <p>Status</p>
        </div>

        {subUsers.map((users) => {
          return (
            <UserTable
              key={users.name}
              name={`${users.fname} ${users.lname}`}
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
