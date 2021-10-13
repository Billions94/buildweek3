import {Link, withRouter,} from "react-router-dom"

const NavBar = () => {

  return (
    <div className="navbar-container sticky-top">
        <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand m-0" href="#">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png' width="36px"/>
        </a>
        <button
          className="navbar-toggler "
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
              <img className="darknavicon pt-3 ml-2" src="https://img.icons8.com/material-rounded/50/000000/home.png" width="22px"/>
                <Link to={"/home"} className="nav-link pt-0 ml-2" href="#">
                 <span> Home </span>
                </Link>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="darknavicon pt-3 ml-2" src="https://img.icons8.com/fluency-systems-filled/50/000000/myspace.png"  width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Network</span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="darknavicon pt-3 ml-2" src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-bag-airport-kiranshastry-solid-kiranshastry.png" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Jobs</span>
                </a>
              </li>
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="darknavicon pt-3 ml-2" src="https://img.icons8.com/ios-glyphs/30/000000/sms.png" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Messaging</span>
                </a>
              </li> 
            </div>
            <div>
              <li className="nav-item active navbar-li">
              <img className="darknavicon pt-3 ml-2" src="https://img.icons8.com/glyph-neue/30/000000/appointment-reminders.png" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Notifications</span>
                </a>
              </li>
            </div>
            <div className="xx ">
              <img className="pt-3" src="./assets/alex.jpeg" alt="" width="24px" />
              <Link to={"/profile/me"} className="d-block pb-2" style={{fontWeight:"400", fontSize:"12px", lineSpace:"20px"}}><span className="text-dark">Me</span></Link>
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
            <div className="ml-5 pt-2 ">
                <li className="nav-item active navbar-li">
                <img className="darknavicon mt-2 ml-2" src="https://img.icons8.com/material-sharp/60/000000/activity-grid-2.png" width="22px"/>
                <a className="nav-link pt-0 ml-2" href="#">
                   <span>Work</span>
                </a>
              </li>
            </div>
            <div className="pt-3">
                <a className="link-color navbar-li"href="#" ><span className="try-prem d-block mb-0">Try premium for <br className="mt-0"/> free</span></a>
            </div>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
