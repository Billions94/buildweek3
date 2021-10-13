import { Jumbotron, Container, Row, Col, Accordion, Card } from "react-bootstrap"
import {Link} from 'react-router-dom'

const FirstSideBar = () => {

    return (
        <div className="row mb-0">
       
        <Container>
      <Jumbotron id="SideBarHeader" fluid className="jumboSidebar pb-1 pt-4">
          <Row className="justify-content-center SideBarSm-row ">
            <Col>
              <img
                className="SideBarImg"
                id="profile-pic"
                src="http://localhost:3000/assets/alex.jpeg"
                alt="ProfilePicture"
                width="80"
                height="80"
              />
            </Col>
          </Row>
          <Row className=" rowborder " style={{marginTop: "96px"}}>
            <Col className="text-left ">
              <div>
                <Link to={"/profile/me"} className="text-center text-dark d-block" style={{fontSize: "16px" ,fontWeight: "600", lineHeight: "24px"}}>Egbedi Ejiroghene <br/> Alexander</Link> 
              </div>
                <p className="SideBarSm-p text-center text-muted mt-1">Aspiring FullStack Web Developer</p>          
            </Col>
          </Row>
          <hr className="SideBarSm-Hr" />
          <Row className=" rowborder " style={{marginTop: "6px"}}>
            <Col className="text-left ">
              <div >
                <Link to={"/profile/me"} className="text-center text-dark d-block text-decoration-none">
                    <div className="d-flex whoviewied-flex wvmpDiv">
                        <h3 className="SideBarSm-h3 text-center text-muted mt-1">Who viewed your profile</h3>
                        <h3 className="SideBarSm-h3 text-center text-primary mt-1">46</h3>
                    </div>
                    </Link> 
              </div>
              <div>
                <Link to={"/profile/me"} className="text-center text-dark d-block text-decoration-none" >
                <div className="d-flex whoviewied-flex wvmpDiv">
                        <h3 className="SideBarSm-h3 text-center text-muted mt-1">Who viewed your post</h3>
                        <h3 className="SideBarSm-h3 text-center text-primary mt-1">146</h3>
                    </div>
                    </Link> 
              </div>      
            </Col>
          </Row>
            <hr className="SideBarSm-Hr" />
            <Row className=" rowborder " style={{marginTop: "6px"}}>
            <div className="col">
                <Link to={"/profile/me"} className="text-center text-dark d-block text-decoration-none wvmpDiv">
                    <div className="">
                        <span className="SideBarSm-h3 d-block mb-0">Access exclusive tools & highlight</span>
                        <img src="" alt=""/>
                        <h3 className="SideBarSm-h3 text-center mt-0 text-muted mt-1">Try Premium for free</h3>
                    </div>
                    </Link> 
              </div>
            </Row>
            <hr className="SideBarSm-Hr" />
            <Row className=" rowborder " style={{marginTop: "6px"}}>
            <div className="col">
                <Link to={"/profile/me"} className="text-center text-dark d-block text-decoration-none wvmpDiv" >
                    <div className="d-flex">
                    <i class="bi bi-bookmark-fill mr-2"></i>
                        <h3 className="SideBarSm-h3 text-center text-muted mt-1">My items</h3>
                    </div>
                    </Link> 
              </div>
            </Row>

      </Jumbotron>
        </Container>
  </div>
    )
}

export default FirstSideBar