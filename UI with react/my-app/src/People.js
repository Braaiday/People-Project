import React, {Component} from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import { AddPersonModal } from "./AddPersonModal";
import { EditPersonModal } from "./EditPersonModal";
import { DeletePersonModal } from "./DeletePersonModal";

export class People extends Component{

    
    constructor(props){
        //this.state ={tristan:[]};
        super(props);
        this.state={people:[], addModalShow: false, editModalShow:false, deleteModelShow: false};
        
    }
    refreshPeopleList(){
        fetch('https://localhost:44331/api/people')
        .then(response => response.json())
        .then(data=>{
            this.setState({people:data});
            console.log("Return Succesfull")
        })

     
        
    }

    componentDidMount(){
        this.refreshPeopleList();
    }

    // componentDidUpdate(){
    //     this.refreshPeopleList();
    // }


    render(){ //Keep in mind that this is actually jsx not html
        const {people, personId, personName, personSurname, dateOfBirth} = this.state;
        let addModalClose=()=>this.setState({addModalShow: false});
        let editModalClose=()=>this.setState({editModalShow: false});
        let deleteModalClose=()=>this.setState({deleteModelShow: false});
        return( 
            <div>
                <br/>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Person
                    </Button>
                    <AddPersonModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>PersonId</th>
                            <th>Name</th> 
                            <th>Surname</th> 
                            <th>Date of birth</th>
                            <th>Options</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {people.map(person =>
                            <tr key={person.personId}>
                                <td>{person.personId}</td>
                                <td>{person.personName}</td>
                                <td>{person.personSurname}</td>
                                <td>{person.dateOfBirth}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                        onClick={()=>this.setState({editModalShow:true,personId:person.personId,personName:person.personName,
                                            personSurname:person.personSurname,dateOfBirth:person.dateOfBirth})}>
                                                Edit
                                            </Button>
                                            <EditPersonModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            personId={personId}
                                            personName={personName}
                                            personSurname={personSurname}
                                            dateOfBirth={dateOfBirth}/>

                                            <Button className="mr-2" variant="danger"
                                               onClick={()=>this.setState({deleteModelShow:true,personId:person.personId})}>
                                                    Delete
                                            </Button>
                                            <DeletePersonModal show={this.state.deleteModelShow}
                                            onHide={deleteModalClose}
                                            personId={personId}/>

                                    </ButtonToolbar>

                                </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            </div>
        )
    }
}