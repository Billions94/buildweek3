import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyJumbotron = () => {
  return (
    <>
      <Jumbotron
        fluid
        className="rounded-lg bg-white"
        style={{ height: "100%" }}
        id="jumbotron-banner"
      >
        <Row>
          <img
            id="profile-pic"
            src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fcdn2.f-cdn.com%2Fppic%2F75814888%2Flogo%2F17261130%2FkjtlA%2Fprofile_logo_.png&sp=1633952420T7dc1c68651c0733dd25853ea3f811721bb86c1a915e380c67dcebc4c640ed515"
            alt="ProfilePicture"
            width="130"
            height="130"
          />
        </Row>
        <Row>
          <Col>
            <h5 style={{ marginTop: "60%" }}>Ma Real Name</h5>
            <p>This is a simple placeholder, job, loacation et ecetera</p>
            <br />
            <p>
              <Button variant="primary" className="rounded-pill mx-1">
                Open to
              </Button>
              <Button
                variant="white"
                className="rounded-pill mx-1 border border-secondary"
              >
                Add section
              </Button>
              <Button
                variant="white"
                className="rounded-pill mx-1 border border-secondary"
              >
                More
              </Button>
            </p>
            <div className="border border-secondary rounded-lg text-left p-2 m-2">
              <p>
                <b>Show recruiters you’re open to work</b> — you control who
                sees this. <br />
                <a>Get started</a>
              </p>
            </div>
          </Col>
          <Col>
            <p style={{ marginTop: "50%" }}>
              <b>Strive School Ladys and Gentelman</b>
            </p>
          </Col>
        </Row>
      </Jumbotron>
    </>
  );
};

export default MyJumbotron;
