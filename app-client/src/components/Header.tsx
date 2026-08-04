import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        background: "#282c34",
        color: "white",
        padding: "15px",
      }}
    >
      <h2>React Router App</h2>

      <nav>
        <Link to="/dashboard" style={{ color: "white", marginRight: "15px" }}>
          Dashboard
        </Link>

        <Link to="/user" style={{ color: "white", marginRight: "15px" }}>
          User
        </Link>

        <Link to="/services" style={{ color: "white" }}>
          Services
        </Link>
      </nav>
    </header>
  );
}

export default Header;