import { Component, OnInit } from '@angular/core';
import { ChangeLanguagesService } from '../services/change-languages.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnInit{
  language:string = ""
  constructor(private serviceLanguage:ChangeLanguagesService) {
    this.serviceLanguage.behaviourSubject.subscribe((val)=>{
      this.language = val;

    });
  }
  ngOnInit(): void {
    this.serviceLanguage.behaviourSubject.subscribe((val) =>{
      this.language = val;
    })
  }
}
