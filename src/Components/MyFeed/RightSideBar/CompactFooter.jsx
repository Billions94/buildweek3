import { Row, Col } from "react-bootstrap"


const CompactFooter = () =>{

    return(
        <>
        <Row>
                <Col xs={3} md={4} className="footer-link">
                  <a>About</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Accessibility</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Talent Solutions</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Community Guidelines</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Careers</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Marketing Solutions</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>
                    {"Privacy & Terms"} <i class="bi bi-chevron-down"></i>
                  </a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Ad Choices</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Advertising</a>
                </Col>

                <Col xs={3} md={4} className="footer-link">
                  <a>Sales Solutions</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Mobile</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Small Business</a>
                </Col>
                <Col xs={3} md={4} className="footer-link">
                  <a>Safety Center</a>
                </Col>
              </Row>
        </>
    )
}

export default CompactFooter