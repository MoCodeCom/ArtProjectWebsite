import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChangeLanguagesService } from '../../services/change-languages.service';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css'
})
export class SectionHeaderComponent implements OnInit{

  engLanguage:string[] = ["Home","Works","Blog","About"]
  arbLanguage:string[] = ["الرئيسية","الاعمال","مدونة","عن الفنان"];
  nav:string[] = [];
  langBtn = "English";
  ListClass:string = "slideDivDefault";


  @ViewChild('slideRef')viewSlide:ElementRef;

  constructor(private serviceLanguage:ChangeLanguagesService) {
    this.nav = this.arbLanguage;

  }
  ngOnInit(): void {

  }

  ChangLanguage(){
    if(this.langBtn == "English"){
      this.langBtn = "Arabic"
      this.nav = [];
      this.nav = this.engLanguage;
      this.serviceLanguage.behaviourSubject.next("Arabic");
    }else{
      this.langBtn = "English"
      this.nav = [];
      this.nav = this.arbLanguage;
      this.serviceLanguage.behaviourSubject.next("English");
    }

  }

  SlideList(){
    const val = this.viewSlide.nativeElement;
    val.style.visibility = 'visible';

  }

  HideList(){

    const val = this.viewSlide.nativeElement;
    val.style.visibility = 'hidden';

  }

}
