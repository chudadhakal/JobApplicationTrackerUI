
function Header() {
  const logOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("email");
    window.location.href = "/login";
  }
  //Hiding logout button if user is not logged in
  const userID = localStorage.getItem("userId");

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/dashboard">AppliTracker</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          {userID && (
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/profile">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/settings">Settings</a>
              </li>
            </ul>
              <div className="d-flex">
                <button className="btn btn-primary btn-sm" type="button" onClick={logOut}>Log Out</button>
              </div>
            
          </div>
          )}
        </div>
      </nav>
    </header>
  );
}


export default Header;