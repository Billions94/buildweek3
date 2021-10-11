import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Skills = () => {
  return (
    <div id="skills">
      <Row>
        <Col>
          <h5> Featured Skills & Endorsements</h5>
        </Col>
        <Col>
          <p>
            {" "}
            Add a new skill{" "}
            <img
              src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-pen-fine-arts-kiranshastry-gradient-kiranshastry.png"
              width="20"
            />
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> JavaScript 100% </span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> JavaScript 100%</span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col className="text-left pl-5">
          <span className=" bg-light rounded-pill p-2"> JavaScript 100%</span>
        </Col>
        <Col>
          <p>
            John Doe and 3 others connections have given endorsements for this
            skill
          </p>
        </Col>
      </Row>
      <hr />
      <Row>
        {" "}
        <p className="text-center">
          See 1000 more skills
          <img
            src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"
            width="20"
          />
        </p>
      </Row>
    </div>
  );
};

export default Skills;
