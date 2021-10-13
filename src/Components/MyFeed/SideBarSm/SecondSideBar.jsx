import { Jumbotron, Container, Row, Col, Accordion, Card, Button} from "react-bootstrap"

const SecondSideBar = () => {

    return (
        <div className="row mt-0">
        <div className="col">
          <Jumbotron fluid className="jumboSidebar pb pt-4">
            <Container>
              <Row className="justify-content-center SideBarSm-row pb-0">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle className="container-fluid show-more-button1" as={Card.Header}  eventKey="0" style={{width: "100%"}}>
                      <div className="d-flex div-in-acc">
                          <h6 className="mr-6">Recent</h6>
                          <h6 className="ml-6">︿</h6>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">JavaScript</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Full-stack web developer</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Frontend developer and web...</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">React Developers ReactJS...</h3></div>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>


                <Row className="justify-content-center SideBarSm-row ">
                <Accordion defaultActiveKey="0" className="mt-0">
                  <Card>
                    <Accordion.Toggle className="container-fluid show-more-button1" as={Card.Header}  eventKey="0" style={{width: "100%"}}>
                      <div className="d-flex div-in-acc">
                          <h6 className="mr-6">Group</h6>
                          <h6 className="ml-6">︿</h6>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">JavaScript</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Full-stack web developer</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Frontend developer and web...</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">React Developers ReactJS...</h3></div>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>

              <Row className="justify-content-center SideBarSm-row pb-0">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle className="container-fluid show-more-button1" as={Card.Header}  eventKey="0" style={{width: "100%"}}>
                      <div className="d-flex div-in-acc">
                          <h6 className="mr-6">Recent</h6>
                          <h6 className="ml-6">︿</h6>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">JavaScript</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Full-stack web developer</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Frontend developer and web...</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">React Developers ReactJS...</h3></div>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>

              <Row className="justify-content-center SideBarSm-row pb-0">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Accordion.Toggle className="container-fluid show-more-button1" as={Card.Header}  eventKey="0" style={{width: "100%"}}>
                      <div className="d-flex div-in-acc">
                          <h6 className="mr-6">Recent</h6>
                          <h6 className="ml-6">︿</h6>
                      </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">JavaScript</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Full-stack web developer</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">Frontend developer and web...</h3></div>
                      <div><h3 className="text-muted SideBarSm-h3 wvmpDiv">React Developers ReactJS...</h3></div>
                      </div>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Row>

            </Container>
          </Jumbotron>
        </div>
      </div>
    )
}

export default SecondSideBar