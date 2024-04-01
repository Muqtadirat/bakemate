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

export const products = [
  {
    name: "Croissant",
    category: "Pastries",
    price: 1500,
    stock: 22,
    created: "01/02/24",
    lastUpdated: "06/02/24",
    image:
      "https://i.pinimg.com/236x/7b/af/d5/7bafd502fb71bade87d97ba2619a5205.jpg",
    id: 1,
  },
  {
    name: "Doughnut",
    category: "Pastries",
    price: 1000,
    stock: 12,
    created: "01/02/24",
    lastUpdated: "06/02/24",
    image:
      "https://i.pinimg.com/236x/2f/63/a7/2f63a79cf2976c1d54593b4340783f9c.jpg",
    id: 2,
  },
  {
    name: "Cupcake",
    category: "Pastries",
    price: 2500,
    stock: 8,
    created: "11/03/24",
    lastUpdated: "11/03/24",
    image:
      "https://i.pinimg.com/236x/6d/d3/f4/6dd3f426534070096400f54cd7a8f731.jpg",
    id: 3,
  },
  {
    name: "Chocolate Strawberry Cake",
    category: "Cake",
    price: 12500,
    stock: 0,
    created: "11/03/24",
    lastUpdated: "11/03/24",
    image:
      "https://i.pinimg.com/236x/9d/25/93/9d2593780fe22eba7acf1ea6e9e57110.jpg",
    id: 4,
  },
];
