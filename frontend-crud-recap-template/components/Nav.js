import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/photos/create">Add Photo</Link>
      <Link href="/photos/favorites">Favorites</Link>
    </nav>
  );
}
