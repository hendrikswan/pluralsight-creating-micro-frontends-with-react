import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>Rizz Phones</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </div>
  );
}
