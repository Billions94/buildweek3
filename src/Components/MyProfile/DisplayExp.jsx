import { fetchUserExp } from "../../lib";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

const DisplayExp = (props) => {
  const params = useParams()
  const [data, setData] = useState([]);
  
  //   console.log(userId);

  // const myUrl = `https://striveschool-api.herokuapp.com/api/profile/6163f550a890cc0015cf07e3/experiences`;
  // const myUrl2 = userId
    // ? `https://striveschool-api.herokuapp.com/api/profile/` +
    //   userId.toString() +
    //   `/experiences`
    // : undefined;
  //   console.log(myUrl2.toString());
  //   const userIdtrue = !userId ? myUrl2 : myUrl;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserExp(!userId ? myUrl : myUrl2);
      setData(data);
      console.log("here we go");
      console.log(data);
    };
    fetchData();
  }, [params.]);

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
