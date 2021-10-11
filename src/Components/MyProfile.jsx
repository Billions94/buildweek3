import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "../Components/MyProfile/MyJumbotron";

const MyProfile = () => {
  return (
    <>
      {/*Main Container*/}
      <Container>
        <Row>
          {/*Larger central Column*/}
          <Col md={8}>
            {/*Main feed*/}
            <Container fluid>
              <Row className="pt-2">
                <Col md={12}>
                  <MyJumbotron />
                </Col>

                {/*Your Dashboard Section*/}
                <Col
                  md={12}
                  className="mt-3 section-container"
                  id="dashboard-container"
                  style={{ width: "auto" }}
                >
                  <section className="col-12" id="dashboard">
                    <div className="info-container">
                      <div>
                        <h3 className=" dashboard-title">Your Dashboard</h3>
                      </div>
                      <div className="section-container d-flex d-inline">
                        <a className="dashboard-data">
                          <span className=" d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex d-inline-block">
                            Who viewed your profile
                          </span>
                        </a>
                        <a
                          className="dashboard-data"
                          style={{ borderLeft: "1px solid black" }}
                        >
                          <span className=" d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex d-inline-block">
                            Who viewed your profile
                          </span>
                        </a>
                        <a
                          className="dashboard-data"
                          style={{ borderLeft: "1px solid black" }}
                        >
                          <span className="d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex d-inline-block">
                            Who viewed your profile
                          </span>
                        </a>
                      </div>
                      <div className="section-container" id="dashboard-options">
                        <div className="d-flex d-inline-block">
                          <i class="bi bi-people-fill"></i>
                          <p>
                            Creator Mode:<span>off</span>
                          </p>
                          <p>
                            Grow your audience and get discovered by
                            highlighting content on your profile.
                          </p>
                        </div>
                        <div className="d-flex d-inline-block">
                          <i class="bi bi-people-fill"></i>
                          <p>
                            Creator Mode:<span>off</span>
                          </p>
                          <p>
                            Grow your audience and get discovered by
                            highlighting content on your profile.
                          </p>
                        </div>
                        <div className="d-flex d-inline-block">
                          <i class="bi bi-people-fill"></i>
                          <p>
                            Creator Mode:<span>off</span>
                          </p>
                          <p>
                            Grow your audience and get discovered by
                            highlighting content on your profile.
                          </p>
                        </div>
                        <div className="d-flex d-inline-block">
                          <i class="bi bi-people-fill"></i>
                          <p>
                            Creator Mode:<span>off</span>
                          </p>
                          <p>
                            Grow your audience and get discovered by
                            highlighting content on your profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </Col>
                {/*Your Dashboard END*/}
              </Row>
            </Container>
          </Col>
          {/*Larger central Column END*/}
          {/*Smaller right Column start*/}
          <Col md={4}>
            <Row>
              <Container fluid>
                {/*edit section right column*/}
                <div className="section-container">
                  <div className=" d-flex justify-content-between">
                    <p>{"Edit public profile & URL"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                  <hr style={{ width: "90%" }} />
                  <div className=" d-flex justify-content-between">
                    <p>{"Add profile in another language"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                  {/*edit section right column END*/}

                  {/*People also viewed section */}
                  <div className="mt-2 section-container">
                    <div className="alsoViewed">
                      <h4>People also viewed</h4>
                      <ul>{/*Insert generated content here!!*/}</ul>
                    </div>
                  </div>
                  {/*People also viewed section END */}
                  <div className="mt-2 section-container">
                    <div className="alsoViewed">
                      <h4>People you may know</h4>
                      <ul>{/*Insert generated content here!!*/}</ul>
                    </div>
                  </div>
                </div>
              </Container>
            </Row>
          </Col>
          {/*Smaller right Column end*/}
        </Row>
      </Container>

      {/*Main Container End*/}
    </>
  );
};

export default MyProfile;
