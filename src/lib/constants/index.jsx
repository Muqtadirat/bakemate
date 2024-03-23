import { Coins, ScrollText, PackageOpen, UsersIcon } from "lucide-react";

export const KPIData = [
  {
    title: "Total Sales",
    value: 20,
    icon: <Coins />,
    trend: 25,
    increase: true,
  },
  {
    title: "Total Customers",
    value: 12,
    icon: <UsersIcon />,
    trend: 25,
    increase: true,
  },
  {
    title: "Total Orders",
    value: 20,
    icon: <PackageOpen />,
    trend: 25,
    increase: true,
  },
  {
    title: "Inventory Status",
    value: 56,
    icon: <ScrollText />,
    trend: 25,
    increase: false,
  },
];
