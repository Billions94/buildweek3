import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyJumbotron = () => {
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNdh_lxtlEr00s_eTQExT-4e2eN1rDREDTQ&usqp=CAU"
            alt="ProfilePicture"
            width="130"
            height="130"
          />
        </Row>
        <Row>
          <Col className="text-left mt-3 p-4">
            <h5 style={{ marginTop: "70%" }}>Ma Real Name</h5>
            <p className="mb-0">
              This is a simple placeholder, job, loacation et ecetera
            </p>
            <br />
            <p>
              <Button variant="primary" className="jumbobtn-open-to">
                Open to
              </Button>
              <Button
                variant="white"
                className="jumbobtn ml-2"
              >
                Add section
              </Button>
              <Button
                variant="white"
                className="jumbobtn ml-2"
              >
                More
              </Button>
            </p>
            <div className="opened-to-work text-left p-2">
              <div className="mb-0">
                <b className="text-dark jumbo-a">Show recruiters you’re open to work</b> 
                <br />
                 <span className="text-dark jumbo-a">you control who sees this</span> 
                <br />
                <a href="" style={{ color: "rgb(33, 93, 172)", cursor: "pointer" }}>Get started</a>
              </div>
            </div>
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

export default MyJumbotron;
