import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBarSm from "./SideBarSm";
import MainFeedSection from "./MainFeedSection";

const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          {/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3}>
            <SideBarSm />
          </Col>
          {/*----------------------- Main Feed Section -----------------------*/}
          <Col md={6}>
            <MainFeedSection />
          </Col>
          {/*----------------------- SideBarSm2 Section -----------------------*/}
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Home);
