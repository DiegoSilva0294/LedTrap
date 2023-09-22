import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <div>LedTrap</div>
      <nav>
        <ul>
            <li>
                <Link href='/control'>Control</Link>
            </li>
            <li>
                <Link href='/bateria'>Bateria</Link>
            </li>
            <li>
                <Link href='/graph'>Graficos</Link>
            </li>
            <li>
                <Link href='/login'>Log in</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
