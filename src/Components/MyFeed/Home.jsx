import { withRouter } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SideBarSm from "./SideBarSm";
import SideBarRight from "./SideBarRight";


const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
            {/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3} >
              <SideBarSm />
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="http://www.plm.automation.siemens.com/media/global/de/Artificial-Intelligence-AI-Automotive-AT%20__tcm53-91272.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
                      {/*----------------------- Sidebar-Right Section -----------------------*/}

          <Col className="p-0" md={3}>
            

            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Home);
