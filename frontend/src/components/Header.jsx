export default function Header() {
  return (
    <header>
      <nav className="header-navigation">
        <div>
          <a href="">
            <img id="header-logo" src="diamond.png" alt="Header Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Order</a>
          </li>
          <li>
            <a href="">Our Customers</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">English</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
