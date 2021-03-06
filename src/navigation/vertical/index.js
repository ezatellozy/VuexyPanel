export default [
  {
    title: "Users",
    icon: "UserIcon",
    children: [
      {
        title: "List",
        route: "apps-users-list",
      },
      {
        title: "View",
        route: { name: "apps-users-view", params: { id: 21 } },
      },
      {
        title: "Edit",
        route: { name: "apps-users-edit", params: { id: 21 } },
      },
    ],
  },
  {
    title: "Agenda",
    icon: "UserIcon",
    route: "agenda-list",
  },
];
