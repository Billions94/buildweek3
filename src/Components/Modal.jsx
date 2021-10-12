import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

// import ModalBody from "react-bootstrap/ModalBody";
// import ModalHeader from "react-bootstrap/ModalHeader";
// import ModalFooter from "react-bootstrap/ModalFooter";
// import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const ModalPop = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <div className="modalbtn" onClick={() => setLgShow(true)}><i class="bi bi-plus-lg text-dark "></i></div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Add experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form style={{height:"700px", overflowY:"auto"}}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Title*</Form.Label>
              <Form.Control type="text" placeholder="Ex: Retail Sales Manager" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-muted">Employment type</Form.Label>
              <Form.Control as="select">
                <option>Please select</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Self-employed</option>
                <option>Freelance</option>
                <option>Contract</option>
                <option>Internship</option>
                <option>Apprenticeship</option>
                <option>Freiwilliges Soziales Jahr</option>
                <option>Verbeamtet</option>
                <option>Duales Studium</option>
                <option>Werkstudium</option>
              </Form.Control>
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <div className="mb-3">
              <a href="">Learn more</a>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Company name*</Form.Label>
              <Form.Control type="text" placeholder="Ex; Microsoft" />
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Location</Form.Label>
              <Form.Control type="text" placeholder="Ex: London, United Kingdom" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
              className="mt-3 mb-2"
                type="checkbox"
                label="I'm currently working in this  role"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Headline</Form.Label>
              <Form.Control type="text" placeholder="Text" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Industry</Form.Label>
              <Form.Control type="text" placeholder="Text" />
              <Form.Text className="text-muted">
              LinkedIn uses industry information to provide more relevant recommendations
              </Form.Text>
            </Form.Group>

            <Form.Group>
            <label for="description" className="text-muted">Description</label>
            <textarea id="description" name="w3review" rows="4" cols="88">
            </textarea>
            <Form.Text className="text-muted text-right">
              0/2,000
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Add media
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPop;
