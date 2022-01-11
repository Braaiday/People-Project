import React,{Component} from "react";
import { Modal,Button, Row,Col,Form } from "react-bootstrap";

export class EditPersonModal extends Component{
constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault();
    fetch('https://localhost:44331/api/people',{
        method: 'PUT',
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            personId:event.target.personId.value,
            personName:event.target.personName.value,
            personSurname:event.target.personSurname.value,
            dateOfBirth:event.target.dateOfBirth.value,
        })
    })
    .then (res=>res.json())
    .then((result) =>{
        alert(result);
    })
}
render(){
    return(
        <div className="container">
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit Person
                    </Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>

                            <Form.Group controlId="personId">
                                    <Form.Label>PersonId</Form.Label>
                                    <Form.Control type="text" name="personId" required 
                                    disabled
                                    defaultValue={this.props.personId}
                                    placeholder="Supply Name here"/>
                                </Form.Group>

                                <Form.Group controlId="personName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="personName" required
                                    defaultValue={this.props.personName} 
                                    placeholder="Supply Name here"/>
                                </Form.Group>

                                <Form.Group controlId="personSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" name="personSurname" required 
                                    defaultValue={this.props.personSurname}
                                    placeholder="Supply Surname here"/>
                                </Form.Group>

                                <Form.Group controlId="dateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dateOfBirth" required 
                                    defaultValue={this.props.dateOfBirth} />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Update Person
                                    </Button>
                                </Form.Group>
                            
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

}