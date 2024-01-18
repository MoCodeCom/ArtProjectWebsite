import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguagesService {

  constructor() { }
  language:string="Arabic";
  behaviourSubject = new BehaviorSubject<string>("English");


}
