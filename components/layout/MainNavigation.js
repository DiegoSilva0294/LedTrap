import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Logo from "./Logo";
import { useSession, signOut } from "next-auth/react";

function MainNavigation() {
  const { data: session } = useSession();

  async function logoutHandler() {
    await signOut();
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false), 3000;
    });
  }

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/control">Control</Link>
          </li>
          <li>
            <Link href="/batery">Bateria</Link>
          </li>
          <li>
            <Link href="/graph">Graficos</Link>
          </li>
          {!session && (
            <li>
              <Link href="/login">Log in</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler} className={classes.button}>
                Log out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
