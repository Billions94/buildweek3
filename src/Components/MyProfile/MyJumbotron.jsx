import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileSettings from "../UserProfile/ProfileSettings";

const MyJumbotron = ({ user }) => {
  return (
    <>
      <Jumbotron
        fluid
        className="rounded-lg bg-white p-0"
        id="jumbotron-banner"
      >
        <Row>
          <img
            id="profile-pic"
            src="http://localhost:3000/assets/alex.jpeg"
            alt="ProfilePicture"
            width="130"
            height="130"
          />
        </Row>
        <Row className="p-2" style={{ marginTop: "250px" }}>
          <Col className="text-left ">
            <h5>{user.name}</h5>
            <p className="mb-0">{user.title}</p>
            <br />
            <p>
              <Button variant="primary" className="jumbobtn-open-to">
                Open to
              </Button>
              <Button variant="white" className="jumbobtn ml-2">
                Add section
              </Button>
              <Button variant="white" className="jumbobtn ml-2">
                More
              </Button>
            </p>
            <div className="opened-to-work text-left p-2">
              <div className="mb-0">

                <b className="text-dark jumbo-a">
                  Show recruiters you’re open to work
                </b>
                <br />
                <span className="text-dark jumbo-a">
                  you control who sees this
                </span>
                <br />
                <a
                  href=""
                  style={{ color: "rgb(33, 93, 172)", cursor: "pointer" }}
                >
                  Get started
                </a>
              </div>
            </div>
          </Col>
          <Col className="text-right ">
          <ProfileSettings user={user} />
              <div className=" mt-2 d-flex-row align-items-right justify-content-between">
            <img className="mr-2" src="https://strive.school/favicon.ico" width="25" />
            <b> Strive School</b>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default MyJumbotron;
