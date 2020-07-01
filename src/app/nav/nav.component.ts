import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(window).scroll(function() {
      let usersroll = $(window).scrollTop();
     
      if (usersroll >="50") {
    
        $("nav").css("backgroundColor", "rgba(0,0,0,0.4)");
    
      }
      else {
        $("nav").css("backgroundColor", "transparent")
      
      }});

      $("#navbar a").click(function () {
        let idOfLink = $(this).attr("href")
        let  secoffset = $(idOfLink).offset().top;
        $("html,body").animate({ scrollTop:secoffset }, 1000)
      });

      $("#menue-btn").click(function (){
        $("nav").css("backgroundColor", "rgba(0,0,0,0.4)");


      })
    }}