import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
      console.log('data service works');
   }
   getPosts(){
     return this.http.get('https://pixabay.com/api/?key=9045270-8185a4efd7fe1e4fc41c3709e').map(res=>res.json()); 
      }

}
