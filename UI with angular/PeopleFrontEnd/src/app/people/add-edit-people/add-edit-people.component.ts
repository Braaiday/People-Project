import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-people',
  templateUrl: './add-edit-people.component.html',
  styleUrls: ['./add-edit-people.component.css']
})
export class AddEditPeopleComponent implements OnInit {

  loading = false;
  success= false;

  successString: string;

  today = new Date();

  @Input() ButtonTitle:any;

  constructor(private fb : FormBuilder, private service:SharedService) { }

  peopleForm: FormGroup;

  @Input() person:any;

  ngOnInit(): void {
    this.peopleForm = this.fb.group({
      name: [this.person.personName,[Validators.required,Validators.minLength(1)]],
      surname: [this.person.personSurname,[Validators.required,Validators.minLength(1)]],
      dateOfBirth: [this.person.dateOfBirth,[Validators.required,Validators.minLength(8)]]
});
  }

  TimeZoneOffSet(_date:string){
    const d = new Date(_date)
    // This will return an ISO string matching your local time.
     return new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes() - d.getTimezoneOffset()).toISOString();
  }

  
 ExecuteDataBaseAction(){
    //Add person remastered and updated person remastered
    this.loading = true;

     var val = {personId:this.person.personId,
                 personName:this.peopleForm.get('name')?.value,
                 personSurname:this.peopleForm.get('surname')?.value,
                 dateOfBirth:this.TimeZoneOffSet(this.peopleForm.get('dateOfBirth')?.value),
               }

    
      if ( this.person.personId == 0)
      {
        this.service.addPerson(val).subscribe();
         this.successString = "Person has been added";
      }
      else if (this.person.personId != 0)
         {
          this.service.updatePerson(val).subscribe();
           this.successString = "Person has been updated";
         }
      this.success = true;
      this.loading = false;
    
  }



  get name(){
    return this.peopleForm.get('name');
  }

  get surname(){
    return this.peopleForm.get('surname');
  }

  get dateOfBirth(){
    return this.peopleForm.get('dateOfBirth');
  }

}
