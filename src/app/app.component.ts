import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'My first App Angular';
  isAuth = false;
  lastUpdate1= new Date();
  lastUpdate= new Promise((resolve, reject)=>{
   const date=new Date();
  setTimeout(
    ()=>{
      resolve(date);
      },2000
     );
  });
  dreams = [
    {
      reve: 'Femme d affaires',
      status: 'realise'
    },
    {
      reve: 'developpeur',
      status: 'encore'
    },
    {
      reve: 'Mamon',
      status: 'realise'
    }
  ];
  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onRealise(){
    console.log('Tout est realise!');
  }
  ngOnInit() {
    const counter= Observable.interval(1000);
    counter.subscribe(
      (value) =>{
         this.secondes=value;
      },
      (error) => {
        console.log('Une erreur a été rencontrée !');
      },
      ()=>{
        console.log('Observable complétée !');
      }
    );

  }

}
