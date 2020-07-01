import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let  secoffset = $(" .box").offset().top;
    let h =$(" .box").outerHeight();
    let d=secoffset-h;    
        $(window).scroll(function() {
          let userScroll=$(window).scrollTop();
          console.log(userScroll)
          if(userScroll >=d ){
            $(" .box").addClass("animate__zoomIn")
          }
    
        });
  }

}
