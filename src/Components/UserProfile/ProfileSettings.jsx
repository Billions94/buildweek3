import { Button, Modal, Form, Container } from "react-bootstrap";
import { SetState, useState } from "react";

const ProfileSettings = ({user}) =>{
  const [lgShow, setLgShow] = useState(false);
const [name, setName] = useState("")
  const [settings, setSettings] = useState({
    name: user.name,
    surname: user.surname,
    email: user.email,
    bio: user.bio,
    title: user.title,
    area: user.area,

  })
console.log(user)

 const updateUserSettings = async (e) => {
    e.preventDefault(e)
    try {
        const response = await fetch(("https://striveschool-api.herokuapp.com/api/profile/"),{
            method: "PUT",
            body: JSON.stringify(settings),
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZjUwMGE4OTBjYzAwMTVjZjA3ZTIiLCJpYXQiOjE2MzM5NDA3MzcsImV4cCI6MTYzNTE1MDMzN30.b4fHuXDwJcxn6c0Vu-wZ1dWzMlTBO6elAUs0C_9xB4o"
            }
            } )
        if(response.ok) {
            console.log(response)
            alert("Updated successfully")

        } else {
            console.log(`wow... that wasn't supposed to happen... Error`)
            alert(`Woops we lost your data in the void .. try refreshing`)
        }
        
    } catch (error) {
        console.error(error)
    }
}






    return(
        <>
                        
      <button className="profile-button pencil-button" onClick={() => setLgShow(true)}><i class="bi bi-pencil"></i></button>
        <div className="justify-content-center" style={{margin:"0 auto"}}>
      <Modal
        id="profile-settings"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton id="profile-settings">
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <small className="text-muted">* indicates required fields</small>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" onInput={(event) => setSettings({...settings, name: event.target.value})} value={settings.name} placeholder="Enter your first name" />
                    
                    <Form.Label>Surname *</Form.Label>
                    <Form.Control type="text" onInput={(event) => setSettings({...settings, surname: event.target.value})} value={settings.surname} placeholder="Enter your surname" />

                    <Form.Label>Email address *</Form.Label>
                    <Form.Control type="email" onInput={(event) => setSettings({...settings, email: event.target.value})} value={settings.email} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Label>Bio *</Form.Label>
                    <Form.Control type="textarea" onInput={(event) => setSettings({...settings, bio: event.target.value})} value={settings.bio} placeholder="Tell the world about yourself" />


                    <Form.Label>Position Title *</Form.Label>
                    <Form.Control type="text" onInput={(event) => setSettings({...settings, title: event.target.value})} value={settings.title} placeholder="What position do you hold?" />
             

                    <Form.Label>Area *</Form.Label>
                    <Form.Control type="text" onInput={(event) => setSettings({...settings, area: event.target.value})} value={settings.area} placeholder="Where are you based?" />







                    <Button onClick={e => updateUserSettings(e)}>Save</Button>
         </Form.Group>
         </Form>

        </Modal.Body>
      </Modal>
      </div>
    </>
    )
}
export default ProfileSettings