import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SideBarSm from "./SideBarSm/SideBarSm";
import SideBarRight from "./SideBarRight";
import MainFeedSection from "./MainFeedSection";


const Home = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
{/*----------------------- SideBarSm Section -----------------------*/}
          <Col md={3} >
              <SideBarSm />
          </Col>
{/*----------------------- Main Feed Section -----------------------*/}
          <Col md={6}>
            <MainFeedSection />
          </Col>
{/*----------------------- Sidebar-Right Section -------------------*/}
          <Col className="p-0" md={3}>  
            <SideBarRight />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(Home);
