import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserProfileJumbotron = (props) => {

    console.log("USER PROPS IN JUMBOTRON")
    console.log(props.user)
    const user = props.user
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
            src={user.image}
            alt="ProfilePicture"
            width="130"
            height="130"
          />
        </Row>
        <Row>
          <Col className="text-left mt-3 p-4">
            <h5 style={{ marginTop: "70%" }}>{user.name} {user.surname}</h5>
            <p className="mb-0">
              {user.title}
            </p>
            <p className="location-text">{user.area}</p>
            <br />
            <p>
              <Button variant="primary" className="jumbobtn-open-to">
                Connect
              </Button>
              <Button
                variant="white"
                className="jumbobtn ml-2"
              >
                Message
              </Button>
              <Button
                variant="white"
                className="jumbobtn ml-2"
              >
                More
              </Button>
            </p>
          </Col>
          <Col>
            <p style={{ marginTop: "82%" }}>
              <img src="https://strive.school/favicon.ico" width="25" />
              <b> Strive School</b>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default UserProfileJumbotron;
