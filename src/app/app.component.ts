import { Component } from '@angular/core';
import { last } from 'rxjs';
interface Student {
  firstname:string
  lastname:string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject2';
  name:string = 'shineness'
  age:number = 35
  school:boolean = false
  allSchool:(number|string) = 'yes'
  myage:any = 'djjdj'
  obj:Student={
    firstname: 'Sunday',
    lastname: 'djdjjdj'
  }
  myarray:Student[]=[]
}


// ngOnInit() {

// }