
import {Link, withRouter} from "react-router-dom"

const NavBar = () => {

  return (
    <div className="navbar-container">
        <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="./assets/linkedin.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="input-container">
          <i id="input-icon" class="bi bi-search"></i>
          <input
            className="ml-3 search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          className="collapse navbar-collapse home-margin"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <div>
              <li className="nav-item active navbar-li">
              <img className="pt-2 ml-1" src="./assets/home.png" alt="" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                 <span> Home </span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="pt-2 ml-1" src="./assets/network.png" alt="" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Network</span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="pt-2 ml-2" src="./assets/briefcase.png" alt="" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Jobs</span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="pt-2" src="./assets/chat.png" alt=""  width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Messaging</span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="pt-2" src="./assets/notification.png" alt="" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Notifications</span>
                </a>
              </li>
            </div>
            <div className="xx ">
              <img className="pt-3" src="./assets/alex.jpeg" alt="" width="24px" />
              {/* <DropdownButton
                menuAlign="right"
                title=""
                id="dropdown-menu-align-right"
              >
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
              </DropdownButton> */}
            </div>
            <div className="ml-5 pt-2">
                <li className="nav-item active navbar-li">
                <img className="ml-2" src="./assets/thumbnails.png" alt="" width="22px" />
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Work</span>
                </a>
              </li>
            </div>
            <div className="pt-2">
                <a className="link-color"href="#" >Try premium for free</a>
            </div>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
