import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "../Components/MyProfile/MyJumbotron";
import Skills from "../Components/MyProfile/Skills";
import { useState, useEffect } from "react";
import { fetchInfo } from "../lib";
import PyMk from "./MyProfile/PyMk";

const MyProfile = () => {
  const [data, setData] = useState([]);
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInfo(myUrl);
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  console.log(`hey it's me`);

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
                  className="mt-2 section-container"
                  id="dashboard-container"
                  style={{ width: "auto" }}
                >
                  <section className="col-12" id="dashboard">
                    <div className="info-container">
                      <div className="text-left">
                        <h3 className=" dashboard-title">Your Dashboard</h3>
                      </div>
                      <div className="section-container d-flex justify-content-between">
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
                      <div
                        className="section-container mt-2"
                        id="dashboard-options"
                      >
                        <div className="d-flex justify-content-left align-items-center">
                          <i class=" mr-2 bi bi-people-fill"></i>
                          <div className="d-flex-column  d-inline-block m-0">
                            <p className="m-0">
                              Creator Mode:
                              <span style={{ fontStyle: "italic" }}>off</span>
                            </p>
                            <p>
                              Grow your audience and get discovered by
                              highlighting content on your profile.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-left align-items-center">
                          <i class=" mr-2 bi bi-people-fill"></i>
                          <div className="d-flex-column  d-inline-block m-0">
                            <p className="m-0">Manage Connections</p>
                            <p>Manage your connections, events and iterests.</p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-left align-items-center">
                          <i class="mr-2 bi bi-cash"></i>
                          <div className=" d-flex-column  d-inline-block m-0">
                            <p className="m-0">Salary Insights</p>
                            <p>
                              See how your salary compares to others in the
                              community.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-left align-items-center">
                          <i class=" mr-2 bi bi-bookmark-fill"></i>
                          <div className="d-flex-column  d-inline-block m-0">
                            <p className="m-0">My Items</p>
                            <p>Keep track of your jobs courses and articles.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Col>
                {/*Your Dashboard END*/}
                {/*About Section*/}
                <Col md={12}>
                  <div className="section-container mt-3">
                    <div className="d-flex d-inline-block justify-content-between">
                      <h4>About</h4>
                      <i class=" profile-button bi bi-pencil"></i>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse id libero ac est egestas tincidunt. Proin
                        nec interdum massa. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus
                      </p>
                    </div>
                  </div>
                </Col>
                {/*About Section END*/}

                {/*Activity Section*/}
                <Col md={12}>
                  <div className="section-container mt-3">
                    <div className="text-left">
                      <div className="d-flex d-inline-block justify-content-between">
                        <h4>Activity</h4>
                        <button className="profile-button">Start a post</button>
                      </div>
                      <p style={{ color: "blue", cursor: "pointer" }}>
                        11 followers
                      </p>
                    </div>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse id libero ac est egestas tincidunt. Proin
                        nec interdum massa. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus
                      </p>
                    </div>
                  </div>
                </Col>
                {/*Activity Section END*/}

                {/*Skills section Start*/}

                <Col md={12}>
                  <Skills />
                </Col>

                {/*Skills section End*/}
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
                </div>
                {/*edit section right column END*/}

                {/*People also viewed section */}
                <div>
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
                <div>
                <PyMk />
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
