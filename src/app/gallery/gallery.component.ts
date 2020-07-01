import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let  secoffset = $("#gallery").offset().top;
let h =$("#gallery").outerHeight();
let d=secoffset-h;

    $(window).scroll(function() {
      let userScroll=$(window).scrollTop();
      if(userScroll>=d){
        $("#gallery img").addClass("animate__jackInTheBox")
      }

    });
  }

}
