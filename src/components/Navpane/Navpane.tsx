// 3rd Party & React Imports
import { NavLink } from "react-router-dom";

// Types
import { View } from "../../custom";

// Styles
import styles from "./Navpane.module.css";

interface Props {
  icon: string;
  views: Array<View>;
}

const Navpane = (props: Props) => {
  return (
    <nav id="navbar" className={styles["navbar"]}>
      <img id="site-icon" alt="site-icon" src={props.icon} />
      <div>
        {props.views.map((view: View) => (
          <NavLink
            key={view.title}
            to={view.url}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <h1>{view.title}</h1>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navpane;
