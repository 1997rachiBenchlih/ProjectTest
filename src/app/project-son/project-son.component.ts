import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-son',
  templateUrl: './project-son.component.html',
  styleUrls: ['./project-son.component.css']
})
export class ProjectSonComponent implements OnInit {
  @Input() reve: string | undefined;
  @Input() status: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }
  getStatus(){
    return this.status;
  }
  getColor(){
    if(this.status==="encore"){
      return 'red';
    }else{
      return 'green';
    }
  }

}
