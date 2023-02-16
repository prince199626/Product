export const menuItems = [
  {
    label: "Products",
    path: "/products",
    icon: "fas fa-home",
  },
  {
    label: "Users",
    path: "/users",
    icon: "fas fa-user",
    children: [
      {
        label: "All Users",
        path: "user",
      },
      {
        label: "All Post",
        path: "post",
      },
      {
        label: "All Comment",
        path: "comments",
      },
    ],
  },

];
