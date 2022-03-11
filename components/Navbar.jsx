const Navbar = ({ children }) => {
  return (
    <nav>
      <a>Justin Diaz</a>
      <ul>{children}</ul>
      <style jsx>{`
        nav {
          background-color: pink;
          display: flex;
          justify-content: space-between;
          padding: 1rem 1.6rem;
        }
        ul {
          display: flex;
          justify-content: flex-end;
          margin: 0;
        }
      `}</style>
    </nav>
  );
};
Navbar.Item = function NavbarItem({ text, link }) {
  return (
    <li>
      <a href={link}>{text}</a>
      <style jsx>{`
        li {
          list-style-type: none;
          padding: 0;
          margin: 0 0.5rem;
        }
      `}</style>
    </li>
  );
};

export default Navbar;
