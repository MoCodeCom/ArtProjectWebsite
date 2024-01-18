import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLanguagesService } from '../services/change-languages.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  language:string="";

  constructor(private router:Router,
              private serviceLanguage:ChangeLanguagesService) {

                this.serviceLanguage.behaviourSubject.subscribe((val)=>{
                  this.language= val;

                });
  }
  ngOnInit(): void {
    this.serviceLanguage.behaviourSubject.subscribe((val)=>{
                  this.language= val;
                });
  }


  workBtnHome(){
    this.router.navigate(['/','works']);
  }
}
