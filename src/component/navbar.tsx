interface NavBarProps {
  webName: string;
  imgSource: string;
}
function NavBar({ webName, imgSource }: NavBarProps) {
  return (
    <nav className="navbar navbar-light bg-black shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imgSource}
            alt="Logo"
            width="66"
            height="66"
            className="d-inline-block align-text-center"
          />
          <span className="fw-lighter fs-4 text-light">{webName}</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
