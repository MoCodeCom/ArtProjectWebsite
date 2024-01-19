import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeLanguagesService } from '../../services/change-languages.service';

@Component({
  selector: 'app-oil-color',
  templateUrl: './oil-color.component.html',
  styleUrl: './oil-color.component.css'
})
export class OilColorComponent implements OnInit{
  language:string = "";
  constructor(
    private router:Router,
    private serivceLanguage:ChangeLanguagesService) {
      this.serivceLanguage.behaviourSubject.subscribe((val)=>{
        this.language = val;
      });
  }
  ngOnInit(): void {
    this.serivceLanguage.behaviourSubject.subscribe((val)=>{
      this.language = val;
    });
  }

  back(){
    this.router.navigate(['/','works']);
  }
}
