import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import POSTModal from "./POSTModal";

const StartAPost = () => {
  const [smShow, setSmShow] = useState(false);

  return (
    <div className="border p-2" style={{ borderRadius: "10px" }}>
      <Row className="mt-3">
        <Col md={2}>
          {" "}
          <img
            style={{ borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKNdh_lxtlEr00s_eTQExT-4e2eN1rDREDTQ&usqp=CAU"
            alt="ProfilePicture"
            width="60"
            height="60"
          />
        </Col>
        <Col>
          <POSTModal smShow={smShow} setSmShow={setSmShow} />
          <Button
            onClick={() => {
              setSmShow(true);
            }}
            className="btn btn-light border-secondary rounded-pill py-3"
            style={{ width: "100%" }}
          >
            Start a post
          </Button>
        </Col>
      </Row>
      <Row className="mt-2 p-1">
        <Col>
          <img
            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-photo-virtual-reality-kiranshastry-gradient-kiranshastry.png"
            width="45"
          />{" "}
          &nbsp;Photo
        </Col>
        <Col>
          <img src="https://img.icons8.com/nolan/48/video.png" width="42" />
          &nbsp;Video
        </Col>
        <Col>
          <img
            src="https://img.icons8.com/cute-clipart/50/000000/tear-off-calendar.png"
            width="42"
          />
          &nbsp;Event
        </Col>
        <Col>
          <img
            src="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-article-blogger-and-influencer-itim2101-flat-itim2101-2.png"
            width="42"
          />{" "}
          &nbsp;Article
        </Col>
      </Row>
    </div>
  );
};
export default StartAPost;
