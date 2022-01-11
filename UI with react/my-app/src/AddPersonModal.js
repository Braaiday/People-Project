import React,{Component} from "react";
import { Modal,Button, Row,Col,Form } from "react-bootstrap";

export class AddPersonModal extends Component{
constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}

handleSubmit(event){
    event.preventDefault();
    fetch('https://localhost:44331/api/people',{
        method: 'POST',
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            personId:0,
            personName:event.target.personName.value,
            personSurname:event.target.personSurname.value,
            dateOfBirth:event.target.dateOfBirth.value,
        })
    })
    .then (res=>res.json())
    .then((result) =>{
        alert(result);
    },
    (error)=> {
        alert('Failed');
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
                        Add Person
                    </Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="personName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="personName" required 
                                    placeholder="Supply Name here"/>
                                </Form.Group>

                                <Form.Group controlId="personSurname">
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control type="text" name="personSurname" required 
                                    placeholder="Supply Surname here"/>
                                </Form.Group>

                                <Form.Group controlId="dateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control type="date" name="dateOfBirth" required 
                                    placeholder="Date Of Birth"/>
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add person
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