import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../data/data";

function Sidebar() {
  return (
    <div
      className="bg-warning "
      style={{
        width: "300px",
        height: "100vh",
      }}
    >
      <ul>
        {navLinks.map((ele) => {
          console.log(ele);
          return (
            <>
              <div>{ele.content}</div>
              {ele.items.map((cat) => (
                <li key={cat.id}>
                  <Link to={cat.url}>{cat.label}</Link>
                </li>
              ))}
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
