import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPanel from "./UserPanel";
import { Button } from "src/components/shared";
import { UserPlus2, Plus } from "lucide-react";
import fetchSubUsers from "src/lib/api/fetchSubUsers";

const UserManagement = () => {
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

  const addSubUser = (e) => {
    e.preventDefault();

    navigate("/settings/createUser");
  };

  return (
    <div>
      {!subUsers || subUsers.length === 0 ? (
        <section className="px-10 py-28 border border-grey-200 bg-white mt-12 flex flex-col items-center gap-5">
          <UserPlus2 color="#D0CCCA" size="64" />
          <p>You have not created any sub sellers yet</p>

          <Button
            variant="primary"
            className="flex"
            onClickHandler={addSubUser}
          >
            <Plus strokeWidth={3} />
            <span className="ml-2">Create new user</span>
          </Button>
        </section>
      ) : (
        <section>
          <UserPanel />
        </section>
      )}
    </div>
  );
};

export default UserManagement;
