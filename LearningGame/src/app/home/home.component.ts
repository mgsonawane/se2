import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  public send(){
    this.router.navigate(['/alpha']);
  }
  public table(){
    this.router.navigate(['/tables']);
  }
  public poem(){
    this.router.navigate(['/poem']);
  }
  public calc(){
    this.router.navigate(['/calc']);
  }
}
