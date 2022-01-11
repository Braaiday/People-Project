import { PipeResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit {

  constructor(private service:SharedService) { 

  }
  PeopleList: any[];

  WantToDelete: any;

  ModalTitle:string;
  ButtonTitle:string;



  ActivateAddEditPeopleComp:boolean=false;
  person:any;

  ngOnInit(): void {
    this.loadPeopleList();
  }


  addClick(){
    this.person={
      personId:0,
      personName:"",
      personSurname:"",
      dateOfBirth:""
    }
    this.ModalTitle="Add Person";
    this.ButtonTitle="Add";
    this.ActivateAddEditPeopleComp=true;
  }

  editClick(item:any){
    this.person=item;
    this.ModalTitle="Edit Person";
    this.ButtonTitle="Update";
    this.ActivateAddEditPeopleComp=true;
  }

  deleteClick(){

    this.service.deletePerson(this.WantToDelete.personId).subscribe( data =>
      {
        this.loadPeopleList();
      });
    
  }

  ItemToDelete(item:any){
    this.WantToDelete = item;
    this.ModalTitle = "Delete person"
  }

  closeClick(){
    this.ActivateAddEditPeopleComp=false;
    this.loadPeopleList();
  }

  loadPeopleList(){
    this.service.getPeopleList().subscribe(data=>{
      this.PeopleList=data;
    });
  }

  calculateAge(val:string){ 

    var today = new Date();
    var birthDate = new Date(val);
    var age = today.getFullYear() - birthDate.getFullYear();
    var month = today.getMonth() - birthDate.getMonth();
    
    if ((month < 0) || (month === 0 && today.getDate() < birthDate.getDate()))
    {
        age = age - 1;
    }
    return age;
  }
}
