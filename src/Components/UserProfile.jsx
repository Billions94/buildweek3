// /* 


// /* </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>
// </*NOT ACTIVE - DO NOT USE THIS PAGE!!!!!*/>; */ */


import { useState, useEffect, setState } from "react";
import { fetchInfo } from "../lib";
import { Container, Row, Col } from "react-bootstrap";
import MyJumbotron from "../Components/MyProfile/MyJumbotron";
import DisplayExp from "../Components/MyProfile/DisplayExp";
import Skills from "../Components/MyProfile/Skills";
import PyMk from "./MyProfile/PyMk";
import UserProfileJumbotron from "./UserProfile/UserProfileJumbotron";
import SecondPYMK from "./MyProfile/SecondPYMK";


const UserProfile = (props) => {
  const [data, setData] = useState([]);
  const myUrl = `https://striveschool-api.herokuapp.com/api/profile/`;

  const [uid, SetUid] = useState("");
  const { id } = props.match.params;

  useEffect(() => {
    if (typeof id !== "undefined") {
      SetUid(id);
    }
  }, [id]);
  console.log("the id :" + uid + ": ends");

  useEffect(() => {
    const fetchData = async (uid) => {
      const data = await fetchInfo(myUrl + uid);
      setData(data);
      console.log(data);
    };
    fetchData(uid);
  }, [uid]);
  console.log(data);
  const user = data;

  return (
    <>
      <div className="mt-3">
        <a
          href="https://www.talent.io/p/en-de/home?utm_source=linkedin&utm_medium=cpc&utm_campaign=%5BLI%5D-DE-Germany-Candidates-Frontend-TA&li_fat_id=713b0a02-5b8e-4676-9f0c-592df8135a78"
          className="ad text-center text-dark"
        >
          <a className="text-primary">Frontend Entwickle</a>
          🚨 7000 Unternehmen suchens auf talent.io neue Mitarbeiter·innen. €60k
          to €120k{" "}
        </a>
        <span className="ml-2">
          Ad <span className="ad-span">...</span>
        </span>
      </div>
      {/*Main Container*/}
      <Container className="mt-3">
        <Row>
          {/*Larger central Column*/}
          <Col md={8}>
            {/*Main feed*/}
            <Container fluid>
              <Row>
                <Col md={12} className="p-0">
                  <UserProfileJumbotron user={data} />
                </Col>

                {/*About Section*/}
                <Col md={12} className="p-0">
                  <div className="section-container mt-3">
                    <div className="d-flex d-inline-block justify-content-between">
                      <h4>About</h4>
                      <button className="profile-button pencil-button">
                        <i class="bi bi-pencil"></i>
                      </button>
                    </div>
                    <div>
                      <p>{user.bio}</p>
                    </div>
                  </div>
                </Col>
                {/*About Section END*/}

                {/*Activity Section*/}
                <Col md={12} className="p-0">
                  <div className="section-container mt-3">
                    <div className="text-left">
                      <div className="d-flex d-inline-block justify-content-between">
                        <h4>Activity</h4>
                        <button className="profile-button">Start a post</button>
                      </div>
                      <p className="text-muted">11 followers</p>
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

                <Col md={12} className="p-0">
                  <Skills />
                </Col>
                {/*Skills section End*/}

                <Col md={12} className="p-0">
                  <div className="section-container mt-3">
                    <div className="d-flex d-inline-block justify-content-between">
                      <h4>Experience</h4>
                    </div>
                    <div>
                      <DisplayExp id={uid} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
          {/*Larger central Column END*/}

          {/*Smaller right Column start*/}
          <Col md={4}>
            <Row>
              <Container fluid>
                {/*edit section right column*/}
                <div className="section-container pt-0 pb-0 list-group list-group-flush">
                  <div className=" d-flex justify-content-between list-pad1 list-group-item">
                    <p>{"Edit public profile & URL"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                  <div className=" d-flex justify-content-between list-pad2 list-group-item">
                    <p>{"Add profile in another language"}</p>
                    <i class="bi bi-question-circle-fill"></i>
                  </div>
                </div>
                {/*edit section right column END*/}

                {/* ad section */}
                <div className="mt-3 profile-ad list-group">
                  <div className="list-group-item  p-0">
                    <a href="https://www.linkedin.com/jobs/?trk=consumer_jobs_global_fallback">
                      <img
                        src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                {/* ad section */}

                {/*People also viewed section */}
                <div>
                  <div className="mt-3 section-container">
                    <div className="alsoViewed">
                      <h4 className="myprofileh4 text-left">
                        People also viewed
                      </h4>
                      <ul className="ul">
                        {/*Insert generated content here!!*/}
                        <PyMk />
                        <>
                          <SecondPYMK />
                        </>
                      </ul>
                    </div>
                  </div>
                  {/*People also viewed section END */}
                  <div className="mt-2 section-container">
                    <div className="alsoViewed">
                      <h4 className="myprofileh4 text-left mb-3">
                        People you may know
                      </h4>
                      <ul className="ul">
                        <PyMk />
                        <>
                          <SecondPYMK />
                        </>
                      </ul>
                    </div>
                  </div>
                </div>
                <div></div>
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

export default UserProfile;


