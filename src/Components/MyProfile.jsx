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
      <Container className="mt-5">
        <Row>
          {/*Larger central Column*/}
          <Col md={8}>
            {/*Main feed*/}
            <Container fluid>
              <Row >
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
                        <h3 className="dashboard-title">Your Dashboard</h3>
                        <p className="text-muted dashboard-p"><em>private to you</em></p>
                      </div>
                      <div className="section-container p-0 d-flex justify-content-between">
                        <a className="dashboard-data1">
                          <span className=" d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Who viewed your profile
                          </span>
                        </a>
                        <a
                          className="dashboard-data"
                        >
                          <span className=" d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Post views
                          </span>
                        </a>
                        <a
                          className="dashboard-data"
                        >
                          <span className="d-flex d-inline-block dashboard-figure">
                            0
                          </span>
                          <span className="d-flex text-dark d-inline-block">
                            Search appearances
                          </span>
                        </a>
                      </div>
                      <div
                        className="section-container p-0 mt-3 mb-4 list-group list-group-flush"
                        id="dashboard-options"
                      >
                        <a className="d-flex justify-content-left align-items-center list-group-item ">
                          <i class="text-muted mr-2 mb-6 bi bi-people-fill"></i>
                          <a className="d-flex-column text-dark d-inline-block m-0">
                            <h6 className="dashboard-h6 m-0">
                              Creator Mode: <span className="text-muted ">off</span>
                            </h6>
                            <p className="text-muted mb-0">
                              Grow your audience and get discovered by
                              highlighting content on your profile.
                            </p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item  ">
                          <i class="text-muted mr-2 mb-6 bi bi-people-fill"></i> 
                          <a className="d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">Manage Connections</h6>
                            <p className="text-muted mb-0">Manage your connections, events and iterests.</p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item  ">
                          <i class="text-muted mr-2 mb-6 bi bi-cash"></i>
                          <a className=" d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">Salary Insights</h6>
                            <p className="text-muted mb-0">
                              See how your salary compares to others in the
                              community.
                            </p>
                          </a>
                        </a>
                        <a className="d-flex justify-content-left align-items-center list-group-item  ">
                          <i class="text-muted mr-2 mb-6 bi bi-bookmark-fill"></i>
                          <a className="d-flex-column text-dark d-inline-block m-0 ">
                            <h6 className="dashboard-h6 m-0">My Items</h6>
                            <p className="text-muted mb-0">Keep track of your jobs courses and articles.</p>
                          </a>
                        </a>
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
              <Container fluid >
                {/*edit section right column*/}
                <div className="section-container list-group list-group-flush">
                  <div className=" d-flex justify-content-between list-group-item">
                    <p>{"Edit public profile & URL"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                  <div className=" d-flex justify-content-between list-group-item">
                    <p>{"Add profile in another language"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                </div>
                {/*edit section right column END*/}

                {/*People also viewed section */}
                <div>
                  <div className="mt-2 section-container">
                    <div className="alsoViewed">
                      <h4 className="myprofileh4 text-left">People also viewed</h4>
                      <ul>{/*Insert generated content here!!*/}</ul>
                    </div>
                  </div>
                  {/*People also viewed section END */}
                  <div className="mt-2 section-container">
                    <div className="alsoViewed">
                      <h4 className="myprofileh4 text-left mb-3">People you may know</h4>
                      <ul className="ul">
                       
                        <PyMk />
                                            
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
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
