//import { fetchUserExp } from "../../lib";
import PutExExp from "./PutExExp";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import ModalPop from "./Modal";
import { fetchExp } from "../../lib";

const DisplayExp = ({ user }) => {
  console.log(user);

  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [expId, setExpId] = useState("");

  const fetchExp = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o",
          },
        }
      );
      const exp = await response.json();

      setData(exp);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchExp();
  }, [user]);

  console.log();
  return (
    <>
      {user._id === "6163f500a890cc0015cf07e2" && (
        <Modal
          user={user._id}
          fetchExp={fetchExp}
          lgShow={lgShow}
          setLgShow={setLgShow}
          expId={expId}
        />
      )}
      {data.map((exp) => (
        <>
          <hr />
          <Row key={exp._id} className="text-left">
            <Col md={3}>
              <h6>{exp.company}</h6>
            </Col>
            <Col md={8}>
              <h6>{exp.role}</h6>
              <p>{exp.company}</p>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.area}</p>
              <br />
              <p>{exp.description}</p>
            </Col>
            {user._id === "6163f500a890cc0015cf07e2" && (
              <Col md={1}>
                <button
                  onClick={() => {
                    PutExExp(
                      exp._id,
                      exp.user,
                      lgShow,
                      setLgShow,
                      expId,
                      setExpId
                    );
                  }}
                  className="profile-button pencil-button"
                >
                  <i class="bi bi-pencil"></i>
                </button>
              </Col>
            )}
          </Row>
        </>
      ))}{" "}
    </>
  );
};

export default DisplayExp;

// onClick={() => {editExperience(exp._id, exp.user)}}
