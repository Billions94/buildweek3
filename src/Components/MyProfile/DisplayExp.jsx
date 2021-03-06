import ExpPicModal from "./ExpPicModal";
import PutExExp from "./PutExExp";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const DisplayExp = ({ user, token, me }) => {
  console.log(user);

  const [data, setData] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  const [picExp, setPicExp] = useState(false);
  const [expId, setExpId] = useState("");

  const fetchExp = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences`,
        {
          headers: {
            Authorization: token,
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
      {user._id === me && (
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
          {user._id === me && (
            <ExpPicModal
              expId={exp._id}
              userId={user._id}
              picExp={picExp}
              setPicExp={setPicExp}
              fetchExp={fetchExp}
            />
          )}
          <hr />
          <Row key={exp._id} className="text-left">
            <Col md={3}>
              <img src={exp.image} width="100" />
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
            {user._id === me && (
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
                <button
                  onClick={() => {
                    setPicExp(true);
                    // ExpPicModal(
                    //   exp._id,
                    //   exp.user,
                    //   picExp,
                    //   setPicExp
                    // expId,
                    // setExpId
                    // );
                  }}
                  className="profile-button pencil-button"
                >
                  <i class="bi bi-image"></i>
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
