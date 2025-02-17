import Link from "next/link";

function NavBar() {
  return (
    <div className="navbar">
      <h3>NextCRUD</h3>
      <ul className="list">
        <li>
          <Link href="/">Tasks</Link>
        </li>
        <li>
          <Link href="/new">New</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
