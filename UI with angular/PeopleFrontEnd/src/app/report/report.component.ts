import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ComplexObject } from '../Models/ComplexObject-model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private service:SharedService) { 

  }


  PeopleList: any[] = [];

  array_Months:string[] = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

  array_Counts:number[] = [0,0,0,0,0,0,0,0,0,0,0,0];

  _ComplexObjectList: ComplexObject[] = [];

  _ComplexObject:ComplexObject;

  ngOnInit(): void {

    this.service.getPeopleList().subscribe(data=>{
      this.PeopleList=data;
      this.loadPeopleList();
    });
  }


  getMonthPerson(_date:string){
    const date = new Date(_date)
    return date.getMonth();
  }



  loadPeopleList(){
    var month: number;
    var Person:any;

    for (var x = 0; x < this.PeopleList.length; x++)
    {
      Person = this.PeopleList[x];
      month = this.getMonthPerson(Person.dateOfBirth) + 1;
      for (var y = 1; y <= 12; y++)
      {
          if (month == y)
            {
              this.array_Counts[y - 1] = this.array_Counts[y - 1] + 1;
              break;
            }
      }
    }
    this.ComplexObjectBuilder();
  }

  ComplexObjectBuilder()
  {
    for (var x = 0; x < 12; x++)
    {
      this._ComplexObject = {
        month: this.array_Months[x],
        count:this.array_Counts[x]
      }

      this._ComplexObjectList.push(this._ComplexObject);
    }
  }

}
