export const route = useRoute();
const routePath = route.path;

export const headerRoutes = [
  {
    to: "/",
    label: "Home",
    active: routePath === "/"
  },
  {
    to: "/projects",
    label: "Projects",
    active: routePath === "/projects"
  },
  {
    to: "/bookmarks",
    label: "Bookmarks",
    active: routePath === "/bookmarks"
  },
  {
    to: "/about",
    label: "About",
    active: routePath === "/about"
  },
];