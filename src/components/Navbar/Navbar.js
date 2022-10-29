import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={classes.nav}>
      <a href="/" className={classes.logo}>
        <i class="fa-solid fa-peseta-sign"></i>eso{" "}
        <i class="fa-solid fa-dollar-sign"></i>ense
      </a>
      <a href="userlogin" className={classes.login}>
        <i class="fa-solid fa-arrow-right-to-bracket"></i>
      </a>
    </nav>
  );
}
