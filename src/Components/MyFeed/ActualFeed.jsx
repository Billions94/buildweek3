import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

const ActualFeed = () => {
  let [feed, setFeed] = useState([]);

  const fetchFeed = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o",
          },
        }
      );
      const exp = await response.json();

      setFeed(exp);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchFeed();
    console.log(feed);
  }, []);

  const slicedFeed = feed.slice(800, 850);

  return (
    <>
      {slicedFeed.map((elem) => (
        <div>
          <Card className="my-3 feedelement">
            <Card.Header>
              <Card.Text>
                <Row>
                  <Col>
                    <img
                      src={elem.user.image}
                      width="50"
                      height="50"
                      //   style={{ borderRadius: "50%" }}
                    />{" "}
                    <b>
                      &nbsp;&nbsp;
                      {elem.user.name} {elem.user.surname}
                    </b>
                  </Col>
                  <Col className="text-right">
                    <h2>
                      <i class="bi bi-three-dots"></i>
                    </h2>
                  </Col>{" "}
                </Row>
              </Card.Text>
              <Card.Text>{elem.user.title}</Card.Text>
              {/* <Card.Text>{elem.text}</Card.Text> */}
            </Card.Header>
            <Card.Img
              className="feedelementImg"
              variant="top"
              src={elem.image}
            />
            <Card.Body>
              <Card.Text>{elem.text}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">
              <Row>
                <Col className="px-0">
                  <b>
                    <h5>
                      <i class="bi bi-hand-thumbs-up"></i>&nbsp; Like
                    </h5>{" "}
                  </b>
                </Col>
                <Col className="px-0">
                  <b>
                    <h5>
                      <i class="bi bi-chat-right-text"></i>&nbsp; Comment
                    </h5>{" "}
                  </b>
                </Col>
                <Col className="px-0">
                  <b>
                    <h5>
                      <i class="bi bi-arrow-90deg-right"></i>&nbsp; Share
                    </h5>{" "}
                  </b>
                </Col>
                <Col className="px-0">
                  <b>
                    <h5>
                      <img
                        src="https://img.icons8.com/ios-filled/50/000000/paper-plane.png"
                        width="22"
                      />
                      &nbsp; Send
                    </h5>{" "}
                  </b>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </div>
      ))}
    </>
  );
};
export default ActualFeed;
