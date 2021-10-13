import { Jumbotron, Container } from "react-bootstrap";


const SideBarSm = () => {
  return (
    <div className="">
      <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
    </div>
  );
};

export default SideBarSm;
