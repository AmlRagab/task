import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let  secoffset = $("#features").offset().top;
    let h =$("#features").outerHeight();
    let d=secoffset-h;
    
        $(window).scroll(function() {
          let userScroll=$(window).scrollTop();
          if(userScroll>=d){
            $("#features .container ").addClass("animate__fadeInRightBig")
          }
    
        });
  
  }
}
