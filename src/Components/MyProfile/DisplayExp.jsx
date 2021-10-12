import { fetchUserExp } from "../../lib";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const DisplayExp = () => {
  const [data, setData] = useState([]);
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/6163f550a890cc0015cf07e3/experiences`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserExp(myUrl);
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return data.map((exp) => (
    <>
      <hr />
      <Row key={exp._id} className="text-left">
        <Col md={3}>
          <h6>{exp.company}</h6>
        </Col>
        <Col md={9}>
          <h6>{exp.role}</h6>
          <p>{exp.company}</p>
          <p>
            {exp.startDate} - {exp.endDate}
          </p>
          <p>{exp.area}</p>
          <br />
          <p>{exp.description}</p>
        </Col>
      </Row>
    </>
  ));
};

export default DisplayExp;
