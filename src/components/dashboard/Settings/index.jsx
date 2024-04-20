import { Outlet } from "react-router-dom";
import { Tabs } from "@radix-ui/themes";
import AccountSettings from "./account-settings/index.jsx";
import Support from "./support/index";
import UserManagement from "./user-management/index";
import Notifcation from "./notification-management/index";

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
        <Tabs.Trigger value="notification" className="hover:cursor-pointer">
          Notifcation Management
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
          <UserManagement />
          <Outlet />
        </Tabs.Content>
        <Tabs.Content value="notification">
          <Notifcation />
        </Tabs.Content>
        <Tabs.Content value="support">
          <Support />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Settings;
