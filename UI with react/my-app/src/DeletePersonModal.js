import React,{Component} from "react";
import { Modal,Button, Row,Col,Form } from "react-bootstrap";

export class DeletePersonModal extends Component{
constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}



handleSubmit(event){
    event.preventDefault();
    fetch('https://localhost:44331/api/people/' + this.props.personId,{
                method: 'DELETE',
                header: {'Accept': 'application/json',
                        'Content-Type' : 'application/json'
                        }
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
                        Delete Person
                    </Modal.Title>
                </Modal.Header> 
                <Modal.Body>
                    <Row>
                        <Col sm={6}>   
                            <h1>Are you sure you want to delete this person</h1>
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Form onSubmit={this.handleSubmit}>
                        <Button variant="primary" type="submit">Delete Person</Button>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Form>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

}