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

export const subUsers = [
  {
    name: "Bakemate",
    email: "Bakemate@gmail.com",
    number: 19999999,
    gender: "Male",
    role: "Admin",
    active: true,
    avatar:
      "https://i.pinimg.com/236x/1e/ff/53/1eff530e292d13cb4088062614b9eed8.jpg",
  },
  {
    name: "Sugar",
    email: "Sugar@gmail.com",
    number: 86637777,
    gender: "Other",
    role: "Admin",
    active: false,
    avatar:
      "https://i.pinimg.com/736x/d4/dc/c0/d4dcc00e29b7b396ffe319600385e185.jpg",
  },
  {
    name: "Cake Boss",
    email: "sweet@gmail.com",
    number: 343333330,
    gender: "Female",
    role: "Admin",
    active: true,
    avatar:
      "https://i.pinimg.com/236x/06/f5/4e/06f54e0f48897f2c4e12a06f7af7eba5.jpg",
  },
];
