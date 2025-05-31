import { NavLink } from "react-router-dom";

const menu = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Tasks", path: "/tasks" },
  { label: "Chats", path: "/chat" },
  { label: "Meetings", path: "/meetings" },
  { label: "Resources", path: "/resources" },
];

function Sidebar() {
  return (
    <div className="my-3 bg-dark text-white p-4 m-3 rounded" style={{ maxWidth: "250px", minHeight: "70vh" }}>
      {menu.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.path}
          className={({ isActive }) =>
            `btn mb-2 w-100 text-start ${
              isActive ? "btn-light text-dark" : "btn-outline-light"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
