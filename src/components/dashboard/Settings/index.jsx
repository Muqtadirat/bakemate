import { Outlet } from "react-router-dom";
import { Tabs } from "@radix-ui/themes";
import AccountSettings from "./AccountSettings";
import Support from "./Support";
import UserPanel from "./UserPanel";

const Settings = () => {
  return (
    <Tabs.Root defaultValue="account">
      <Tabs.List size={2} className="flex gap-3">
        <Tabs.Trigger value="account" className="hover:cursor-pointer">
          Account Settings
        </Tabs.Trigger>
        <Tabs.Trigger value="user" className="hover:cursor-pointer">
          User Management
        </Tabs.Trigger>
        <Tabs.Trigger value="support" className="hover:cursor-pointer">
          Support
        </Tabs.Trigger>
      </Tabs.List>

      <div className="pt-4">
        <Tabs.Content value="account">
          <AccountSettings />
        </Tabs.Content>
        <Tabs.Content value="user">
          <UserPanel />
          <Outlet />
        </Tabs.Content>
        <Tabs.Content value="support">
          <Support />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Settings;
