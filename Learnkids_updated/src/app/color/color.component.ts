import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public respond(red){
    if (red==='red')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondg(red){
    if (red==='green')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondb(red){
    if (red==='blue')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondy(red){
    if (red==='yellow')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondgr(red){
    if (red==='gray')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondv(red){
    if (red==='violet')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondp(red){
    if (red==='pink')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public respondpp(red){
    if (red==='purple')
        alert ("congractulations");
    else
      alert ("ohhhh try again");
  }
  public homee(){
    this.router.navigate(['/home']);
  }
  
}
