import styles from "./Navigation.module.css"
function Navigation() {
  return (
    <nav className={`${styles.navigation} container`}>
      {/* brand image */}
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      {/* menu */}
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}
export default Navigation;
