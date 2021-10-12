import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ResponsiveEmbed } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DesktopDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const ModalPop = ({ user, fetchExp }) => {
  const [lgShow, setLgShow] = useState(false);
  const [checked, setChecked] = useState(false);

  const validationSchema = yup.object().shape({
    role: yup.string().required("Title is required"),
    company: yup.string().required("Company is required"),
    startDate: yup
      .string()

      .required("Start date is required"),
    endDate: yup
      .string()

      .required("End date is required"),
    description: yup.string().required("Confirm Password is required")
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    setFieldValue
  } = useFormik({
    initialValues: {
      role: "",
      company: "",
      startDate: new Date(),
      endDate: new Date(),
      description: "",
      area: ""
    },
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${user.id}/experiences`,
          {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
          }
        );
        console.log(response);
        if (response.ok) {
          fetchExp();
          setLgShow(false);
        }
      } catch (e) {
        console.log(e);
      }
    },
    validationSchema: validationSchema
  });

  return (
    <>
      <div className="modalbtn" onClick={() => setLgShow(true)}>
        <i class="bi bi-plus-lg bi-css text-dark "></i>
      </div>
      <Modal
        // className="modal"
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
        <Modal.Body className="p-0">
          <Form className="px-4">
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Title*</Form.Label>
              <Form.Control
                name="role"
                type="text"
                value={values.role}
                onChange={handleChange}
                placeholder="Ex: Retail Sales Manager"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-muted">Employment type</Form.Label>
              <Form.Control as="select">
                <option>Please select</option>
                <option> Full-time</option>
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
              <a href="" style={{ fontWeight: "bold" }}>
                Learn more
              </a>
            </div>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Company name*</Form.Label>
              <Form.Control
                type="text"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Ex; Microsoft"
              />
              <Form.Text className="text-muted">
                Country-specific employment types
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Location</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={values.area}
                onChange={handleChange}
                placeholder="Ex: London, United Kingdom"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                className="mt-5 mb-2"
                type="checkbox"
                label="I'm currently working in this  role"
                // onClick={() => setChecked(true)}
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />

              <div className="d-flex">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DesktopDatePicker
                    label="Start Date"
                    value={values.startDate}
                    onChange={(date) => setFieldValue("startDate", date)}
                    name="startDate"
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                {/* <Form.Group>
                  <Form.Label className="text-muted dateMY">
                    Start date
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                  >
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
                
                
                <Form.Group
                  className="ml-2 dateMY"
                  style={{ marginTop: "32px" }}
                >
                  <Form.Control
                    as="select"
                    name="startDate"
                    value={values.startDate}
                    onChange={handleChange}
                  >
                    <option>Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                  </Form.Control>
                </Form.Group>
              */}
              </div>

              {checked && (
                <div className="d-flex ">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="End date"
                      value={values.endDate}
                      onChange={(date) => setFieldValue("startDate", date)}
                      name="endDate"
                      renderInput={(params) => <TextField {...params} />}
                    />{" "}
                  </LocalizationProvider>
                  {/* <Form.Group>
                  <Form.Label className="text-muted dateMY">
                    End date
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleChange}
                  >
                    <option>Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group
                  className="ml-2 dateMY"
                  style={{ marginTop: "32px" }}
                >
                  <Form.Control
                    as="select"
                    name="endDate"
                    value={values.endDate}
                    onChange={handleChange}
                  >
                    <option>Year</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                    <option>2016</option>
                    <option>2015</option>
                    <option>2014</option>
                    <option>2013</option>
                    <option>2012</option>
                    <option>2011</option>
                  </Form.Control>
                </Form.Group>
              */}
                </div>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Headline</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="text-muted">Industry</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Text className="text-muted">
                LinkedIn uses industry information to provide more relevant
                recommendations
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <label for="description" className="text-muted">
                Description
              </label>
              <Form.Control
                as="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                id="description"
                rows="4"
                cols="81"
              />
              <Form.Text className="text-muted text-right">0/2,000</Form.Text>
            </Form.Group>
            <Button
              className="mb-3 md-add-media"
              variant="primary"
              type="submit"
            >
              <span className="text-primary span-md-btn1">
                <i class="bi bi-plus-lg bi-css1 text-primary "></i>Add media
              </span>
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-save"
            variant="primary"
            onClick={() => handleSubmit()}
          >
            <span className="span-md-btn">Save</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalPop;

//   const formCkeck = () => {
//     if (
//       values.name.length > 2 &&
//       values.surname.length > 2 &&
//       values.email.length > 2 &&
//       values.password.length > 7 &&
//       values.confirmPassword.length > 7
//     ) {
//       return true;
//     }
//   };
//   useEffect(() => {
//     formCkeck();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [
//     values.name,
//     values.surname,
//     values.email,
//     values.password,
//     values.confirmPassword,
//   ]);
